define([
    'jquery',
    'underscore',
    'backbone',
    'collections/forecasts',
    'views/forecast'
], function ($, _, Backbone, Forecasts, ForecastView) {
    'use strict';
    var ViewSearch = Backbone.View.extend({
        
        el: $('#weather'),

        events: {
           'click #search': 'addZip' 
        },

        initialize: function () {
            this.input = $("#zip");
            this.collection = new Forecasts();
            this.collection.bind('add', this.addOne, this);
            return this;
        },
        addOne: function (forecast) {
            var forecast = new ForecastView({model: forecast, collection: this.collection});
            return this;
        },
        addZip: function (e) {
            e.preventDefault();
            this.collection.create(this.newAttributes());
            this.clear();
            return false;
        },
        newAttributes: function () {
            return {
                zip: this.input.val()
            };
        },
        clear: function () {
            this.input.val('');
            return this;
        }
    });
    return ViewSearch;
})