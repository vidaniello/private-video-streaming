import express, {Express, NextFunction, Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import dotenv from 'dotenv';
import { LoginStatus } from './common';
import {HomePage, LoginPage} from './statics';


const httpListenPort:Number = 8080; 

declare module 'express-session' {
    interface SessionData {
        loginStatus : LoginStatus;
    }
}

export class Http{

    static app: Express;

    public static async init(){

        dotenv.config();

        Http.app = express();

        Http.app.use(express.urlencoded({ extended: true }));
        //Http.app.use(express.json());
        Http.app.use(cookieParser());

        let ff = process.env.expressSessionKey;

        Http.app.use(session(
            {
                secret: process.env.expressSessionKey,
                resave: false,
                saveUninitialized: true
            }
        ));

        Http.app.set('etag', false);

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
        
        Http.app.listen(httpListenPort, ()=>{
            console.log("Http-server listen on port "+httpListenPort);
        });

        Http.app.get('/', Http.onHomePage);

        Http.app.post('/login', Http.onLoginPage);


        /* final interceptor
        Http.app.use((req, res, next) => {
            let i = 0;
            res.end();
        });
        */
    }

    static onHomePage(req: Request, resp: Response){
        let logStat:LoginStatus = Http.getLoginStatus(req);
        let message:string = "";
        if(logStat.logged) {
            message = "Hi "+logStat.username+"!";
            resp.send(HomePage.body(message));
        } else {
            message = "Not Logged in";
            resp.send(LoginPage.body(message));
        }
    }

    static onLoginPage(req: Request, resp: Response){
        let logStat:LoginStatus = Http.getLoginStatus(req);
        let username = req.body.username;
        let pswd = req.body.password;
        if(username!==undefined && pswd!==undefined){
            if(username!=process.env.loginusername && pswd!=process.env.loginpassword)
                resp.send(LoginPage.body("<span style=\"color: red;\">Wrong username or password!</span>"));
            else {
                logStat.logged = true;
                logStat.username = username;
                resp.redirect("/");
            }
        } else 
            //Http.onHomePage(req, resp);
            resp.redirect("/");
    }

    static getLoginStatus(req: Request) :LoginStatus{
        let logStatus:LoginStatus = req.session.loginStatus;
        if(logStatus==undefined || logStatus==null)
            req.session.loginStatus = new LoginStatus();
        return req.session.loginStatus;
    }
    
    static onException(exception: Error | any, resp: Response){
        resp.status(StatusCodes.BAD_REQUEST)
            .send({exceptionType: exception.name, exceptionCode: exception.code, exceptionMessage: exception.message/*, stack: JSON.stringify(error.stack)*/});
    }


 
}