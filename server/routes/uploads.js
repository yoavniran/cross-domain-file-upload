var express = require('express'),
//    Busboy = require("busboy"),
    router = express.Router();

(function(){
    "use strict";

    function upload(req, res){

        console.log("upload POST has been called");

        console.log("query: ", req.query);
        console.log("headers: ", req.headers);
        console.log("files: ", req.files);

//        var busboy = new Busboy({ headers: req.headers });
//
//
//        busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
//
//            console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
//
//        });
//
//        busboy.on('finish', function() {
//            // use req.body
//        });

        console.log("UPLOAD - finish at: " + new Date().toLocaleString());

        res.status(200).json({"result": "thanks!"});
    }

    router.post("/", upload);
})();

module.exports = router;