define([
    'jquery',
    'underscore',
    'backbone',
    'views/item'
], function ($, _, Backbone, ForecastItem) {
    'use strict';
    var ForecastsView = Backbone.View.extend({

        tagName: 'table',

        className: 'table table-striped',

        id: 'output',

        template: _.template($("#forecasts-template").html()),

        render: function () {
            this.$el.html(this.template(this));
            return this;
        }
    });
    
    return ForecastsView;
});