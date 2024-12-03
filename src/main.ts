#!/usr/bin/env node

import {Http} from './http';

export class Main{

    
    public static async start(){
        try{
            
            await Http.init();
            
        } catch(err){
            console.error(err);
            throw err;
        }
    }

    
}

//if(__filename.endsWith('dist/main.js') || __filename.endsWith('dist\\main.js'))
Main.start();