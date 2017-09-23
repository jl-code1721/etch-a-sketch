$(document).ready(function() {
    
    var timer;
    
	createGrid(16);
    dance();
    

  $('#reset').on('click', function() {
  	var z = prompt("How many squares per side?");
    clearGrid();
    createGrid(z);
  });
  
  function color() {
      $('.grid').mouseover(function() {
  		  $(this).css("opacity", "+=0.15");
  	  });
  }
    
  function createGrid(x) {
  	for (var rows = 0; rows < x; rows++) {
    	for (var columns = 0; columns < x; columns++) {
      	$('#container').append('<div class="grid"></div>');
      };
    };
    $('.grid').height(600/x);
    $('.grid').width(600/x);
      
    $('.grid-size').text('Grid size: ' + x + 'x' + x);
      
    color();
    
    $('html').addClass('blue');
      
  }
  
  function clearGrid() {
  	$('.grid').remove();
      stopDance();
  }
    
    function startDance(){
        timer = setInterval(function(){
            $('.grid').each(function(){
                $(this).css("background-color", '#' + Math.floor(Math.random()*16777215).toString(16));
                });
        }, 100)
        $('html').addClass('rainbow');
    }

    function stopDance(){
        clearInterval(timer);
        timer = 0;
        $('html').removeClass('rainbow');
        $('html').addClass('blue');
    }

    function dance(){
        $('#dance').click(function(){
            $('.grid').css("opacity", 1);
            if (timer == 0){
                startDance();
            } else {
                stopDance();
            } 
        })
    }

});
