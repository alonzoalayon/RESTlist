//$(document).ready(function() {

var SodaModel = Backbone.Model.extend({
    urlRoot: '/sodas',
    idAttribute: '_id'
});

var SodasCollection = Backbone.Collection.extend({
    url: '/sodas',
    model: SodaModel
});

var FormView = Backbone.View.extend({
  el: '<div></div>',

  template: _.template('\
  <form method="POST"  name = "soda-form" action="/sodas">\
    <input type="text" id= "sodavalue" name="soda">\
    <input type="submit" value="Submit">\
  </form>\
  '),
  initialize: function(){
    this.render();
  },

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
var SodasView = Backbone.View.extend({
    //...

    // this is the wrapper for your view, div is default. It's what is inside that "counts"
    el: '<div></div>',
    // this is what is inserted inside your el, and what your view cares about
    // you see here I'm passing in a variable called task
    template: _.template('<ul id="parentUL">\
      <% sodas.each(function(soda) { %>\
        <li data-value="<%= soda.get("soda") %>"><%= soda.get("soda") %></li>\
      <% }) %>\
    </ul>\
  '),

    initialize: function() {
        // `this` is referring to the current view instance
        this.listenTo(this.collection, 'update', this.render);
        // stick the template inside the el by calling render
        //sodasView.render();
        // insert the el element (with the rendered template inside) onto the DOM
        //$("#hello").html(sodasView.render().el);
    },

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
//making instances
//make new collection
var sodas = new SodasCollection();
sodas.fetch();
var formView = new FormView();
var sodasView = new SodasView({
    collection: sodas
});
formView.render();
sodasView.render();
$('#hola').html(formView.el);
$("#hello").html(sodasView.el);

/*$('soda-form').on('submit', function(e) {
    e.preventDefault;
    var soda = new SodasView({
        collection: sodas
    });
    soda.save();
    sodas.add(soda);

});*/


//fetch sodas
/*sodas.fetch({
    success: function() {
        //console.log(sodas.length);
        var sodasView = new SodasView({
            collection: sodas
        });
        // stick the template inside the el by calling render
        sodasView.render();
        // insert the el element (with the rendered template inside) onto the DOM
        $("#hello").html(sodasView.el);
    }
});*/
//});
