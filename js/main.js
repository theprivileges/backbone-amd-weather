require.config({
    baseUrl: 'js',
    paths: {
        jquery:       '//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.2/jquery.min',
        underscore:   '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.2/underscore-min',
        backbone:     '//cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.2/backbone-min',
        bootstrap:    '//twitter.github.com/bootstrap/assets/js/bootstrap'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        },
        bootstrap: {
            deps: ['jquery']
        }
    }
});

define(['views/weather', 'bootstrap'], function (WeatherView) {
    'use strict';
    var weatherView = new WeatherView;
});