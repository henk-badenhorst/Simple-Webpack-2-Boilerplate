[![Build Status](https://travis-ci.org/henk-badenhorst/Simple-Webpack-Starter.svg?branch=master)](https://travis-ci.org/henk-badenhorst/Simple-Webpack-Starter)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Simple Webpack Starter
============================

A simple and quick starter project for building basic websites using 
SCSS and Bootstrap 4 & JavaScript (ES6). Featuring all the Webpack magic such as Hot Module Replacement, asset minification, and JavaScript obfuscation. In addition to this, you can easily deploy your application with Docker which will serve it with Nginx.

:point_right: [Demo](https://henk-badenhorst.github.io/simple-webpack-starter/)

Key Features
-------

* ES6 with Babel & StandardJs
* Sass & Sass Linter
* Bootstrap 4
* Docker & Nginx
* Production Ready

Get Started
-------
Install Node Modules

```$ npm install```

Usage
--------

Start Development Server

```$ npm start```

Build Application Locally

```$ npm run build```

Deploying To Production
--------

Build Docker Image

```$ docker-compose build```

Start Docker Image

```$ docker-compose up -d```
