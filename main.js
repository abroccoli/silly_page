

$(document).ready(function() {
  $('#bg-blue').click(function(){
    $('html').css('background', 'blue')
  });

  $('#text-red').click(function(){
    $('html').css('color', 'red')
  });

  $('#flip_it').click(function() {
    $('#flipping').toggleClass('flipdiv');
  });
});
