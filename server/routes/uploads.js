var express = require('express'),
    router = express.Router();

(function () {
    "use strict";

    function test(req, res) {
        res.render("test.tmpl", {layout: false, name: "woRLd!"});
    }

    function upload(req, res) {

        console.log("upload POST has been called");

        console.log("query: ", req.query);
        console.log("headers: ", req.headers);
        console.log("files: ", req.files);
        console.log("UPLOAD - finish at: " + new Date().toLocaleString());

        var successResult = {info: "success"};

        var uploadXhrHeader = req.headers["lp-upload-test-header"];

        if(uploadXhrHeader && uploadXhrHeader.length > 0) {
            res.status(200).json(successResult);
        }
        else{          //return html for iframe

            res.render("upload.tmpl", {
                layout: false,
                status:200,
                statusText: "Success",
                result: JSON.stringify(successResult)});
        }
    }

    router.post("/", upload);
    router.get("/test", test);
})();

module.exports = router;