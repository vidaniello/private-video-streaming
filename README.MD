# Private Video Streaming Platform

Tiny private video streaming server platform with nodejs.

## Installation notes

The application is published in the npm repository.

Install with this command globally

    npm i -g @vidaniello/private-video-streaming

Then, find the installation path, go into `dist` folder and create `.env` file.

In the future I will make this setup more portable, for example, an initial setup procedure, so that it persists the data to an arbitrary location.

### File .env

A file named `.env` is requested in the root path of the installation dir of the server. The key/value pair field in the file `.env` are:

    httpserviceport=8080
    loginusername=[Username for the login]
    loginpassword=[Password for the login]
    expressSessionKey=[a private key for encrypt express session]
    videopath=[the full path of the video directory]


### Start the program

Simply with this command in the shell

    vidaniello.private-video-streaming.run

the server start listening http connection on the selected port in the `.env` file.

Note: use a process manager, like PM2 for autostart and more advanced life cycle control.