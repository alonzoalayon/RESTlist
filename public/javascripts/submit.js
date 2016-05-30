$(document).ready(function() {
    // App logic goes here
    var todoText;
    var $todoVar;
    $.getJSON('/sodas', function(
            json) {
            _.each(json, function(tr) {
                var str;
                str = $("<li>" + tr.soda + "</li>");
                $('#todo-list').append(str);
            });
          });
    $('#soda-form').submit(function (event) { // target the form, and put a submit event listener on it. We can capture and pass in the event for us to use
      event.preventDefault(); // this tells the browser to "prevent" the "default" "event" from occuring (sending and refreshing)
      $todoVar = $(this);
      todoText = $todoVar.find($('#soda')).val();
      $.ajax({
                          type: 'POST',
                          url: '/sodas',
                          data: {soda: todoText},
                          success: function (response) {

                                 $('#todo-list').append('<li>' + todoText + '</li>');
                              alert("Record saved successfully..!!");
                          },
                          error: function () {
                              alert("Error");
                          }
                      });

    });
});
