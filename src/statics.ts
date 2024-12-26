

import {Video} from './common';

export class HomePage {
    public static body(logged:string, allVideo:Video[]) {

        let videosHtml:string = '';

        for(let vid of allVideo){
            videosHtml += `<div><a href="#" onclick="selectVideo(${vid.id});">${vid.name}</a></div>\n`;
        }

        return `
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Private video streaming platform</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <script>

        function selectVideo(id) {
            let videoElement = document.getElementById("videoElement");
            videoElement.pause();
            videoElement.currentTime = 0;
            videoElement.src = "/stream?videoId="+id;
            videoElement.play();
        } 

    </script>
</head>
<body>
    <h1>Private video streaming platform</h1>
    <div>${logged} <form method="POST" action="/logout" style="display: inline;"><input type="submit" value="logout"></form></div> 
    <div>
        <h3>lista video</h3>
        ${videosHtml}
    </div>
    <div>
        <video id="videoElement" controls style="height: 500px; width: 800px;" controlsList="nodownload">
        </video>
    </div>
</body>
</html>
`
    }
}

export class HomePage2 {
    public static body(logged:string, allVideo:Video[]) {

        let videosHtml:string = '';

        for(let vid of allVideo){
            videosHtml += `<li><a href="#" onclick="selectVideo(${vid.id});">${vid.name}</a></li>\n`;
        }

        return `
<!DOCTYPE html>

<html lang="">
<head>
<title>Private video streaming platform</title>
<meta content="summary_large_image" name="twitter:card"/>
<meta content="website" property="og:type"/>
<meta content="" property="og:description"/>
<meta content="" property="og:title"/>
<meta content="" name="description"/>
<meta charset="utf-8"/>
<meta content="width=device-width" name="viewport"/>
${getFavicon()}
<script>

    function selectVideo(id) {
        let videoElement = document.getElementById("videoElement");
        videoElement.pause();
        videoElement.currentTime = 0;
        videoElement.src = "/stream?videoId="+id;
        videoElement.play();
    } 

</script>
<style>
		.bee-row,
		.bee-row-content {
			position: relative
		}

		.bee-page-container,
		.bee-row-1,
		.bee-row-2,
		.bee-row-3,
		.bee-row-4,
		.bee-row-4 .bee-row-content {
			background-repeat: no-repeat
		}

		body {
			background-color: #ffffff;
			color: #000000;
			font-family: Arial, Helvetica, sans-serif
		}

		.bee-page-container {
			background-image: none;
			background-position: top left;
			background-size: auto
		}

		.bee-row-1 .bee-col-3 .bee-block-1 a,
		.bee-row-2 .bee-col-2 .bee-block-1 li a,
		a {
			/*color: #7747FF*/
		}

		* {
			box-sizing: border-box
		}

		body,
		h1,
		p {
			margin: 0
		}

		.bee-row-content {
			max-width: 1440px;
			margin: 0 auto;
			display: flex
		}

		.bee-row-content .bee-col-w1 {
			flex-basis: 8.3333333333%
		}

		.bee-row-content .bee-col-w4 {
			flex-basis: 33.3333333333%
		}

		.bee-row-content .bee-col-w7 {
			flex-basis: 58.3333333333%
		}

		.bee-row-content .bee-col-w8 {
			flex-basis: 66.6666666667%
		}

		.bee-row-content .bee-col-w12 {
			flex-basis: 100%
		}

		.bee-button .content {
			text-align: center
		}

		.bee-button a,
		.bee-icon .bee-icon-label-right a {
			text-decoration: none
		}

		.bee-divider {
			overflow: auto
		}

		.bee-divider .center {
			margin: 0 auto
		}

		.bee-row-2 .bee-col-1 .bee-block-1 {
			width: 100%;
			text-align: left;
		}

		.bee-icon {
			display: inline-block;
			vertical-align: middle
		}

		.bee-icon .bee-content {
			display: flex;
			align-items: center
		}

		.bee-list ul {
			margin: 0;
			padding: 0 0 0 20px
		}

		.bee-list ul li {
			list-style-position: outside
		}

		.bee-paragraph {
			overflow-wrap: anywhere
		}

		.bee-video a {
			position: relative;
			width: 100%;
			height: 100%;
			display: block
		}

		.bee-video img {
			display: block;
			width: 100%;
			height: auto
		}

		.bee-video video {
			width: 100%;
			object-fit: cover
		}

		.bee-row-1 {
			background-color: #c55df9
		}

		.bee-row-1 .bee-row-content,
		.bee-row-2 .bee-row-content,
		.bee-row-3 .bee-row-content {
			background-repeat: no-repeat;
			border-radius: 0;
			color: #000000
		}

		.bee-row-1 .bee-col-1,
		.bee-row-1 .bee-col-2,
		.bee-row-1 .bee-col-3,
		.bee-row-2 .bee-col-1,
		.bee-row-2 .bee-col-2,
		.bee-row-3 .bee-col-1,
		.bee-row-4 .bee-col-1 {
			padding-bottom: 5px;
			padding-top: 5px;
			text-align: right;
		}

		.bee-row-1 .bee-col-1 .bee-block-1 {
			padding: 10px;
			text-align: center;
			width: 100%
		}

		.bee-row-1 .bee-col-3 .bee-block-1,
		.bee-row-2 .bee-col-2 .bee-block-1,
		.bee-row-3 .bee-col-1 .bee-block-1 {
			padding: 10px
		}

		.bee-row-1 .bee-col-3 .bee-block-2 {
			padding: 10px;
			text-align: center
		}

		.bee-row-4 {
			background-color: #ffffff
		}

		.bee-row-4 .bee-row-content {
			color: #000000
		}

		.bee-row-4 .bee-col-1 .bee-block-1 {
			color: #1e0e4b;
			font-family: Inter, sans-serif;
			font-size: 15px;
			padding-bottom: 5px;
			padding-top: 5px;
			text-align: center
		}

		.bee-row-1 .bee-col-3 .bee-block-1 {
			color: #626262;
			direction: ltr;
			font-size: 16px;
			font-weight: 400;
			letter-spacing: 0;
			line-height: 120%;
			text-align: right
		}

		.bee-row-1 .bee-col-3 .bee-block-1 p:not(:last-child) {
			margin-bottom: 16px
		}

		.bee-row-1 .bee-col-3 .bee-block-2 div {
			background-color: #7747FF;
			border-radius: 4px;
			color: #ffffff;
			direction: ltr;
			font-family: inherit;
			font-size: 11px;
			font-weight: 400;
			letter-spacing: 0;
			line-height: 200%;
			padding: 5px 20px;
			width: auto
		}

		.bee-row-4 .bee-col-1 .bee-block-1 .bee-icon-image {
			padding: 5px 6px 5px 5px
		}

		.bee-row-4 .bee-col-1 .bee-block-1 .bee-icon:not(.bee-icon-first) .bee-content {
			margin-left: 0
		}

		.bee-row-4 .bee-col-1 .bee-block-1 .bee-icon::not(.bee-icon-last) .bee-content {
			margin-right: 0
		}

		.bee-row-1 .bee-col-1 .bee-block-1 h1 {
			color: #626262;
			direction: ltr;
			font-family: Arial, Helvetica, sans-serif;
			font-size: 34px;
			font-weight: 700;
			letter-spacing: normal;
			line-height: 120%;
			text-align: left
		}

		@media (max-width:768px) {
			.bee-row-content:not(.no_stack) {
				display: block
			}

			.bee-row-1 .bee-col-2 .bee-block-1 {
				height: 1px !important
			}

			.bee-row-1 .bee-col-1 .bee-block-1 h1 {
				font-size: 23px
			}
		}

		.bee-row-2 .bee-col-2 .bee-block-1 {
			color: #101112;
			direction: ltr;
			font-size: 12px;
			font-weight: 400;
			letter-spacing: 0;
			line-height: 120%;
			text-align: left
		}

		.bee-row-2 .bee-col-2 .bee-block-1 ul {
			list-style-type: revert;
			list-style-position: inside
		}

		.bee-row-2 .bee-col-2 .bee-block-1 li:not(:last-child) {
			margin-bottom: 0
		}

		.bee-row-2 .bee-col-2 .bee-block-1 li ul {
			margin-top: 0
		}

		.bee-row-2 .bee-col-2 .bee-block-1 li li {
			margin-left: 30px
		}
		.bee-button-content:hover {
			background-color:red !important;
			cursor: pointer;
		}
	</style>
</head>
<body>
<div class="bee-page-container">
<div class="bee-row bee-row-1">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w7">
<div class="bee-block bee-block-1 bee-heading">
<h1><span class="tinyMce-placeholder">Private Streaming Platform</span> </h1>
</div>
</div>
<div class="bee-col bee-col-2 bee-col-w1">
<div class="bee-block bee-block-1 bee-spacer">
<div class="spacer" style="height:60px;"></div>
</div>
</div>
<div class="bee-col bee-col-3 bee-col-w4">
<div class="bee-block bee-block-1 bee-paragraph" style="display: inline-block;">
<p>${logged} </p>
</div>
<div class="bee-block bee-block-2 bee-button" style="display: inline-block;">
<div class="bee-button-content" style="font-size: 11px; display: inline-block;">
<a style="word-break: break-word; font-size: 11px; line-height: 200%; letter-spacing: normal;" href="/logout">logout</a>
</div>
</div>
</div>
</div>
</div>
<div class="bee-row bee-row-2">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w8">
<div class="bee-block bee-block-1 bee-video">
<video id="videoElement" controls style="height: 400px; width: 800px;" controlsList="nodownload">
</video>
</div>
</div>
<div class="bee-col bee-col-2 bee-col-w4">
<div class="bee-block bee-block-1 bee-list">
<ul>
${videosHtml}
</ul>
</div>
</div>
</div>
</div>
<div class="bee-row bee-row-3">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w12">
<div class="bee-block bee-block-1 bee-divider">
<div class="center bee-separator" style="border-top:1px solid #dddddd;width:100%;"></div>
</div>
</div>
</div>
</div>
<div class="bee-row bee-row-4">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w12">
<div class="bee-block bee-block-1 bee-icons">
<div class="bee-icon bee-icon-last">
<div class="bee-content">
<div class="bee-icon-image">private</div>
<div class="bee-icon-label bee-icon-label-right">streaming platform</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</body>
</html>
`
    }
}


