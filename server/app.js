"use strict";
var express = require("express"),
    http = require("http"),
    path = require("path"),
    bodyParser = require("body-parser"),
    multer = require("multer"),
    router = require("./routes/router.js");

(function(){

    console.log("static dir: ", __dirname);

    var eApp = express();

    eApp.set("port", 8099);

    eApp.use(bodyParser.json());
    eApp.use(bodyParser.urlencoded({ extended: true }));
    eApp.use(multer({ dest: "./uploads/"}));
    eApp.use(express.static(path.join(__dirname, "public")));

    router.initialize(eApp);

    try {

        eApp.listen(eApp.get("port"), function(){
            console.log("Express server listening on port " + eApp.get("port"));
            console.log("node js ENVIRONMENT: " + process.env.NODE_ENV);
        });
    }
    catch (err) {
        console.error(err);
        throw err;
    }
})();


