(function () {
    'use strict';
    requirejs.config({
        baseUrl: "js/scripts/",
        paths: {
            "jquery": "vendors/jquery/jquery",
            "underscore": "vendors/underscore-amd/underscore",
            "backbone": "vendors/backbone-amd/backbone",
        }
    });
    require(['app'], function (app) {
        app.initialize();
    });
}());