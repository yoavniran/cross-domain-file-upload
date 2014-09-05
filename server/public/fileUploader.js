window.fileUploader = (function () {

    function _getEncoding(form) {

        var method = form.method.toLowerCase();
        var isPost = method === "post";

        return isPost && form.enctype ? form.enctype : "application\/x-www-form-urlencoded";
    }

    function _getFileFromForm() {

        var fileInput = document.querySelector("form input[type='file']");

        var files = fileInput.files;

        if (files.length > 0) {

            console.log("found at least one file in input");

            return files[0];
        }

        console.log("couldnt find any files");
    }

    function submitForm(form) {

        console.log("SUBMIT FORM!!!");

        var encoding = _getEncoding(form);
        var action = form.action;

        var file = _getFileFromForm();


        return false;
    }

    return{
        submitForm: submitForm
    };

})();


