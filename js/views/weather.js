define([
    'jquery', 
    'underscore', 
    'backbone',
    'collections/forecasts',
    'views/search',
    'views/forecasts',
    'views/item'
], function ($, _, Backbone, Forecasts, SearchView, ForecastsView, ForecastView) {
    'use strict';
    var WeatherView = Backbone.View.extend({

        el: $("#weather"),

        initialize: function (options) {
            
            this.forecasts = new Forecasts();
            this.forecasts.on('add', this.addForecasts, this);
            //this.forecasts.on('all', function () { console.debug(arguments); }, this);
            this.forecasts.on('remove', this.removeForecast, this);
            this.render();
            return this;
        },

        render: function () {
            
            var form = new SearchView({collection: this.forecasts});
            this.$el.append(form.render().el);
            this.forecastsView = new ForecastsView({collection: this.forecasts});
            this.$el.append(this.forecastsView.render().el);
            return this;
        },

        addForecasts: function (forecast) {
          
            var itemView = new ForecastView({id: forecast.get('zip'), model: forecast});
            this.forecastsView.$("tbody").append(itemView.el).closest('table').fadeIn('slow');
            return this;
        },

        removeForecast: function (forecast) {
            $( "#" + forecast.get('id')).fadeOut();
            if ( !this.forecasts.length ) {
                this.forecastsView.$el.fadeOut("slow");            
            }
        }
        
    });

    return WeatherView;

});