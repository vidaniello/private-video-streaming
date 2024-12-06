import express, {Express, NextFunction, Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import {HomePage, LoginPage} from './statics';


const httpListenPort:Number = 8080; 

class User {
    name: string = '';
}

declare module 'express-session' {
    interface SessionData {
        user : User;
    }
}

export class Http{

    static app: Express;

    public static async init(){

        Http.app = express();

        //Http.app.use(express.json());
        Http.app.use(cookieParser());

        Http.app.use(session(
            {
                secret: '33jj3hj4jk238',
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

        /* final interceptor
        Http.app.use((req, res, next) => {
            let i = 0;
            res.end();
        });
        */
    }

    static onHomePage(req: Request, resp: Response){
        let usr = req.session.user;
        if(usr==undefined){
            usr = new User();
            usr.name = 'nome';
            req.session.user = usr;
        }
        resp.send(HomePage.body());
    }


    
    static onException(exception: Error | any, resp: Response){
        resp.status(StatusCodes.BAD_REQUEST)
            .send({exceptionType: exception.name, exceptionCode: exception.code, exceptionMessage: exception.message/*, stack: JSON.stringify(error.stack)*/});
    }


 
}