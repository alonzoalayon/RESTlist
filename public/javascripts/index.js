//$(document).ready(function() {
var SodaModel = Backbone.Model.extend({
    urlRoot: '/sodas',
    idAttribute: '_id'
});

var SodasCollection = Backbone.Collection.extend({
    url: '/sodas',
    model: SodaModel
});

var SodasView = Backbone.View.extend({
    // this is the wrapper for your view, div is default. It's what is inside that "counts"
    el: '<div></div>',
    // this is what is inserted inside your el, and what your view cares about
    // you see here I'm passing in a variable called task
    template: _.template('\
    <form id="task-form" method="POST" action="/sodas">\
      <input type="text" name="soda">\
      <input type="submit" value="Submit">\
    </form>\
    <ul>\
      <% sodas.each(function(soda) { %>\
        <li><%= soda.get("soda") %></li>\
      <% }) %>\
    </ul>\
  '),
    render: function() {
        // this is where your business logic goes.
        // it usually starts with...
        $(this.el).html(this.template({
            sodas: this.collection
        }));
        // this will stick the template inside of the el
        return this;
    }
});

//make new collection
var sodas = new SodasCollection();
//fetch sodas
sodas.fetch({
    success: function() {
        console.log(sodas.length);
        var sodasView = new SodasView({
            collection: sodas
        });
        // stick the template inside the el by calling render
        sodasView.render();
        // insert the el element (with the rendered template inside) onto the DOM
        $("#hello").html(sodasView.el);
    }
});

//});
