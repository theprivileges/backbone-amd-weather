define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    'use strict';
    var Forecast = Backbone.Model.extend({

        url: function () {
            return "http://api.wunderground.com/api/7eaec3b21b154448/conditions/q/" + this.get("zip") + ".json";
        },

        parse : function ( data, xhr ) {
            var observation = data.current_observation;
            if (typeof observation === 'undefined') {
                return {
                    error: 'Please enter a valid zip code.'
                };
            }
            return {
                id: observation.display_location.zip,
                url: observation.icon_url,
                state: observation.display_location.state_name,
                zip: observation.display_location.zip,
                city: observation.display_location.city,
                temperature: observation.temp_f    
            };
        },

        sync: function (method, model, options){  
            options || (options = {});
            options.dataType = "jsonp";  
            return Backbone.sync(method, model, options);  
        },

        validate: function (options) {
            if (!options.zip) {
               return "Please enter a zip code";
            }
        }
    });

    return Forecast;
});