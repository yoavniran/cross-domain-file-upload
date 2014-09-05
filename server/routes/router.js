var uploads = require("./uploads");


var router = (function(){

//    function servePublic(req,res){
//       console.log("entered public path");
//
//        res.sendfile("../public/upload.html");
//    }

    function initialize (app){


        app.use("/uploads", uploads);


//        app.route("/uploads")
//            .post(uploads.upload);




        //app.post("/uploads", uploads.upload);

       //app.get("/", servePublic);
    }

    return {
        initialize: initialize
    };
})();

module.exports = router;