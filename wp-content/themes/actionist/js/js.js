
  $(document).ready(function(){
  //Variables
  var caseVisable = 1
  var numberOfCase = 1
  var isStartPage = false,
  animationPresentationDone = false;

$(document).ready(function(){

  // functions that runs on load
  setGreatingFrase();
  startInstagramFeed();
  changeQuats();
  menuScroll();
  caseSlider(numberOfCase)
  setTimeout(function(){ 
	   masonryGrid()
	  }, 100);
	  
	
$('.left').click(function(){
		var windowWidth = ($(window).width() - 50);
		var prev = $('.visable').attr('id');
		var lastCase= JSON.parse($('.case:last-child').attr('id'));
		var next = JSON.parse(prev) + 1
		switch (JSON.parse(next)) {
		    case 2:
				$(".case").each(function() {
					$(this).css({
						left: '-='+(windowWidth - 30)
					})
				})
		        break;
		    case lastCase:
		    	console.log('last')
				$(".case").each(function() {
					$(this).css({
						left: '-='+(windowWidth - 60)
					})
				})
		        break;
		    default:
			 	$(".case").each(function() {
					$(this).css({
						left: '-=' + windowWidth
						})
					})	
			    break;
		};
			$('#'+prev).removeClass('visable');
			$('#'+next).addClass('visable');
	})
	
$('.right').click(function(){
		var windowWidth = ($(window).width() - 50);
		var prev = $('.visable').attr('id');
		var firstCase= JSON.parse($('.case:first-child').attr('id'));
		var next = JSON.parse(prev) - 1

		if($('.visable').attr('id') == firstCase){
			
		}
		else{
			if($('.visable').attr('id') == 1){
				console.log('first')
				$(".case").each(function() {
					$(this).css({
						left: '-='+(windowWidth - 30)
					})
				})	
			}
			if($('.visable').attr('id') == (lastCase - 1)){
				console.log('last')
				$(".case").each(function() {
					$(this).css({
						left: '-='+(windowWidth - 60)
					})
				})	
			}
			else{
				$(".case").each(function() {
					$(this).css({
						left: '-='+windowWidth
					})
				})	
				$('#'+prev).removeClass('visable');
				$('#'+next).addClass('visable');
			}
		};
	})
	
	
 });


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
  
function caseSlider(numberOfCase){
	var caseLocation = 0
	$(".case").each(function() {
		 $(this).attr('id',numberOfCase);
		 $(this).css({
			 left:caseLocation,
		 })
		 caseLocation = caseLocation + ($(window).width() - 50);
		
		 numberOfCase++
	})
	$('#1').addClass('visable')
}