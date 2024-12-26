# Private Video Streaming Platform

Tiny private video streaming server platform with nodejs.

## Installation notes

The application is published in the npm repository.

### File .env

A file named `.env` is requested in the root path of the installation dir of the server. The key/value pair field in the file `.env` are:

    httpserviceport=8080
    loginusername=[Username for the login]
    loginpassword=[Password for the login]
    expressSessionKey=[a private key for encrypt express session]
    videopath=[the full path of the video directory]


