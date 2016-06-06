//$(document).ready(function() {
$("#parentUL").on("click", function(e){
    e.preventDefault();
    //console.log('hello');
    var $this = $(this).parent();
    $(this).detach();
    $("#sodavalue").val($this.data('value'));

});

$("form[name=soda-form]").submit(function(e) {
    if ($(this).find("li.select").length == 0) {
        alert( "Please enter soda." );
        e.preventDefault();
    }
});
//});
