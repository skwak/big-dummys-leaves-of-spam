$.get('/').done(
  function checkForWhiteSpace(){
    var text = $('#spammy-text').html();
    var newText = text.replace(/\n\n/g, '<br><br>');
    $('#spammy-text').html(newText);
  });
