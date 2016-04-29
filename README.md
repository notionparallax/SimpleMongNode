# Ben's bit:

How to get a mongo/node instance up and running so that you can play with it.

Get a Heroku account

Do this tutorial up until the 'Provision a database' step

https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction

_except_ in **Prepare the app** when it asks you to clone the repo, clone this repo instead.

The following steps are from [here](https://devcenter.heroku.com/articles/mongolab#adding-mlab-as-a-heroku-add-on):

add a new database:

    $ heroku addons:create mongolab

Then find it's connection uri:

    $  heroku config | grep MONGODB_URI

At the bottom of your `index.js` change this line to be yout URI (i.e. not mine):

    // Connect to Mongo on start
    var mongoURL = 'mongodb://heroku_d58bh1wm:m3f37fh3q0sodg1lct1vbb97s0@ds063899.mlab.com:63899/heroku_d58bh1wm'; // <-- but put in YOUR one from the step above

Then git commit and `git push heroku master`

There are two useful routes. I've used URL params to make it easier to test. 

The first is `/in-url-params` which takes two params `rssi` and `base`.  What these words are isn't really important. Just think of them as some things that you are sending to the server. It could be anything eventualy. You'd use this like this:

    /in-url-params?rssi=50&base=home

The second is `/out-url-params-base` which lists all the entrys for a particular base.

    /out-url-params?base=home

This assumes a really simple model where the data gets thrown at the server by the RPi, the server saves it and then later on you'd query the data.

In reality the saving would be made safer, and the query would be much more interesting, but it's a start.



# Heroku's bit

## node-js-getting-started

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started with Node on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

### Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
$ git clone git@github.com:heroku/node-js-getting-started.git ## or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

### Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

### Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)


