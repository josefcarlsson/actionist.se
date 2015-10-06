$(window).load(function () {
	$('.preloaderImg').animate({
		'opacity': 0,
	},200);
	setTimeout(function(){
		$('#preloader').fadeOut(200);
	},800)
})
  $(document).ready(function(){

  //Variables
  var caseVisable = 1
  var numberOfCase = 1
  var isStartPage = false,
  animationPresentationDone = false;	
  var numberOfcaseSlid = 0
  var $newsOverflowControl = $('.newsoverflow');
  var $newsBlock = $('.newsholder');    
  var project_overview = []

  var currentMousePos = { x: -1, y: -1 };
  
  $(document).mousemove(function(event) {
      currentMousePos.x = event.pageX;
      currentMousePos.y = event.pageY;
	  var mouseX = currentMousePos.x - ($(window).width()/2)
	  var mouseY = currentMousePos.y - ($(window).height()/2)
		for (i = 0; i < project_overview.length; i++) { 
			var Xperspective = (mouseX - project_overview[i].x) /140
			var Yperspective = (mouseY - project_overview[i].y) /-140
	    	$('#'+project_overview[i].id).css({
		    	  transform: 'rotateX('+ Yperspective +'deg)rotateY('+ Xperspective +'deg)',
		    	   MozTransform: 'rotateX('+ Yperspective +'deg)rotateY('+ Xperspective +'deg)',
				   WebkitTransform: 'rotateX('+ (Yperspective/2) +'deg)rotateY('+ (Xperspective/2) +'deg)',
				   msTransform: 'rotateX('+ Yperspective +'deg)rotateY('+ Xperspective +'deg)'
		  	    	})
		}
   });
var casePreviewClass = 1
$(".case_preview_wrapper").each(function() {
		$(this).attr('id',casePreviewClass)
		var left = $(this).offset().left
		var right = $(this).offset().left + $(this).width()
		var xCenter = (left + right)/2 
		
		var top = $(this).offset().top
		var bottom = $(this).offset().top + $(this).width()
		var yCenter = (top + bottom)/2 
		
		var yPosition = yCenter - ($(window).height()/2)
		var xPosition = xCenter - ($(window).width()/2)
		var obj = {id:casePreviewClass, x:xPosition, y:yPosition};
		project_overview.push(obj);
		casePreviewClass ++
	})

$('.case').hammer().bind("swiperight", function(){
	console.log(numberOfcaseSlid + 'ssssss' +JSON.parse($('.case:last-child').attr('id') - 1))
	if(numberOfcaseSlid == 0){
		console.log('s')
	}
	else{
			caseSliderLeft()
	}
})	
$('.left').click(function(){
		caseSliderLeft()
	})

function caseSliderLeft(){
	numberOfcaseSlid = numberOfcaseSlid - 1
		console.log(numberOfcaseSlid)
		if($(window).width() <= 480){
			var windowWidth = $('.case').width() + 35
		}
		else{
			var windowWidth = ($('.case').width() + 30);
		}
		var prev = $('.visable').attr('id');
		var lastCase= JSON.parse($('.case:last-child').attr('id'));
		var next = JSON.parse(prev) - 1
		if($(window).width() <= 1300){
			switch (JSON.parse(next)) {
			    case 2:
					$(".case").each(function() {
						$(this).css({
							left: '+='+(windowWidth)
						})
					})
			        break;
			    case lastCase:
			    	numberOfcaseSlid = 0
					$(".case").each(function() {
						$(this).css({
							left: '+='+(windowWidth)
						})
					})
			        break;
			    default:
				 	$(".case").each(function() {
						$(this).css({
							left: '+=' + windowWidth
							})
						})	
				    break;
			};
		}
		else{
			var firstCase= JSON.parse($('.case:first-child').attr('id'));
			console.log(JSON.parse(next + 1) +',first'+ firstCase)
			if(JSON.parse(next + 1) == firstCase){
				var next = JSON.parse($('.case:last-child').attr('id'))
				numberOfcaseSlid = next
				console.log(numberOfcaseSlid)
			}
		}
			$('#'+prev).removeClass('visable');
			$('#'+next).addClass('visable');
}
$('.case').hammer().bind("swipeleft", function(){
	console.log(numberOfcaseSlid + 'f' +JSON.parse($('.case:last-child').attr('id') - 1))

	if(numberOfcaseSlid == JSON.parse($('.case:last-child').attr('id') - 1)){
	}
	else{
	caseSliderRight()
		}
})		
$('.right').click(function(){
		caseSliderRight()
})

function caseSliderRight(){
	numberOfcaseSlid = numberOfcaseSlid + 1
		console.log(numberOfcaseSlid)
		if($(window).width() <= 480){
			var windowWidth = $('.case').width() + 35
		}
		else{
			var windowWidth = ($('.case').width() + 30);
		}
		var prev = $('.visable').attr('id');
		var lastCase= JSON.parse($('.case:first-child').attr('id') - 1);
		var next = JSON.parse(prev) + 1
		if($(window).width() <= 1300){
			switch (JSON.parse(next)) {
			    case 0:
					$(".case").each(function() {
						$(this).css({
							left: '-='+(windowWidth)
						})
					})
			        break;
			    case lastCase:
			    	numberOfcaseSlid = 0
					$(".case").each(function() {
						$(this).css({
							left: '-='+(windowWidth)
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
		}
		else{
			if(JSON.parse(next) == JSON.parse($('.case:last-child').attr('id'))){
				numberOfcaseSlid = 0
				var next = JSON.parse($('.case:first-child').attr('id'))
			}
		}
			$('#'+prev).removeClass('visable');
			$('#'+next).addClass('visable');

}
  	if($('body.home').length > 0){
  		isStartPage = true;
  		//resetStartPage();
  		$presentationStartPage = $('.home').find('#presentation');
  		$('button.exit-start-view').on('click', function(e){
  			$('body').css('overflow', 'auto');
  			goToByScroll('nav');
  			setTimeout(function(){
  				$('#presentation').removeClass('preanimation');
       			$('#presentation').find('.dot').addClass('animation');
  			}, 400);
  		});

  		//Ta bort när startsidan ska kontrolleras med scroll – dublett av ovan
  		setTimeout(function(){
  				$('#presentation').removeClass('preanimation');
       			$('#presentation').find('.dot').addClass('animation');
  			}, 400);
	}

	if($('#about').length > 0){
  		setTimeout(function(){
  				$('#about').removeClass('preanimation');
       			$('#about').find('.dot').addClass('animation');
  			}, 400);
	}

//Kör bara på kontakt
  	if($('body.page-id-100').length > 0){
  		setTimeout(function(){
  				$('#contact').removeClass('preanimation');
       			//$('#contact').find('.dot').addClass('animation');
  			}, 400);

  		var employeeAnimTime = 300;

  		$('.weareactionist').find('li').each(function(){
  			console.log('preanim');
  			var $this = $(this);
  			setTimeout(function(){
  				$this.removeClass('preanimation');
  				console.log('now');
       			//$('#contact').find('.dot').addClass('animation');
  			}, employeeAnimTime);
  			employeeAnimTime += 100;
  		});
	}

	if($('body.page-template-om-oss').length > 0){
  		setTimeout(function(){
  				$('#about').removeClass('preanimation');
       			//$('#contact').find('.dot').addClass('animation');
  			}, 400);

  		var employeeAnimTime = 300;

  		$('section').find('li').each(function(){
  			console.log('preanim');
  			var $this = $(this);
  			setTimeout(function(){
  				$this.removeClass('preanimation');
  				//console.log('now');
  			}, employeeAnimTime);
  			employeeAnimTime += 100;
  		});
	}


	if($('.lastfmlive_recently_played').length > 0){
  		$(this).find('img').each(function(){
  			if($(this).attr('src') === 'http://cdn.last.fm/flatness/catalogue/noimage/2/default_artist_small.png'){
  				$('.lastfmlive_recently_played').addClass('noimage');
  			}
  		});
	}

var numberClicked = 1
$('#loadMoreCase').click(function(){
	var numberOfLoadedCase = 0
	if($(window).width() > 1300){
		var time = 0.1
		$(".case_preview").each(function() {
			console.log(numberOfLoadedCase+'s'+(numberClicked * 4))
			if(numberOfLoadedCase >= (numberClicked * 4) && numberOfLoadedCase <= ((2*(numberClicked)) * 4)){
				$(this).css({
					'-webkit-transition-delay': (time/5)+'s',
					'-moz-transition-delay': (time/5)+'s',
					'-ms-transition-delay': (time/5)+'s',
					'-o-transition-delay': (time/5)+'s',
					'transition-delay':(time/5)+'s'
					})
					$(this).addClass('visableCase');	
					time++	
			}
			numberOfLoadedCase++
		})
	}
	if($(window).width() < 1300 && $(window).width() > 768){
			var time = 0.1
			$(".case_preview").each(function() {
				console.log(numberOfLoadedCase+'s'+(numberClicked * 3))
				if(numberOfLoadedCase >= (numberClicked * 3) && numberOfLoadedCase < ((2*(numberClicked)) * 3)){
					$(this).css({
						'-webkit-transition-delay': (time/5)+'s',
						'-moz-transition-delay': (time/5)+'s',
						'-ms-transition-delay': (time/5)+'s',
						'-o-transition-delay': (time/5)+'s',
						'transition-delay':(time/5)+'s'
						})
						$(this).addClass('visableCase');	
						time++	
				}
				numberOfLoadedCase++
			})
		}
	if($(window).width() < 768){
			var time = 0.1
			$(".case_preview").each(function() {
				console.log(numberOfLoadedCase+'s'+(numberClicked * 2))
				if(numberOfLoadedCase >= (numberClicked * 2) && numberOfLoadedCase < ((2*(numberClicked)) * 2)){
					$(this).css({
						'-webkit-transition-delay': (time/5)+'s',
						'-moz-transition-delay': (time/5)+'s',
						'-ms-transition-delay': (time/5)+'s',
						'-o-transition-delay': (time/5)+'s',
						'transition-delay':(time/5)+'s'
						})
						$(this).addClass('visableCase');	
						time++	
				}
				numberOfLoadedCase++
			})
		}

	numberClicked++
})

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
var resizeDone;
$( window).resize(function(){
	clearTimeout(resizeDone);
	$('.case').css({
		'opacity':0,
	})
	$('.visable').css({
		'opacity':1,
	})	
	resizeDone = setTimeout(doneResizing, 500);
	  fitVidHeight()
	         
	initNews();
		
})
function doneResizing(){
	setTimeout(function(){
	$('.case').css({
		'top':0,
		'opacity':1,
	})
	},800)
	$('.visable').css({
		'opacity':1,
	})
	var run = 1	
  caseSlider(run);  
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
	console.log('ds')
	var menuTop = $(window).height();
	if(menuTop <= scrollTop){	
		$('nav').addClass('menuActive')
	}
	else{
		$('nav').removeClass('menuActive')
	}	
}


///////////////////
//News rotator
//////////////////
 //News variables
var newsCount = 0;
var padding = 0.1; //percent
var newsWidth = 0.6; //percent
var leftPositionIndex = [];
var panAnimate = true;

function initNews(){
	newsCount = $('.newsoverflow .post').length;
	var windowWidth = $(window).width();
	if(windowWidth > 1300){
		windowWidth = 1300;
	}

	if(windowWidth < 600){
		newsWidth = 0.8;
	}

	var maxHeightNews = 0;
	var newsItemWidth = windowWidth * newsWidth;
	var newsItemPadding = windowWidth * padding;
	var endSpace = windowWidth * (0.5 - (newsWidth/2) - padding);
	var thisNewsNumber = 0;
	leftPositionIndex = [];
	var previousLeft = endSpace;
	var scrollToX = endSpace;
	$('.newsoverflow .post').each(function(){
		var $this = $(this);
		leftPositionIndex.push(scrollToX - endSpace);
		scrollToX = scrollToX + newsItemWidth + newsItemPadding;
		$this.width(newsItemWidth).css('left', (previousLeft + newsItemPadding));
		previousLeft = previousLeft + newsItemWidth + newsItemPadding;
		thisNewsNumber++;

		if($this.height() > maxHeightNews){
			maxHeightNews = $this.height();
		}
	});

	$('.newsoverflow .post').each(function(){
		$(this).height(maxHeightNews);
	});

	$newsBlock.width(previousLeft + endSpace);
	$newsOverflowControl.height(maxHeightNews + 40);
	var max = previousLeft - newsItemWidth - newsItemPadding - endSpace;
	$('input[type="range"]').rangeslider('destroy');
	$('input[type="range"]').attr('value', max).attr('max',max + (max*0.06)).rangeslider({polyfill: false, onSlide: function(position, value) {adjustNews(value)}, onSlideEnd: function(position, value) {snapNews(value, leftPositionIndex, newsCount, newsItemWidth, newsItemPadding)}});
	$('input[type="range"]').val(max).change();
	$('.rangeslider__handle').append('<div class="date"></div>');
	adjustNews(leftPositionIndex[newsCount - 1]);
	var newsDate = $('.newsoverflow').find('.post').eq(newsCount - 1).data('date');
		$('body').find('.rangeslider__handle .date').html(newsDate);
	$('.rangeslider__handle').hammer().bind("pan", function(){
		$newsBlock.removeClass('animate');
		$('.rangeslider__handle').removeClass('animate');
		$('.rangeslider__fill').removeClass('animate');
	});
}

$newsBlock.hammer().bind("swiperight", function(){
	if(panAnimate){
		panAnimate = false;
		var x = 0;
		var y = Math.abs(parseInt($newsBlock.css('left')));

		if(y != 0){
			for(var i=0; i<newsCount;i++){
				if(y - 1 > leftPositionIndex[i]){
					x = i;
				}
			}
			adjustNews(leftPositionIndex[x]);
			$('.rangeslider__handle').addClass('animate');
			$('.rangeslider__fill').addClass('animate');
			$('input[type="range"]').val(leftPositionIndex[x]).change();
			var newsDate = $('.newsoverflow').find('.post').eq(x).data('date');
			$('body').find('.rangeslider__handle .date').html(newsDate);

			setTimeout(function(){
				panAnimate = true;
				$('.rangeslider__handle').removeClass('animate');
				$('.rangeslider__fill').removeClass('animate');
			}, 200);
		}
	}

	setTimeout(function(){panAnimate = true;}, 200);
});

$newsBlock.hammer().bind("swipeleft", function(){
	if(panAnimate){
		panAnimate = false;
		var x = 0;
		var y = Math.abs(parseInt($newsBlock.css('left')));
		
		if(y < (leftPositionIndex[newsCount-1])){
			for(var i=0; i<newsCount;i++){
				if(y + 1 > leftPositionIndex[i]){
					x = i;
				}
			}
			if(leftPositionIndex[x+1]){
				adjustNews(leftPositionIndex[x+1]);
				$('.rangeslider__handle').addClass('animate');
				$('.rangeslider__fill').addClass('animate');
				$('input[type="range"]').val(leftPositionIndex[x+1]).change();
				var newsDate = $('.newsoverflow').find('.post').eq(x+1).data('date');
				$('body').find('.rangeslider__handle .date').html(newsDate);
			}
			setTimeout(function(){
				panAnimate = true;
				$('.rangeslider__handle').removeClass('animate');
				$('.rangeslider__fill').removeClass('animate');
			}, 200);
		}	
	}

	setTimeout(function(){panAnimate = true;}, 200);
});

function adjustNews(value){
	$newsBlock.addClass('animate');
	$newsBlock.css('left', 0 - value + 'px');
}

function snapNews(value, leftPositionIndex, newsCount, newsItemWidth, newsItemPadding){
	var newsOnTheLeft = 0;

	for(var i = 0; i < newsCount; i++){
		if(value > leftPositionIndex[i]){
			newsOnTheLeft = i;
		}
	}
	
	var goLeft = leftPositionIndex[newsOnTheLeft];
	var goRight = leftPositionIndex[newsOnTheLeft+1];

	var goLeftDifference = value - goLeft;
	var goRightDifference = goRight - value;

	setTimeout(function(){
		$('.newsholder').addClass('animate');
		$('.rangeslider__handle').addClass('animate');
		$('.rangeslider__fill').addClass('animate');
		if (goLeftDifference > goRightDifference){
			$('input[type="range"]').val(goRight).change();
			adjustNews(goRight);
			newsOnTheLeft++;
		} else{
			$('input[type="range"]').val(goLeft).change();
			adjustNews(goLeft);

		}

		var newsDate = $('.newsoverflow').find('.post').eq(newsOnTheLeft).data('date');
		$('body').find('.rangeslider__handle .date').html(newsDate);
	}, 100);
}

//client logo grid
 function masonryGrid(){
		var container = document.querySelector('.logoWrapper');

	    var msnry = new Masonry( container, {
	      	itemSelector : '.clientLogo',
		  	columnWidth: '.grid-sizer',
		  	gutter: '.gutter-sizer',
		  	percentPosition: true,
		});
 }
 
 
 
 
 
 
 
 
 var letterToDelete = 1
//quat top on startpage 

var elementQuat = $('#quats');
var activeStr = 0
var letterState = 0
var numberOfquat = 0
var currentLetter = 0
var letterGo = 0
var letterPause = 0


function changeQuats(){
	 var letter = setInterval(function(){

			if(letterGo == 0){
				letterGo = 1
				for (i = 0; i < quats.length; i++) { 
			    	var str = quats[numberOfquat]
				}
				numberOfquat++
				if(numberOfquat >= quats.length){
					numberOfquat = 0;
				}
				activeStr = str
			}
			else{
				if(letterState == 0){
					addLetter(activeStr)
					
				}
				else{
					if(letterPause == 1){
						clearInterval(letter);
						setTimeout(function(){ 
							changeQuats()
						}, 2000);
					}
					removeLetter(activeStr)
				}
			}
		}, 50);
	
 }
 
/* 
     var n = str.length;
 if(letterToDelete <= n){
=======
		if(letterToDelete <= n){
			removeLetter(str);	
		}
		else{
			letterToDelete = 1
			clearInterval(letter);
			addLetter(activeQuat, prevStr)
		}		

 
  $('#quats').append('<span>'+quats.text+'</span>')*/

 function removeLetter(str){
	 letterPause = 0
	 var removeWord = str.substring(0,str.length - letterToDelete);
	 $('#quats').text(removeWord)
	 letterToDelete++
	 if(removeWord == ""){
		 letterState = 0
		 letterGo = 0
		 currentLetter = 0
		 letterToDelete = 0
	 }
 }
 
 function addLetter(str){
	var contentArray = str.split("")
	if(currentLetter < contentArray.length) {
		elementQuat.text(elementQuat.text() + contentArray[currentLetter]);
		currentLetter++
	   }
	else{
		letterPause = 1
	    letterState = 1
		}
 }

 //Navigation
 var $hamburger = $('.hamburger');
 var $close = $('.menus .close');
 var $nav = $('nav');
 $hamburger.on('click', function(){
 	$nav.toggleClass('mobilevisible');
 });
  $close.on('click', function(){
 	$nav.toggleClass('mobilevisible');
 });


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
  
function caseSlider(run){
	console.log('sss'+numberOfcaseSlid)
	numberOfCase = 0
	if(numberOfcaseSlid >= 0){
		
	}
	else{
		console.log('rwar'+numberOfcaseSlid)
		numberOfcaseSlid = -(numberOfcaseSlid -2)
	}
	var caseLocation = (($(window).width()/2) - ($('.case').width()/2) - (numberOfcaseSlid * ($('.case').width() + 35)))
	console.log('sdasda'+caseLocation)
		 $(".case").each(function() {
		 $(this).attr('id',numberOfCase);
		 if($(window).width() <= 1300){
			 $(this).css({
				 left:caseLocation,
		 		})
		 	}
		 else{
			$(this).css({
				 left:0,
		 		})
		 }
		 caseLocation = caseLocation + ($('.case').width() + 35);
		 numberOfCase++
	})
	if(run != 1){
		$('#0').addClass('visable')
	}
}
function fitVidHeight(){
		 if($('#playerWrapper').width() <= $(window).width()){
	           $('#playerWrapper').css({
		        	width:$(window).width()
	        	})
	       		        	          }

}


  // functions that runs on load
  	  menuScroll();
  if(typeof quats !== 'undefined'){
	  setGreatingFrase();
	  startInstagramFeed();
	  initNews();
	  caseSlider();
	  setTimeout(function(){ 
		   masonryGrid()
		   changeQuats()
		}, 100);
	}
 });