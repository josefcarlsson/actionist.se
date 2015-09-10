
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
		    	console.log('last')
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
		console.log(lastCase + 'next' +next)
		switch (JSON.parse(next)) {
		    case 1:
		  		  console.log('first')
				$(".case").each(function() {
					$(this).css({
						left: '+='+(windowWidth - 30)
					})
				})
		        break;
		    case lastCase:
		    	console.log('last')
				$(".case").each(function() {
					$(this).css({
						left: '+='+(windowWidth - 30)
					})
				})
		        break;
		    default:
		    	console.log('else')
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
	
	

//Kör bara på startsidan
  	if($('body.home').length > 0){
  		var 
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

  		$('body').on('pan-x', '.rangeslider__handle', function(){
			$newsBlock.removeClass('animate');
		});

  		//Ta bort när startsidan ska kontrolleras med scroll – dublett av ovan
  		setTimeout(function(){
  				$('#presentation').removeClass('preanimation');
       			$('#presentation').find('.dot').addClass('animation');
  			}, 400);
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
	$('#1').addClass('visable')
		
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
	var newsItemTotalWidth = newsItemWidth + (newsItemPadding * 1);
	var thisNewsNumber = 0;
	var leftPositionIndex = [];
	var previousLeft = endSpace;
	var scrollToX = endSpace;
	$('.post.category-news').each(function(){
		var $this = $(this);
		leftPositionIndex.push(scrollToX - endSpace);
		scrollToX = scrollToX + newsItemWidth + newsItemPadding;
		console.log();
		$this.width(newsItemWidth).css('left', (previousLeft + newsItemPadding));
		previousLeft = previousLeft + newsItemWidth + newsItemPadding;
		thisNewsNumber++;
	});
	console.log(leftPositionIndex);
	$newsBlock.width(previousLeft + endSpace);
	var max = previousLeft - newsItemWidth - newsItemPadding - newsItemPadding - newsItemWidth - endSpace;
	$('input[type="range"]').attr('value', max).attr('max',max).rangeslider({polyfill: false, onSlide: function(position, value) {adjustNews(value)}, onSlideEnd: function(position, value) {snapNews(value, leftPositionIndex, newsCount, newsItemWidth, newsItemPadding)}});
	adjustNews(leftPositionIndex[newsCount - 1] - newsItemWidth - newsItemPadding);
	$('.rangeslider__handle').hammer().bind("pan", function(){
		$newsBlock.removeClass('animate');
		$('.rangeslider__handle').removeClass('animate');
		$('.rangeslider__fill').removeClass('animate');
		console.log('remove');
	});
}

function adjustNews(value){
	$newsBlock.addClass('animate');
	$newsBlock.css('left', 0 - value + 'px');
}

function snapNews(value, leftPositionIndex, newsCount, newsItemWidth, newsItemPadding){
	if($('.newsholder').hasClass('animate')){
		console.log('filmstaden');
	}
	console.log('animatttion');
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
		console.log('vinka');
		if (goLeftDifference > goRightDifference){
			$('input[type="range"]').val(goRight).change();
			adjustNews(goRight);
		} else{
			$('input[type="range"]').val(goLeft).change();
			adjustNews(goLeft);
		}
	}, 100);

	console.log('Value: ' + value + ', Left: ' + goLeftDifference + ", right: " + goRightDifference);
}

//client logo grid
 function masonryGrid(){
		var container = document.querySelector('.logoWrapper');

	    var msnry = new Masonry( container, {
	      	itemSelector : '.clientLogo',
		    gutter:5,
		    isFitWidth: true
		});
 }
 var letterToDelete = 1
//quat top on startpage 
	$.each( quats, function( i, quats ) {
		  $('#quats').append('<span>'+quats.text+'</span>')
		});
		var activeQuat = $('#quats span');
	activeQuat.first().addClass('current');

var text="This text will be written one by one.";
var numberOfLetters = text.length - 2
var delay=300;
var elem = $(".current");
console.log(numberOfLetters)

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
/*
function changeQuats(){
    var str =  $('#quats .current').text()
    var prevStr = str
    var n = str.length;
	setTimeout(function(){ 
	 var letter = setInterval(function(){
		if(letterToDelete <= n){
			console.log(letterToDelete)
			removeLetter(str);	
		}
		else{
			letterToDelete = 1
			clearInterval(letter);
			addLetter(activeQuat, prevStr)
		}		
	}, 200);
	},1000)
	
 }
 
 function removeLetter(str){
	 var removeWord = str.substring(0,str.length - letterToDelete);
	 $('#quats .current').text(removeWord)
	 letterToDelete++
	 return letterToDelete
 }
 function addLetter(activeQuat, prevStr){
	$('#quats .current').text(prevStr);
	var next = activeQuat.filter('#quats .current').removeClass('current').next('span');
    if (next.length === 0) {
        next = activeQuat.first();
    }
  	next.addClass('current');
  	changeQuats()
 }
 */
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
  changeQuats();
  initNews();
  menuScroll();
  caseSlider(numberOfCase);
  setTimeout(function(){ 
	   masonryGrid()
	}, 100);
 });