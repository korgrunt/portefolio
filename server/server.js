var express = require('express');
var mailer = require('express-mailer');
var path = require('path');
var swig = require('swig');
var bodyParser = require('body-parser');

var app = express();

/* ALLOW ALL ORIGIN FOR XHR */
app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Headers", "Content-Type");
        res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
        next();
    });
/* ALLOW ORIGIN FOR XHR */

//app.use(logger({path: "/path/to/logfile.txt"}));
// app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../../portefolio')));
app.use(express.static(path.join(__dirname, '../app')));

app.use(express.static(path.join(__dirname, '../ngPolyfills')));

app.use(express.static(path.join(__dirname, '../node_modules')));
app.use(express.static(path.join(__dirname, '../typings')));
app.use(express.static(path.join(__dirname, '../../portefolio')));

app.engine('html', swig.renderFile);

app.set('views', __dirname+'/views');
app.set('view engine', 'html');



mailer.extend(app, {
  from: 'portefolio.naim@gmail.com',
  host: 'smtp.gmail.com', // hostname
  secureConnection: false, // use SSL
  port: 587, // port for secure SMTP

    requiresAuth: true,
    domains: ["gmail.com", "googlemail.com"],

  transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
  auth: {
    user: 'portefolio.naim@gmail.com',
    pass: 'Ly3c8Feg'
  }
});

app.get('/email/:sujet/:email/:msg', function(req, res, next){

  app.mailer.send('email', {
    to: 'naim.aouaichia@gmail.com', // REQUIRED. This can be a comma delimited string just like a normal email to field.
    subject:
    "/SUJET--->"+req.params.sujet+
    "/_FROM--->"+req.params.email+
    "/_MESSAGE--->"+req.params.msg+
    "/Finish/", // REQUIRED.
    otherProperty: 'Other Property' // All additional properties are also passed to the template as local variables.
  }, function (err) {
    if (err) {
      // handle error
      console.log(err);
      res.send('There was an error sending the email');
      return;
    }
    res.send('Email Sent');
  });

});

app.get('/*', function(req,res){
 res.render('index');
});

app.listen(80);
console.log("app is running on port 80");
