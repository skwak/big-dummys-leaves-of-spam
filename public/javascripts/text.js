$.get('/').done(
  function everything() {
    var text = $('#spammy-text').html();
    var newText = text.replace(/\n\n/g, '<br><br>');
    $('#spammy-text').html(newText);
  }
);
