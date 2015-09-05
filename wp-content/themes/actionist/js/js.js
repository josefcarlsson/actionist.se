var isStartPage = false,
	animationPresentationDone = false;

$(document).ready(function(){

  // functions that runs on load
  setGreatingFrase();
  startInstagramFeed();
  changeQuats();
  menuScroll();
  setTimeout(function(){ 
	   masonryGrid()
	  }, 100);

  	if($('body.home').length > 0){
  		isStartPage = true;
  		resetStartPage();
  		$presentationStartPage = $('.home').find('#presentation');
  		$('button.exit-start-view').on('click', function(e){
  			$('body').css('overflow', 'auto');
  			goToByScroll('nav');
  			setTimeout(function(){
  				$('#presentation').removeClass('preanimation');
       			$('#presentation').find('.dot').addClass('animation');
  			}, 400);
  		});
	}
 });

function goToByScroll(div){
    var offset = $(div).offset();
    var scrolltoY = offset.top;

    $('html,body').animate({ scrollTop: scrolltoY }, 500);
} 

function resetStartPage(){
	goToByScroll('body');
	setTimeout(function(){
		$('#presentation').addClass('preanimation');
	}, 500)
}

$( window ).scroll(function() {
   var scrollTop = $(window).scrollTop()
   menuScroll(scrollTop);
   
   /*if(isStartPage && !animationPresentationDone){
   		presentationAnimation(scrollTop);
   }*/
});

//stick the menu to top
function menuScroll(scrollTop){
	var menuTop = $(window).height();
	if(menuTop <= scrollTop){	
		$('nav').addClass('menuActive')
	}
	else{
		$('nav').removeClass('menuActive')
	}	
}

/*function presentationAnimation(scrollTop){
	var hT = $('#presentation').offset().top,
       wH = $(window).height(),
       hH = wH * 0.50;
       wS = $(this).scrollTop();
   if (wS > (hT+hH-wH)){
       $('#presentation').removeClass('preanimation');
       $('#presentation').removeClass('preanimation');
		animationPresentationDone = true;
		console.log('yes');
   }
}*/

//client logo grid
 function masonryGrid(){
		var container = document.querySelector('.logoWrapper');

	    var msnry = new Masonry( container, {
	      	itemSelector : '.clientLogo',
		    gutter:5,
		    isFitWidth: true
		});
 }
//quat top on startpage 
function changeQuats(){
	$.each( quats, function( i, quats ) {
		  $('#quats').append('<span>'+quats.text+'</span>')
		});
	
	var activeQuat = $('#quats span');
	activeQuat.first().addClass('current');
	 setInterval(function(){
    var next = activeQuat.filter('.current').removeClass('current').next('span');

    if (next.length === 0) {
        next = activeQuat.first();
    }

    next.addClass('current');
    }, 3000);
}
//instagram
function startInstagramFeed(){
 	var feed = new Instafeed({
	  	get: 'tagged',
	    limit: '11',
	    tagName: 'awsome',
	    sortBy: 'none',
	    clientId: 'ab762af7ca2a4c368d310632077367f9',
	    resolution: 'standard_resolution',
	    template: '</div><div class="istagramImg"><div class="instagramImgContent"><p class="likes"><img src=""> {{comments}} <img src=""> {{likes}}</p><a href="{{link}}"><img src="{{image}}" /><p class="user">{{model.user.username}}</p><p class="instagramText"> {{caption}}<br>{{model.comments.data[0].text}}<br>{{model.comments.data[1].text}}<br>{{model.comments.data[2].text}}</p></a></div></div>',
	    after: function() {
		    instagramSlider()
	      }
	    });
	 feed.run();
}

function instagramSlider(){
	var activeImg = $('#instafeed .istagramImg');
	activeImg.first().addClass('current');
	 setInterval(function(){
    var next = activeImg.filter('.current').removeClass('current').next('.istagramImg');

    if (next.length === 0) {
        next = activeImg.first();
    }

    next.addClass('current');
    }, 3000);
};


function setGreatingFrase(){
	  var date = new Date();
	  var time = date.getHours();

	  if(time <= 12){
		  $('#timeOfDay').text('Godmorgon');
	  }
	  if(time >= 12 && time < 17){
		  $('#timeOfDay').text('glad eftermiddag');
	  }
	  if(time >= 17){
		  $('#timeOfDay').text('god kväll');
	  }
	  
  }