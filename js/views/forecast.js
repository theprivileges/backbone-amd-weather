define([
    'jquery',
    'underscore',
    'backbone',
    'collections/forecasts',
    'views/item'
], function ($, _, Backbone, Forecasts, ForecastItem) {
    'use strict';
    var ForecastView = Backbone.View.extend({

        el: $("#output"),

        events : {
            '#click delete' : 'destroy'
        },

        initialize: function () {
            this.collection.on('all', this.render, this);
            this.collection.on('remove', this.remove, this);
        },

        render: function (forecast) {
            var view = new ForecastItem({id : model.get('zip'), model: forecast});
            this.$("tbody").append(view.el).closest("table").fadeIn("slow");
            return this; 
        },

        remove: function (forecast) {
        
        },

        destroy: function (e) {
            e.preventDefault();

        }
    });
    
    return ForecastView;
});