/*
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
    <video id="${idvideo}" controls style="height: 500px;" controlsList="nodownload" autoplay>
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
*/

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

export class LoginPage2 {
    public static body(message:string) {
        return `
<!DOCTYPE html>

<html lang="">
<head>
<title>Private video streaming platform</title>
<meta content="summary_large_image" name="twitter:card"/>
<meta content="website" property="og:type"/>
<meta content="" property="og:description"/>
<meta content="" property="og:title"/>
<meta content="" name="description"/>
<meta charset="utf-8"/>
<meta content="width=device-width" name="viewport"/>
${getFavicon()}
<style>
		.bee-row,
		.bee-row-content {
			position: relative
		}

		.bee-form .bee-form-row .bee-field button {
			font-size: inherit;
			font-family: inherit
		}

		.bee-row-1,
		.bee-row-2,
		.bee-row-3,
		.bee-row-4,
		.bee-row-5,
		.bee-row-5 .bee-row-content {
			background-repeat: no-repeat
		}

		.bee-row-1 .bee-col-3 .bee-block-1,
		.bee-row-3 .bee-col-2 .bee-block-1 {
			direction: ltr;
			font-weight: 400;
			letter-spacing: 0;
			line-height: 120%;
			color: #626262
		}

		body {
			background-color: #ffffff;
			color: #000000;
			font-family: Arial, Helvetica, sans-serif
		}

		.bee-row-1 .bee-col-3 .bee-block-1 a,
		.bee-row-3 .bee-col-2 .bee-block-1 a,
		a {
			color: #7747FF
		}

		* {
			box-sizing: border-box
		}

		body,
		h1,
		p {
			margin: 0
		}

		.bee-row-content {
			max-width: 1440px;
			margin: 0 auto;
			display: flex
		}

		.bee-row-content .bee-col-w1 {
			flex-basis: 8.3333333333%
		}

		.bee-row-content .bee-col-w4 {
			flex-basis: 33.3333333333%
		}

		.bee-row-content .bee-col-w7 {
			flex-basis: 58.3333333333%
		}

		.bee-row-content .bee-col-w12 {
			flex-basis: 100%
		}

		.bee-row-3 .bee-col-2 .bee-block-2,
		.bee-row-3 .bee-col-2 .bee-block-2 .bee-button-container {
			text-align: center
		}

		.bee-icon .bee-icon-label-right a {
			text-decoration: none
		}

		.bee-divider {
			overflow: auto
		}

		.bee-divider .center {
			margin: 0 auto
		}

		.bee-row-3 .bee-col-2 .bee-block-2 .bee-form-row:not(.bee-sidelabel) input:not([type=checkbox]):not([type=radio]) {
			width: 100%
		}

		.bee-form .bee-form-row .bee-field {
			padding: 3px;
			display: flex;
			flex: 1;
			flex-wrap: wrap;
			align-items: center
		}

		.bee-form .bee-form-row .bee-field input:not([type=checkbox]):not([type=radio]) {
			flex-grow: 1;
			font-family: inherit;
			font-size: inherit
		}

		.bee-form .bee-form-row .bee-field .bee-button-container {
			flex-grow: 1
		}

		.bee-icon {
			display: inline-block;
			vertical-align: middle
		}

		.bee-icon .bee-content {
			display: flex;
			align-items: center
		}

		.bee-paragraph {
			overflow-wrap: anywhere
		}

		.bee-row-1 {
			background-color: #c55df9
		}

		.bee-row-1 .bee-row-content,
		.bee-row-2 .bee-row-content,
		.bee-row-3 .bee-row-content,
		.bee-row-4 .bee-row-content {
			background-repeat: no-repeat;
			border-radius: 0;
			color: #000000
		}

		.bee-row-1 .bee-col-1,
		.bee-row-1 .bee-col-2,
		.bee-row-1 .bee-col-3,
		.bee-row-2 .bee-col-1,
		.bee-row-3 .bee-col-1,
		.bee-row-3 .bee-col-2,
		.bee-row-3 .bee-col-3,
		.bee-row-4 .bee-col-1,
		.bee-row-5 .bee-col-1 {
			padding-bottom: 5px;
			padding-top: 5px
		}

		.bee-row-1 .bee-col-1 .bee-block-1 {
			padding: 10px;
			text-align: center;
			width: 100%
		}

		.bee-row-1 .bee-col-3 .bee-block-1,
		.bee-row-3 .bee-col-2 .bee-block-1,
		.bee-row-4 .bee-col-1 .bee-block-1 {
			padding: 10px
		}

		.bee-row-3 .bee-col-2 .bee-block-2 {
			font-family: inherit;
			font-size: 16px;
			font-weight: 400;
			padding: 10px
		}

		.bee-row-5 {
			background-color: #ffffff
		}

		.bee-row-5 .bee-row-content {
			color: #000000
		}

		.bee-row-5 .bee-col-1 .bee-block-1 {
			color: #1e0e4b;
			font-family: Inter, sans-serif;
			font-size: 15px;
			padding-bottom: 5px;
			padding-top: 5px;
			text-align: center
		}

		.bee-row-1 .bee-col-3 .bee-block-1 {
			font-size: 16px;
			text-align: right
		}

		.bee-row-1 .bee-col-3 .bee-block-1 p:not(:last-child),
		.bee-row-3 .bee-col-2 .bee-block-1 p:not(:last-child) {
			margin-bottom: 16px
		}

		.bee-row-1 .bee-col-1 .bee-block-1 h1 {
			color: #626262;
			direction: ltr;
			font-family: Arial, Helvetica, sans-serif;
			font-size: 34px;
			font-weight: 700;
			letter-spacing: normal;
			line-height: 120%;
			text-align: left
		}

		.bee-row-3 .bee-col-2 .bee-block-1 {
			font-size: 14px;
			text-align: center
		}

		.bee-row-5 .bee-col-1 .bee-block-1 .bee-icon-image {
			padding: 5px 6px 5px 5px
		}

		.bee-row-5 .bee-col-1 .bee-block-1 .bee-icon:not(.bee-icon-first) .bee-content {
			margin-left: 0
		}

		.bee-row-5 .bee-col-1 .bee-block-1 .bee-icon::not(.bee-icon-last) .bee-content {
			margin-right: 0
		}

		@media (max-width:768px) {
			.bee-form form {
				width: 100% !important
			}

			.bee-row-content:not(.no_stack) {
				display: block
			}

			.bee-row-1 .bee-col-2 .bee-block-1,
			.bee-row-2 .bee-col-1 .bee-block-1 {
				height: 1px !important
			}

			.bee-row-3 .bee-col-1 .bee-block-1,
			.bee-row-3 .bee-col-3 .bee-block-1 {
				height: 10px !important
			}

			.bee-row-1 .bee-col-1 .bee-block-1 h1 {
				font-size: 23px
			}
		}

		.bee-row-3 .bee-col-2 .bee-block-2 form {
			display: inline-block;
			width: 85%
		}

		.bee-row-3 .bee-col-2 .bee-block-2 ::-webkit-input-placeholder {
			color: #000000
		}

		.bee-row-3 .bee-col-2 .bee-block-2 :-moz-placeholder {
			color: #000000
		}

		.bee-row-3 .bee-col-2 .bee-block-2 ::-moz-placeholder {
			color: #000000
		}

		.bee-row-3 .bee-col-2 .bee-block-2 :-ms-input-placeholder {
			color: #000000
		}

		.bee-row-3 .bee-col-2 .bee-block-2 input:not([type=checkbox]):not([type=radio]):not([type=image]) {
			background-color: #ffffff;
			border-bottom: 1px solid #7747ff;
			border-left: 1px solid #7747ff;
			border-radius: 7px;
			border-right: 1px solid #7747ff;
			border-top: 1px solid #7747ff;
			color: #000000;
			padding: 5px;
			min-height: 42px
		}

		.bee-row-3 .bee-col-2 .bee-block-2 input:not([type=checkbox]):not([type=radio]):focus {
			outline-color: #7747FF
		}

		.bee-button-container button:hover {
			background-color: red !important;
			cursor: pointer;
		}
		
		.bee-row-3 .bee-col-2 .bee-block-2 button {
			background-color: #7747FF;
			border-bottom: 0 solid transparent;
			border-left: 0 solid transparent;
			border-radius: 4px;
			border-right: 0px solid transparent;
			border-top: 0 solid transparent;
			color: #ffffff;
			letter-spacing: normal;
			line-height: 200%;
			padding: 5px 20px;
			width: 100%
		}
	</style>
</head>
<body>
<div class="bee-page-container">
<div class="bee-row bee-row-1">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w7">
<div class="bee-block bee-block-1 bee-heading">
<h1><span class="tinyMce-placeholder">Private Streaming Platform</span> </h1>
</div>
</div>
<div class="bee-col bee-col-2 bee-col-w1">
<div class="bee-block bee-block-1 bee-spacer">
<div class="spacer" style="height:60px;"></div>
</div>
</div>
<div class="bee-col bee-col-3 bee-col-w4">
<div class="bee-block bee-block-1 bee-paragraph">
<p> </p>
</div>
</div>
</div>
</div>
<div class="bee-row bee-row-2">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w12">
<div class="bee-block bee-block-1 bee-spacer">
<div class="spacer" style="height:60px;"></div>
</div>
</div>
</div>
</div>
<div class="bee-row bee-row-3">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w4">
<div class="bee-block bee-block-1 bee-spacer">
<div class="spacer" style="height:60px;"></div>
</div>
</div>
<div class="bee-col bee-col-2 bee-col-w4">
<div class="bee-block bee-block-1 bee-paragraph">
<p>${message}</p>
</div>
<div class="bee-block bee-block-2 bee-form">
<form accept-charset="UTF-8" action="/login" autocomplete="on" method="POST">
<div class="bee-form-row">
<div class="bee-field bee-field-r2c1m1i1"><input id="r2c1m1i1" name="username" placeholder="username" required="" type="text"/></div>
</div>
<div class="bee-form-row">
<div class="bee-field bee-field-r2c1m1i2"><input id="r2c1m1i2" name="password" placeholder="password" required="" type="password"/></div>
</div>
<div class="bee-form-row">
<div class="bee-field bee-field-r2c1m1i3">
<div class="bee-button-container"><button id="r2c1m1i3" name="submit" type="submit" value="log in">log in</button></div>
</div>
</div>
</form>
</div>
</div>
<div class="bee-col bee-col-3 bee-col-w4">
<div class="bee-block bee-block-1 bee-spacer">
<div class="spacer" style="height:60px;"></div>
</div>
</div>
</div>
</div>
<div class="bee-row bee-row-4">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w12">
<div class="bee-block bee-block-1 bee-divider">
<div class="center bee-separator" style="border-top:1px solid #dddddd;width:100%;"></div>
</div>
</div>
</div>
</div>
<div class="bee-row bee-row-5">
<div class="bee-row-content">
<div class="bee-col bee-col-1 bee-col-w12">
<div class="bee-block bee-block-1 bee-icons">
<div class="bee-icon bee-icon-last">
<div class="bee-content">
<div class="bee-icon-image">private</div>
<div class="bee-icon-label bee-icon-label-right">streaming platform</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</body>
</html>

`
    }
}

