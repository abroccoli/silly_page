

$(document).ready(function() {
  $('#bg-blue').click(function(){
    $('#container').css('background', 'blue')
  });

  $('#text-red').click(function(){
    $('#flipping').css('color', 'red')
  });

  $('#flip_it').click(function() {
    $('#flipping').toggleClass('flipdiv');
  });
});
