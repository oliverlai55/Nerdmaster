# Nerdmaster (In Progress)

## Contents
* [Project Overview](#project-overview)
    * [iOS, Android, and Browser Support](#ios-android-and-browser-support)
    * [One-Page App](#one-page-app)
* [Installation](#installation)
* [Git Workflow](#git-workflow)
* [Hosting and Content Management](#hosting-and-content-management)
    * [Web Server](#web-server)
    * [Staging and Production](#staging-and-production)
* [Offline Capability](#offline-capability)
    * [Application Cache](#application-cache)
    * [LocalStorage](#localstorage)
* [Assets](#assets)
    * [Stylesheets](#stylesheets)
* [Vendor JavaScript](#vendor-javascript)
* [Task Runner](#task-runner)

## Project Overview
Nerdmaster is a copy of an internal app I initiated during my internship at Big Nerd Ranch, a software development firm. The internal app is officially named Nerdmaster Project Frontend. It is an HTML5 web app that runs in React.js. The front-end project serves as the user interactive portion of a larger project (Nerdmaster) that aggregates all slides from conference talks.  Users have the ability to either search or upload slides via a centralized location.  I am currently in the process of changing the backend API endpoints so that I will not be relying on servers at Big Nerd Ranch.  As a result, some functionalities will not be working at the moment.

Nerdmaster is currently deployed on Heroku at [https://bnr-nerdmaster.herokuapp.com](https://bnr-nerdmaster.herokuapp.com/).

### iOS, Android, and Browser Support
This project is not accessible on iOS and Android.  It is only accessible across modern web browsers.  

### One-Page App
Nerdmaster is a one-page app, meaning the browser only loads the index.html file directly. Other "views" are dynamically injected into the page via ajax and React components.

## Installation
1. Clone repo.
2. In terminal, navigate to the local project folder you just created.
3. Run `npm install`. This will install the project's dependencies and libraries.
4. After everything is installed, run `gulp` in terminal. Gulp will then run any default tasks and start up a local web server at http://localhost:8000.

**NOTE:** Dependency management is currently only in place for modules Gulp needs to run tasks. Dependencies like jQuery, etc are managed manually. Eventually, these will also be managed by something like Bower.

## Git Workflow
1. Create your own feature branch off of `master`. Name your branch `your-initials-here/specific-feature-description`
2. Do work. Commit to your local branch.
3. When ready to merge back into `master`, rebase the `master` branch onto your local branch. If there are conflicts, fix them.
4. Once there are no conflicts, push your local feature branch to your remote feature branch.
5. Create a Pull Request from your remote feature branch to the `master` branch (on "origin").
6. Grab a cup of coffee and watch this [video](https://www.youtube.com/watch?v=uAuL_noJLoo)

## Hosting and Content Management

### Deployment
Nerdmaster is currently deployed on Heroku at [https://bnr-nerdmaster.herokuapp.com](https://bnr-nerdmaster.herokuapp.com/).

### Web Server

### Staging and Production

## Offline Capability

### Application Cache

### LocalStorage

## Assets (any specific info about assets like images, video, sound, documents)

### Stylesheets
* **Bootstrap**
http://v4-alpha.getbootstrap.com/

Bootstrap is a HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.  Bootstrap is used in this project for styling and UI features.

* **CSS-Burrito**
https://github.com/jasonreece/css-burrito

CSS-Burrito is a SMACSS based template for organizing styling layouts.


## Vendor JavaScript (list of third party libraries and use)
Nerdmaster Intern Project Frontend also makes use of several third-party JavaScript plugins:
* **React**
https://facebook.github.io/react/index.html

React is a JavaScript library for creating user interfaces by Facebook and Instagram. React views are typically rendered using components that contain additional components specified as custom HTML tags.

React promises programmers a model in which subcomponents cannot directly affect enclosing components ("data flows down"); efficient updating of the HTML document when data changes; and a clean separation between components on a modern single-page application.

* **JSX**
https://facebook.github.io/react/docs/jsx-in-depth.html

JSX is a JavaScript syntax extension that looks similar to XML.

JSX is used to help make concise syntax for defining tree structures with attributes.

In this project, the user is able to locate the source code of the current static page inside the src/app.jsx directory.

* **React Router**
https://github.com/reactjs/react-router

React Router is a complete routing library for React.  This projects uses React Router for routing.

* **Moment.js**
http://momentjs.com/

Moment.js is a third party library that parses, validates, manipulates, and displays dates in JavaScript.  This project uses moment.js to manipulate the display format of dates.

## Task Runner
Nerdmaster uses [Gulp](http://gulpjs.com/) as its task runner.
