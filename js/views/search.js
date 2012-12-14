define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    'use strict';
    var searchView = Backbone.View.extend({

        tagName: 'form',

        className: 'form-search',

        id: 'search',
        
        template: _.template($('#search-template').html()),

        events: {
           'submit': 'addZip', 
        },
        render: function () {
            this.$el.html(this.template(this));
            return this;
        },
        addZip: function (e) {
            e.preventDefault();
            this.collection.create({
                zip: this.$('#zip').val()
            });
            this.clear();
            return this;
        },
        clear: function () {
            this.$('#zip').val('');
            return this;
        }

    });
    return searchView;
})