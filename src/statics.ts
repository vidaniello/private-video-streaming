

export class HomePage {
    public static body(logged:string) {
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
    <div>${logged}</div>
    <video id="videoPlayer" controls style="height: 500px;">
        <source src="http://localhost:8000/video" type="video/mp4">
    </video>
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