

import {Video} from './common';

export class HomePage {
    public static body(logged:string, allVideo:Video[]) {

        let videosHtml:string = '';

        for(let vid of allVideo){
            videosHtml += `<div><a href="/video?videoId=${vid.id}">${vid.name}</a></div>\n`;
        }

        return `
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Private video streaming platform</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
</head>
<body>
    <h1>Private video streaming platform</h1>
    <div>${logged} <form method="POST" action="/logout" style="display: inline;"><input type="submit" value="logout"></form></div> 
    <div>
        <h3>lista video</h3>
        ${videosHtml}
    </div>
</body>
</html>
`
    }
}

export class VideoPage {
    public static body(logged:string, idvideo:string) {
        return `
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Private video streaming platform</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
</head>
<body>
    <h1>Private video streaming platform</h1>
    <div>${logged} <form method="POST" action="/logout" style="display: inline;"><input type="submit" value="logout"></form></div> 
    <video id="${idvideo}" controls style="height: 500px;" controlsList="nodownload">
        <source src="/stream?videoId=${idvideo}" type="video/mp4">
    </video>
    <div>
        <a href="/">GO HOME</a>
    </div>
</body>
</html>
`
    }
}

export class LoginPage {
    public static body(message:string) {
        return `
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Private video streaming platform</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    
</head>
<body>
    <h1>Private video streaming platform</h1>
        <div>${message}</div>
    <div style="width: 260px;">
        <p>Login</p>
        <form method="POST" action="/login">
            <div style="margin: 5px;">
                username: <input type="text" name="username">
            </div>
            <div style="margin: 5px;">
                password: <input type="password" name="password">
            </div>
            <div style="width: 100%; text-align: center;">
                <input style="width: 50%;" type="submit" value="login">
            </div>
        </form>
    </div>
</body>
</html>
`
    }
}