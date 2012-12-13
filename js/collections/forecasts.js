define([
    'jquery',
    'underscore',
    'backbone',
    'models/forecast'
], function ($, _, Backbone, Forecast) {
    'use strict';
    var Forecasts = Backbone.Collection.extend({
        model: Forecast
    });

    return Forecasts;
});