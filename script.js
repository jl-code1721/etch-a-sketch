$(document).ready(function() {
    
    var col = 'black';
    
    var timer;
    
	createGrid(16);
    clear();
    dance();
    

  $('#reset').on('click', function() {
  	var z = prompt("How many squares per side? Definitely don't put more than 200 for anything.");
    while (z > 200) {
        z = prompt("I told you, no more than 200.");
    }
      
    clearGrid();
    createGrid(z);
  });
    
  $('input').on('click', function() {
      col = $(this).val();
  });
    
  function clear() {
      $('#clear').on('click', function() {
          $('.grid').css({
              'background-color' : 'black',
              'opacity' : 0
          });
      });
  }
    
  function color() {
      $('.grid').mouseover(function() {
          $(this).css("opacity", "+=0.15");
          if (col === "random") {
            $(this).css("background-color", "hsla(" + Math.floor(Math.random()*360).toString() + "," + Math.floor(Math.random()*100).toString() + "%," + 50 + "%, 1)");
          }
          else {
            $(this).css("background-color", col);
          }
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
