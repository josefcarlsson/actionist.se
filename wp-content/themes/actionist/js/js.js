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
			var Xperspective = (mouseX - project_overview[i].x) /100
			var Yperspective = (mouseY - project_overview[i].y) /-100
	    	$('#'+project_overview[i].id).css({
		    	  transform: 'rotateX('+ Yperspective +'deg)rotateY('+ Xperspective +'deg)',
		    	   MozTransform: 'rotateX('+ Yperspective +'deg)rotateY('+ Xperspective +'deg)',
				   WebkitTransform: 'rotateX('+ (Yperspective/2) +'deg)rotateY('+ (Xperspective/2) +'deg)',
				   msTransform: 'rotateX('+ Yperspective +'deg)rotateY('+ Xperspective +'deg)'
		  	    	})
		}
   });
   
$('.NewsMenu').click(function(e){
	e.preventDefault()
	if($('body.home').length > 0){
	}
	else{
		window.location = '../#news';
	}
	goToByScroll('#news')
})
$('.caseMenu').click(function(e){
	e.preventDefault()
	if($('body.home').length > 0){
	}
	else{
		window.location = '../#casesSection';
	}
	goToByScroll('#casesSection')
})
$('.aboutMenu').click(function(e){
	e.preventDefault()
	if($('body.home').length > 0){
	}
	else{
		window.location = '../#presentation';
	}
	goToByScroll('#presentation')
})
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


$(".spotify").hover(
  function () {
    $(this).children().children().children().children('.lastfmlive_song_info').addClass("lastfmlive_song_info_active");
  },
  function () {
    $(this).children().children().children().children('.lastfmlive_song_info').removeClass("lastfmlive_song_info_active");
  }
);

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
  			var $this = $(this);
  			setTimeout(function(){
  				$this.removeClass('preanimation');
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
  			var $this = $(this);
  			setTimeout(function(){
  				$this.removeClass('preanimation');
  			}, employeeAnimTime);
  			employeeAnimTime += 100;
  		});
	}


	if($('.lastfmlive_recently_played').length > 0){
  		$(this).find('img').each(function(){
  			if($(this).attr('src') === 'http://cdn.last.fm/flatness/catalogue/noimage/2/default_artist_small.png'){
  				$(this).parent().addClass('noimage')
  				$(this).remove()
  				
  	  			}
  		});
	}

