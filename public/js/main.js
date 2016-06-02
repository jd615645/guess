jQuery(document).ready(function($) {
  var socket = io();
  socket.on('first-prompt', function(data) {
    // console.log(data.ans);
    $('.modal #ans').text(data.ans);
    add_prompt(data.prompt);
  });
  socket.on('prompt', function(data) {
    add_prompt(data.prompt);
  });
  socket.on('showans', function() {
    $('.ui.modal').modal('show');
    $('.problem ul').html('');
  });
  function add_prompt(data) {
    $('.problem ul').append('<li>' + data + '</li>')
  }
});