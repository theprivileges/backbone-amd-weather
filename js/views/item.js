define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    'use strict';
    var ForecastItem = Backbone.View.extend({
        tagName: "tr",
        template: _.template($("#forcast-template").html()),

        initialize: function() {
            _.bindAll(this, "render");
            this.model.fetch({success: this.render, error: this.toogleError})        
        },
        render: function(model) {
            var content = this.template(model.toJSON());
            this.$el.html(content);
            return this;      
        },
        toggleError: function (model, error) {
            this.$(".alert").text(error).toggle(!!error);
            return this;
        }
    });

    return ForecastItem;
});