function getFavicon(){
    return `
    <link rel="apple-touch-icon" sizes="180x180" href="data:image/png;base64,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">
    <link rel="icon" type="image/png" sizes="192x192" href="data:image/png;base64,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">
    <link rel="icon" type="image/png" sizes="32x32" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA7BJREFUWEftl1lMVGcUx393UJbqIIhWAVEsrVpxASpxoUZcidrGpMGmMW4YjcuLQdM0kmpcEiwFl6oxatpoTHxwr+JSTVtsBAWUxprihltURkEUF0BA4JqT48zIANI+yPjAeZn7fd9Z/ud/zvnuXGM5puXTeJIsBgtMCKQFxID7dSabL+8j2dgdb35vGKxqgbgNQpgmS429k01bS2XuikCYMPZMNk13ZG+P2QqglYH3jwH/MAiOBmswWCzwohQe5kPhOair+W/zYlggMAq6DIAPOkFdLZQ9gPt5UHKlvg8HA95+MGg+BEYCJtRWg8UTDEMNntsg60f9fZsE9IboBWANBLNOQXt4Oi1s5yH7J6it0j0HgNGr4WU5XD8OT25DxSNo4w3dYyBiFni01eAnFqnjxkSyHZMChTlwKwPKi6DqGXj7Q9+vICxOrW6chL9/dgEgxhUl4BcKsSvg8CylTiRiJnwyQZ8zljWk0Q7Gw0uzrX6uwboNhr9WOqHGrQXfblBTCb/OALkCGzTh6GQFsX+K0/Dj8RCZoOusVLCdc55JvV0ZkYwnbIDifMj8wakb8x0EfabrA9O0DPUAdOoDI1fCs0I4keg0HDANen+p698SoaIY+k+F0BHQxgceF8CZNKh8ojrhX0PfeCg4Bhd2OP2MTQW/Hlreo/NdSiDLqDkQNhbunoHs9arg5Qti6OMPxf8qpQNnQK+JcC8HzFoIGaaBJKDI+I3Qvguc3wK3/tS9D/vBiKXSdXBxF1w91AiAL7ZqoH926th0DoeQoeDTUdenVsCLRxC3DnyD4Vo6lBVB1GzISgFbHnToDuPS1PkfSeDXEwJ6qR/pj8JcOLtOgYs4SiDNIU0icmo5+H8EXSO1vjK7Mh0vK/T88yU6rnImDVVwHPJ365k0qzRtTRWkz4GB08EaBNVlGvzOaW0+uzgA9BwFg+bpdvpcqCx1KtmfpBwRCXDtCAxPAi+rTkrmaii6qFpDEjXbp3fh5OKGPlx3HADsdRWFg9M1M1exN2PeNnh8A2KXQdt2UPkUjsxTWsetgQ4hUHIVMqTmzYgDwJCFEBKjtO77pnGrmG8hKFoD5m7SfpFbTyiVuRbQk34BTys8uACnk5sL/0YP2KmrLodDr2fe1VzeEUMXgeFR/+Tm7yCsiEzaDp7t6k/S22A4GAiN1UtCRutOZtMm0uUCxLujXt0PL2m2dpELS8oiI1l6838w0Lzqu9F4//4PvJs8m/bayoD7GXD7p5nbP07d/Xn+Cnh3ip4bfErpAAAAAElFTkSuQmCC">
    <link rel="icon" type="image/png" sizes="16x16" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAYRJREFUOE+1001IlFEUxvGfYxkoKpZj4BSJFvQlIZZggRhRi3aBQrRoUQupaJELF4pR2NemldCuFkIQQtEmIaiFZUEYuCgxIgyyIZJqckrGGYSJ8X1Dgtn40V3e57n/83DuOQWD7dmL6EGRpZ0MrhYMtmfTy3j8t1QmB8gurfC/7tUDlG+hLEbqO9/eI0+uDdsojvLrCz8/BkkWEjScJlJIKsHm/cxOM3J9MWpkLfvOkk4yn6KmlfgoY7dDQM5woIvn14juoPUSQ+eZ/RpWiZDzNF9g5AY1B9nbwf0TIaCijuZOhs4F4p6TDF+msYOiEp5dYf1Wag8x3Mfu48SaeNwZAnIXpdUk42ys5+09SqrY2UbyM6/6aTjFXILCdUGvxu4w8ykEtPSSmOTN3SByaYy6w1TUElnD0x6O9vPuIZNP8nzjkZtMvWDiQSBGd9HSTfw1ldt5dIZjA4zeYuplHkBVfRAnPbMolm2iuJIfH8j8prqR6XHm5/7XIC13nFdlmVa0zn8A6eCP1vQ31KgAAAAASUVORK5CYII=">
    `
}