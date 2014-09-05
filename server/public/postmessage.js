"use strict";

window._pmComm = (function (root) {

    var _frame, _frameWindow, _target;

    function sendMessage(msg) {

        var data = {
            data: msg
        };

        data = JSON.stringify(data);

        _frameWindow.postMessage(data, _target);
    }

    function _msgHandler(e, callback) {

        _target = _target || e.origin;

        var data = e.data;

        data = JSON.parse(data);

        console.log("[POST-MESSAGE]:: message received! ", data);

        if (data.data) {
            data = data.data;
        }

        callback(data, e);
    }

    function initializeFrame(msgHandler){

        _frameWindow = root.parent;

        addEvent(root, "message",  function(e){
            console.log("[POST-MESSAGE]:: received message from parent ", e);
            _msgHandler(e, msgHandler);
        });

//        root.addEventListener("message", function(e){
//            console.log("[POST-MESSAGE]:: received message from parent ", e);
//            _msgHandler(e, msgHandler);
//        }, false)
    }

    function initializeWindow(frameId, target, callback, msgHandler) {

        _target = target;

        _frame = document.getElementById(frameId);

//        _frame.addEventListener("load", function () {
        addEvent(_frame, "load", function(){
            console.log("[POST-MESSAGE]:: frame loaded!");
            _frameWindow = _frame.contentWindow;
            callback();
        });

        //root.addEventListener("message", function (e) {
        addEvent(root, "message", function(e){
            console.log("[POST-MESSAGE]:: received message from frame ", e);
            _msgHandler(e, msgHandler);
        });
    }

    return {
        initializeFrame: initializeFrame,
        initializeWindow: initializeWindow,
        sendMessage: sendMessage
    }
})(window);