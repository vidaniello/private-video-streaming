import express, {Express, NextFunction, Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import {LoginSessionWorker, LoginSessionData, Video} from './common';
import {HomePage, LoginPage, VideoPage} from './statics';


const httpListenPort:Number = 8080; 

declare module 'express-session' {
    interface SessionData {
        loginStatus : LoginSessionData;
    }
}


interface VideoQuery {
    videoId:string;
}

export class Http{

    static app: Express;

    static videoList:Video[] = [];

    public static async init(){

        dotenv.config();

        Http.app = express();

        Http.app.use(express.urlencoded({ extended: true }));
        //Http.app.use(express.json());
        Http.app.use(cookieParser());

        Http.app.use(session(
            {
                secret: process.env.expressSessionKey,
                resave: false,
                saveUninitialized: true
            }
        ));

        //Http.app.set('etag', false);

        /**Initial interceptor */
        Http.app.use((req, res, next) => {
            let accept:String = req.headers.accept;
            if(accept!==undefined) if(accept!==null)
                if(accept.includes('application/json')){
                    res.set('Cache-Control', 'no-cache, no-store, max-age=0');
                    res.set('Content-Type', 'application/json; charset=utf-8');
                }
            next()
        });
        


        Http.app.get('/', Http.onHomePage);

        Http.app.post('/login', Http.onLoginPage);

        Http.app.post('/logout', Http.onLogoutPage);

        Http.app.get('/video', Http.onVideoPage);

        Http.app.get('/stream', Http.onStreamRequest);

       
        /* final interceptor
        Http.app.use((req, res, next) => {
            let i = 0;
            res.end();
        });
        */

        Http.app.listen(httpListenPort, ()=>{
            console.log("Http-server listen on port "+httpListenPort);
        });

        Http.loadAllVideo();
    }

    static loadAllVideo(){
        let fileList:string[] = [];

        Http.throughDirectory(process.env.videopath, fileList);
        fileList = Http.filterFiles(fileList);

        let i:number = 0;
        for(let file of fileList){
            i++;
            let vid:Video = new Video();
            vid.id = i;
            vid.absolutePath = file;
            vid.name = path.basename(file);
            Http.videoList.push(vid);
        }
    }

    static onHomePage(req: Request, resp: Response){
        let logStat:LoginSessionWorker = Http.getLoginStatus(req);
        let message:string = "";
        if(logStat.isLogged()) {
            message = "Hi "+logStat.getUsername()+"!";
            resp.send(HomePage.body(message, Http.videoList));
        } else {
            message = "Not Logged in";
            resp.send(LoginPage.body(message));
        }
    }

    static onLoginPage(req: Request, resp: Response){
        let logStat:LoginSessionWorker = Http.getLoginStatus(req);
        let username = req.body.username;
        let pswd = req.body.password;
        if(username!==undefined && pswd!==undefined){
            if(username!=process.env.loginusername && pswd!=process.env.loginpassword)
                resp.send(LoginPage.body("<span style=\"color: red;\">Wrong username or password!</span>"));
            else {
                logStat.login(username);
                resp.redirect("/");
            }
        } else 
            //Http.onHomePage(req, resp);
            resp.redirect("/");
    }

    static onLogoutPage(req: Request, resp: Response){
        let logStat:LoginSessionWorker = Http.getLoginStatus(req);
        logStat.logout();
        resp.redirect("/");
    }


    

    static onVideoPage(req: Request<{},{},{},VideoQuery>, resp: Response){
        let logStat:LoginSessionWorker = Http.getLoginStatus(req);
        if(!logStat.isLogged())
            resp.redirect("/");
        else {
            resp.send(VideoPage.body(logStat.getWelcomeMessage(),req.query.videoId));
        }
    }



    static onStreamRequest(req: Request, resp: Response){
        let logStat:LoginSessionWorker = Http.getLoginStatus(req);
        let l = req.params;
        let d = 0;
    }












    static getLoginStatus(req: Request<any,any,any,any>) :LoginSessionWorker{
        let logStatus:LoginSessionData = req.session.loginStatus;
        if(logStatus==undefined || logStatus==null)
            req.session.loginStatus = new LoginSessionData();
        //return Object.assign(new LoginStatus(),req.session.loginStatus)
        return new LoginSessionWorker(req.session.loginStatus);
    }
    
    static onException(exception: Error | any, resp: Response){
        resp.status(StatusCodes.BAD_REQUEST)
            .send({exceptionType: exception.name, exceptionCode: exception.code, exceptionMessage: exception.message/*, stack: JSON.stringify(error.stack)*/});
    }

    static throughDirectory(dir:string, fileList:string[]) {

        fs.readdirSync(dir).forEach(file=>{
            let absPath = path.join(dir,file);
            if(fs.statSync(absPath).isDirectory())
                Http.throughDirectory(absPath, fileList);
            else
                fileList.push(absPath);
        });

    }

    static filterFiles(listFiles:string[]):string[]{
        let ret:string[] = [];

        for(let f of listFiles)
            if(f.toLocaleLowerCase().endsWith('.mp4'))
                ret.push(f);
        
        return ret;
    }

    //info about mp4: https://stackoverflow.com/questions/36278795/node-js-get-video-and-audio-format-information-of-an-mp4-file
 
}