$(document).ready(function() {
    
    $('#stopDance').fadeOut();
    
    var col = 'black';
    
    var timer;
    
	createGrid(16);
    clear();
    dance();
    stopDanceBtn();

  $('#reset').on('click', function() {
    var lol = true;
    var lol1 = true;
  	while (lol) {
        var z = prompt("How many squares per side? Definitely don't put more than 200 for anything. Any grid size above 30 will probably lag the page ... in dance mode.");
        
        if (z > 200 || z < 1) {
            while (lol1) {
                z = prompt("Please enter a number between 1 and 200.");
                if (z < 200 && z > 0) lol1 = false;
                if (isNaN(z)) {
                    while (isNaN(z)) {
                        z = prompt("Please enter a number.");
                        if (z > 200 || z < 1) {
                            while (lol1) {
                                z = prompt("Please enter a number between 1 and 200.");
                                if (z < 200 && z > 0) lol1 = false;
                            }
                        }
                    }
                }
            }
        } else {
            while (isNaN(z)) {
                z = prompt("Please enter a number.");
                if (z > 200 || z < 1) {
                    while (lol1) {
                        z = prompt("Please enter a number between 1 and 200.");
                        if (z < 200 && z > 0) lol1 = false;
                    }
                }
            }
        }
        lol = false;
    }
      
    clearGrid();
    createGrid(z);
  });
    
  $('input').on('click', function() {
      col = $(this).val();
  });
    
  function stopDanceBtn() {
      $('#stopDance').on('click', function() {
        clearGrid();
        createGrid(16);
      });
  }
    
  function clear() {
      $('#clear').on('click', function() {
          $('.grid').css({
              'background-color' : 'black',
              'opacity' : 0
          });
          
          stopDance();
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
  	for (rows = 0; rows < x; rows++) {
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
        $('.grid').css("opacity", 1);
        timer = setInterval(function(){
        $('.grid').each(function(){
            $(this).css("background-color", '#' + Math.floor(Math.random()*16777215).toString(16));
            });
        }, 100)
        $('html').addClass('rainbow');
        
        $('#reset').fadeOut();
        $('#clear').fadeOut();
        $('#dance').fadeOut();
        $('h2').fadeOut();
        $('ul').fadeOut();
        $('#stopDance').delay(500).fadeIn();
    }

    function stopDance(){
        clearInterval(timer);
        timer = 0;
        $('html').removeClass('rainbow');
        $('html').addClass('blue');
        
        $('#stopDance').fadeOut();
        $('#reset').delay(500).fadeIn();
        $('#clear').delay(500).fadeIn();
        $('#dance').delay(500).fadeIn();
        $('h2').delay(500).fadeIn();
        $('ul').delay(500).fadeIn();
    }
    

    function dance(){
        $('#dance').click(function(){
            if (timer == 0){
                startDance();
            } else {
                stopDance();
            }
        })
    }
        
});
