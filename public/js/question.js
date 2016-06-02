jQuery(document).ready(function($) {
  var socket = io();
  var num = 3;
  $('.question .blue.button').click(function() {
    var $question = $('#question input'),
        $prompt = $('.question .prompt input'),
        question = $question.val(),
        prompt = $prompt.val();
    if (question != '' && prompt != '') {
      socket.emit('question', {'ans': question, 'prompt': prompt});
      $question.val('');
      $prompt.val('');
      $('#ans').text('Ans： ' + question);
      $('.question').hide();
      $('.key_prompt').show();
    };
  });
  $('.key_prompt .olive.button').click(function() {
    var $prompt = $('.key_prompt .prompt input'),
        prompt = $prompt.val();
    if (prompt != '') {
      socket.emit('otherprompt', {'prompt': prompt});
      $('.key_prompt label').text('提示 ' + num++);
      $prompt.val('');
    };
  });
  $('.key_prompt .red.button').click(function() {
    socket.emit('showans');
    $('.key_prompt .prompt input').val('');
    num = 3;
    $('.question').show();
    $('.key_prompt').hide();
  });
});