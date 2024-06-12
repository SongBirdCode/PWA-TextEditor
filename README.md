# PWA-TextEditor
A text editor utilizing progressive web applications: <i> A higher tier of coding advancement; More than likely used by Senior level codingships. </i>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

The application is a web text editor where the user can create notes their their hearts desire, or code snippets to their coding desires with the ability to use or not to use an internet connection.  The integrated service worker and Cache API's ensure that the application will remain fully functional even without and active internet connection.  This application allows the user to access visited pages and saved data even if the application is offline. (How cool!)

The GitHub repository can be found here: https://github.com/SongBirdCode/PWA-TextEditor 

The application successfully launched using Render 
...and can be found here: https://pwa-texteditor-526c.onrender.com/

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [References](#references)
* [License](#license)

## Installation

* This text editor require a number of methods and store data to an IndexedDB database.

* This application will require the installation of Node.js and various npm package dependancies.

*   Node Package Manager (npm) is a software manager and installer which puts the modules in place so that the node project can utilize it, and also, it manages dependency conflicts intelligently and initialized using **npm init**. The package.json will be generated and will contains all the details of the application in which the user have inputted during the npm initialization. 

*  This application will use the following npm packages:-

         * npm install express (express.js)
         * npm install --save-dev webpack (Webpack)
         * npm install webpack-dev-server --save-dev (webpack-dev-server)
         * npm install --save-dev webpack-pwa-manifest (WebpackPwaManifest)
         * npm install babel (Babel)
         * npm install --save-dev css-loader (CSS-loader)
         * npm install concurrently --save (run multiple commands concurrently.) (Concurrently)
         * npm npm install idb (IndexedDB)

* The required modules are bundled in the package.json file.
When integrated terminal is at appropriate location and opened, type in:
 **npm run install**

the modules will then be installed.       

## Usage

1.
``````    
GIVEN a text editor web application, 
WHEN I open my application in my editor
THEN I should see a client server folder structure
``````
<p>
<img src=./client/src/images/Screenshot4.png>
<p>

2.
``````
    WHEN I run `npm run start` from the root directory
    THEN I find that my application should start up the backend and serve the client
    WHEN I run the text editor application from my terminal
    THEN I find that my JavaScript files have been bundled using webpack
    WHEN I run my webpack plugins
    THEN I find that I have a generated HTML file, service worker, and a manifest file
``````

<p>
<img src=./client/src/images/Screenshot1.png>
<p>
<img src=./client/src/images/Screenshot2.png>
<p>


3.
``````
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
``````
*Below is the screenshot of the text editor "Just Another Text Editor (J.A.T.E)"*
<p>
<img src=./client/src/images/Screenshot3.png>
<p>

4.
``````
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
``````
*Below is the  screenshot of content in the text editor has been retrieved from the IndexedDB"*

<p>
<img src=./client/src/images/Screenshot5.png>
<p>



``````
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
``````
*Below is the screenshot of the static assets pre cached upon loading with subsequent pages and static assets"*

<p>
<img src=./client/src/images/Screenshot6.png>
<p>

<img src=./client/src/images/Screenshot7.png>
<p>



## References

All Tutor, Materials, and sources provided from course. 
*   Request-Response : The Full-Stack Blog : Render Deployment Guide
 
## License

This project is licensed under the terms of the MIT license.

All Rights reserved @ SongBirdCode (Tweet Tweet!)