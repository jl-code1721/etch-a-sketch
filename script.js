$(document).ready(function() {

	createGrid(16);

  $('#reset').on('click', function() {
  	var z = prompt("How many squares per side?");
    clearGrid();
    createGrid(z);
    
    $('.grid').mouseover(function() {
  		$(this).css("opacity", "+=0.15");
  	});
  });
  
  function createGrid(x) {
  	for (var rows = 0; rows < x; rows++) {
    	for (var columns = 0; columns < x; columns++) {
      	$('#container').append('<div class="grid"></div>');
      };
    };
    $('.grid').height(600/x);
    $('.grid').width(600/x);
      
    $('.grid-size').text('Grid size: ' + x + 'x' + x);
      
  }
  
  function clearGrid() {
  	$('.grid').remove();
  }
  
  $('.grid').mouseover(function() {
  	$(this).css('background-color', 'black');
  });

});
