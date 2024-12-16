export class LoginSessionData {

    logged: boolean = false;
    username: string = null;

}

export class LoginSessionWorker {

    private lsd:LoginSessionData;

    constructor(lsd:LoginSessionData){
        this.lsd = lsd;
    }

    public isLogged():boolean {
        return this.lsd.logged;
    }

    public login(username:string):void{
        this.lsd.logged = true;
        this.lsd.username = username;
    }

    public logout():void{
        this.lsd.logged = false;
        this.lsd.username = null;
    }

    public getUsername():string {
        return this.lsd.username;
    }

    public getWelcomeMessage():string {
        return "Hi "+this.getUsername()+"!";
    }
}

export class Video {
    id:number;
    absolutePath:string;
    name:string;
}