var numberClicked = 1
function checkdottactive(next){
	$('.case-dott').removeClass('active');
	var next = (next + 1);
	$('.case-dott:nth-child('+next+')').addClass('active')
}
$('#loadMoreCase').click(function(){
	var numberOfLoadedCase = 0
	if($(window).width() > 1300){
		var time = 0.1
		$(".case_preview").each(function() {
			if(numberOfLoadedCase >= (numberClicked * 5) && numberOfLoadedCase <= ((2*(numberClicked)) * 4)){
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
				if(numberOfLoadedCase >= (numberClicked * 4) && numberOfLoadedCase < ((2*(numberClicked)) * 4)){
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
    var scrolltoY = (offset.top - 80);

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
	  //fitVidHeight(window)
	  
		
})
function doneResizing(){
	run = true;
	caseSlider(run);
	initNews();
	//masonryGrid()
	//productDetail()
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
  if($('body.home').length > 0){
	   caseSlider(run);  
  }

   
}
var scrollTimeout = null;
var scrollendDelay = 500; // ms
   var counterScroll = 0
   

$( window ).scroll(function() {
   var scrollTop = $(window).scrollTop()
   
   if ( scrollTimeout === null ) {

    } else {
        clearTimeout( scrollTimeout );
    }
    scrollTimeout = setTimeout( scrollendHandler, scrollendDelay );
    
     if($('body.home').length > 0){
	        menuScroll(scrollTop);

     }

   function scrollendHandler() {
    // this code executes on "scrollend"
     if($('body.home').length > 0){
    	        if(scrollTop > $(window).height()){
		        counterScroll++
	        }
	        if(scrollTop < $(window).height() && counterScroll < 1){
		        goToByScroll('nav')
		        counterScroll++
	        }
	    }
    scrollTimeout = null;
    
}
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


///////////////////
//News rotator
//////////////////
 //News variables
var newsCount = 0;
var padding = 0.1; //percent
var newsWidth = 0.6; //percent
var leftPositionIndex = [];
var panAnimate = true;
var animationOK = true


$('.caseStartPreview').hammer().bind("swiperight", function(){
	if(animationOK == true){
		animationOKFunction()
		var current = $('.visable').attr('id');
		var windowWidth = $('.case').width();
		var prev = JSON.parse(current) - 1;
		if(prev <= -1){
		}
		else{
			checkdottactive(prev)
		}
		if(prev <= 0){
			$('.left').css({
				display:'none'
			})

		}
		else{
			$('.left').css({
				display:'block'
			})
			$('.right').css({
				display:'block'
			})
		}
		if(prev == -1){
			
			//$('#'+(numberOfCase - 1)).addClass('visable');
			}
		else{
			$('#'+prev).addClass('visable')
			$('.caseSection ul').css({
				marginLeft: '+='+(windowWidth),
				})
			$('#'+current).removeClass('visable');
		}
	}
	else{
		
	}
	});

	
$('.caseStartPreview').hammer().bind("swipeleft", function(){
	if(animationOK == true){
		var direction = 'right';
		animationOKFunction(direction)
		var windowWidth = $('.case').width();
		var current = $('.visable').attr('id');
		var next = JSON.parse(current) + 1
		if(next >= (numberOfCase - 1)){
			$('.right').css({
				display:'none'
			})
		}
		else{
			$('.left').css({
				display:'block'
			})
			$('.right').css({
				display:'block'
			})
		}
		if(next == numberOfCase){
			//$('#0').addClass('visable');
		}
		else{
			checkdottactive(next)
			$(this).addClass('navigationPressed');
			
			$('.caseSection ul').css({
				marginLeft: '-='+(windowWidth),
				})
			$('#'+current).removeClass('visable');
			$('#' + next).addClass('visable');	
		}
	}
	else{
		
	}
	});


$('.left').click(function(){
	if(animationOK == true){
		animationOKFunction()
		var current = $('.visable').attr('id');
		var windowWidth = $('.case').width();
		$('.right').css({
				display:'block'
			})
		var prev = JSON.parse(current) - 1;
		checkdottactive(prev)
		if(prev <= 0){
			$('.left').css({
				display:'none'
			})
		}
		else{
			$('.left').css({
				display:'block'
			})
		}
		if(prev == -1){
			
			//$('#'+(numberOfCase - 1)).addClass('visable');
			}
		else{
			$('#'+prev).addClass('visable')
			$('.caseSection ul').css({
				marginLeft: '+='+(windowWidth),
				})
			$('#'+current).removeClass('visable');
		}
	}
	else{
		
	}
});
$('.right').click(function(){
	if(animationOK == true){
		var direction = 'right';
		animationOKFunction(direction)
					$('.left').css({
				display:'block'
			})
		var windowWidth = $('.case').width();
		var current = $('.visable').attr('id');
		var next = JSON.parse(current) + 1
		checkdottactive(next)
		if(next >= (numberOfCase - 1)){
			$('.right').css({
				display:'none'
			})
		}
		else{
			$('.right').css({
				display:'block'
			})
		}
		if(next == numberOfCase){
			//$('#0').addClass('visable');
		}
		else{
			$(this).addClass('navigationPressed');
			
			$('.caseSection ul').css({
				marginLeft: '-='+(windowWidth),
				})
			$('#'+current).removeClass('visable');
			$('#' + next).addClass('visable');	
		}
	}
	else{
		
	}
	
});
function animationOKFunction(direction){

	animationOK = false;
	setTimeout(function(direction){
			if(direction == 'right'){

				$('.right').removeClass('navigationPressed')
			}
			animationOK = true;
			}, 500);
}
function initNews(){
	$('.newsoverflow .post').each(function(){
		$(this).height('auto');
	});
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
	$newsOverflowControl.height(maxHeightNews + 90);
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
 
function productDetail(){
		var container = document.querySelector('.maxwidthNews');
	    var msnry = new Masonry( container, {
	      	itemSelector : '.productDetailElement',
		  	columnWidth: '.grid-sizer',
		  	percentPosition: true,
		});
 }
 
 
 
 
 
 
 
 
 var letterToDelete = 1
//quat top on startpage 

//var elementQuat = $('#quats');
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
							//changeQuats()
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
	    tagName: 'actioniststhlm',
	    sortBy: 'none',
	    clientId: 'ab762af7ca2a4c368d310632077367f9',
	    resolution: 'standard_resolution',
	    template: '<div class="istagramImg"><div class="instagramImgContent"><a href="{{link}}"><img src="{{image}}" /><p class="instagramText"><strong class="user">{{model.user.username}}</strong><b> {{caption}}</b></p></a></div></div>',
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
		  $('#timeOfDay').text('Glad eftermiddag');
	  }
	  if(time >= 17){
		  $('#timeOfDay').text('Trevlig kväll');
	  }
	  
  }
numberOfCase = 0
function caseSlider(run){

	if(!run){
		 $(".case").each(function() {
			 $(this).attr('id',numberOfCase);
			 $('.number-of-case').append('<div class="case-dott"></div>')
			/* $(this).css({
				 left:numberOfCase * $(window).width(),
			 })*/
			 numberOfCase++
		})
		var dotHolderWidth = (numberOfCase * 20) + 80
		$('.dotholder').css({
			marginLeft: -(dotHolderWidth/2),
			width:dotHolderWidth,
		})
	}
	if(run != 1){
		$('#0').addClass('visable')
		$('.case-dott:first-child').addClass('active')
	}
	else{
		var offset = $('.visable').offset().left
		var marginLeft = JSON.parse($('.visable').parent('ul').css('margin-left').replace("px", ""))
		$('.visable').parent('ul').css({
			marginLeft: (marginLeft - offset)
		})
	}
}
/*function fitVidHeight(){
		 if($('#playerWrapper').width() <= $(window).width()){
	           $('#playerWrapper').css({
		        	width:$(window).width()
	        	})
	       		        	          }

}*/


  // functions that runs on load

  if($('.productDetailElement').length > 0){
		   //productDetail()
		   }
  if($('body.home').length > 0){
	    	  menuScroll();
	 	  	  setTimeout(function(){ 
	
	  startInstagramFeed();
	  initNews();
	  caseSlider();
	  setGreatingFrase();
	 }, 100)
	}
	else{
		$('nav').addClass('menuActive');
	}


 });