$(document).ready(function() {

  $('.gitprofile').on('submit', function(e) {

    e.preventDefault();

    var token = '?access_token=40bcc49e881b54ac205aada801a6532c74457e5f'
    var url = 'http://api.github.com/users/' + $('input.username').val()+token;

    var template = $('template').html();

    function errorHandling(){
      $('.container').prepend("User not found");
    }

    $.get(url, function(info) {
      $('.container').prepend(Mustache.render(template, info));
      })
      .always(function() {
      $('input.username').val('');
      });

  });
});