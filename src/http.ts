import express, {Express, NextFunction, Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';

export class Http{

    static app: Express;

    public static async init(){

        Http.app = express();

        Http.app.use(express.json());

        Http.app.set('etag', false);

        /**Initial interceptor */
        Http.app.use((req, res, next) => {
            res.set('Cache-Control', 'no-cache, no-store, max-age=0');
            res.set('Content-Type', 'application/json; charset=utf-8');
            next()
        });
        
        Http.app.listen(8080, ()=>{
            console.log("Http-server listen on port "+8080);
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
        resp.send({appStatus: "Ok! "+new Date(), environment: 'DEVELOP'});
    }

    
    static onException(exception: Error | any, resp: Response){
        resp.status(StatusCodes.BAD_REQUEST)
            .send({exceptionType: exception.name, exceptionCode: exception.code, exceptionMessage: exception.message/*, stack: JSON.stringify(error.stack)*/});
    }
}