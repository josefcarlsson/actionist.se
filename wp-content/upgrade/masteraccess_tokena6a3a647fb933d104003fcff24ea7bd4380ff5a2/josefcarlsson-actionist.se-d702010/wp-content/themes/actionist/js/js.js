
  $(document).ready(function(){
  //Variables
  var caseVisable = 1
  var numberOfCase = 1
  var isStartPage = false,
  animationPresentationDone = false;	

  var $newsOverflowControl = $('.newsoverflow');
  var $newsBlock = $('.newsholder');    
	
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
				$(".case").each(function() {
					$(this).css({
						left: '-='+(windowWidth - 30)
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
		var lastCase= JSON.parse($('.case:last-child').attr('id') - 1);
		var next = JSON.parse(prev) - 1
		switch (JSON.parse(next)) {
		    case 1:
				$(".case").each(function() {
					$(this).css({
						left: '+='+(windowWidth - 30)
					})
				})
		        break;
		    case lastCase:
				$(".case").each(function() {
					$(this).css({
						left: '+='+(windowWidth - 30)
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
			$('#'+prev).removeClass('visable');
			$('#'+next).addClass('visable');
	})


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

//Kör bara på kontakt
  	if($('body.page-id-71').length > 0){
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
$( window).resize(function(){
	var caseLocation = 0
	$(".case").each(function() {
		 $(this).css({
			 left:caseLocation,
		 })
		 caseLocation = caseLocation + ($(window).width() - 50);
		
		 numberOfCase++
	})
		$('.case').removeClass('visable')
	$('#1').addClass('visable');

	initNews();
		
})
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


///////////////////
//News rotator
//////////////////
 //News variables
var newsCount = 0;
var padding = 0.1; //percent
var newsWidth = 0.6; //percent

function initNews(){
	newsCount = $('.post.category-news').length;
	var windowWidth = $(window).width();
	var newsItemWidth = windowWidth * newsWidth;
	var newsItemPadding = windowWidth * padding;
	var endSpace = windowWidth * (0.5 - (newsWidth/2) - padding);
	var thisNewsNumber = 0;
	var leftPositionIndex = [];
	var previousLeft = endSpace;
	var scrollToX = endSpace;
	$('.post.category-news').each(function(){
		var $this = $(this);
		leftPositionIndex.push(scrollToX - endSpace);
		scrollToX = scrollToX + newsItemWidth + newsItemPadding;
		$this.width(newsItemWidth).css('left', (previousLeft + newsItemPadding));
		previousLeft = previousLeft + newsItemWidth + newsItemPadding;
		thisNewsNumber++;
	});


	//console.log(leftPositionIndex);
	$newsBlock.width(previousLeft + endSpace);
	var max = previousLeft - newsItemWidth - newsItemPadding - newsItemPadding - newsItemWidth - endSpace;
	$('input[type="range"]').rangeslider('destroy');
	$('input[type="range"]').attr('value', max).attr('max',max).rangeslider({polyfill: false, onSlide: function(position, value) {adjustNews(value)}, onSlideEnd: function(position, value) {snapNews(value, leftPositionIndex, newsCount, newsItemWidth, newsItemPadding)}});
	$('input[type="range"]').val(max).change();
	adjustNews(leftPositionIndex[newsCount - 1] - newsItemWidth - newsItemPadding);
	$('.rangeslider__handle').hammer().bind("pan", function(){
		$newsBlock.removeClass('animate');
		$('.rangeslider__handle').removeClass('animate');
		$('.rangeslider__fill').removeClass('animate');
	});
}

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
		} else{
			$('input[type="range"]').val(goLeft).change();
			adjustNews(goLeft);
		}
	}, 100);
}

//client logo grid
 function masonryGrid(){
	 alert()
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
changeQuats()


	$.each( quats, function( i, quats ) {
		  $('#quats').append('<span>'+quats.text+'</span>')
		});
		var activeQuat = $('#quats span');
	activeQuat.first().addClass('current');

var text="This text will be written one by one.";
var numberOfLetters = text.length - 2
var delay=300;
var elem = $(".current");

//text- string
//elem - jQuery element where text is to be attached
//delay - the delay in each text
var addTextByDelay = function(text,elem,delay,numberOfLetters){
    if(!elem){
        elem = $("body");
    }
    if(!delay){
        delay = 300;
    }
    if(text.length >0){
        //append first character
        elem.append(text[35]);
        setTimeout(
            function(){
                //Slice text by 1 character and call function again                
                addTextByDelay(text.slice(-1),elem,delay);            
             },delay                 
            );
    }
}

addTextByDelay(text,elem,delay);


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
>>>>>>> cb97d4c149d62810d944fb64634e3de66bf6cc58
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
  
function caseSlider(){
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

  // functions that runs on load
  setGreatingFrase();
  startInstagramFeed();
  initNews();
  menuScroll();
  caseSlider(numberOfCase);
  setTimeout(function(){ 
	   masonryGrid()
	}, 100);
 });