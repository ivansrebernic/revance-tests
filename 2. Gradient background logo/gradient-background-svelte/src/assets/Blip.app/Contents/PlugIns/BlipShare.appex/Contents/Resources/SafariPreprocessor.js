var SafariPreprocessor = function() {};

SafariPreprocessor.prototype = {
    run: function(arguments) {
        arguments.completionFunction({
            "title": document.title,
            "url": document.location.href,
            "contentType": document.contentType
        });
    }
};

var ExtensionPreprocessingJS = new SafariPreprocessor;
