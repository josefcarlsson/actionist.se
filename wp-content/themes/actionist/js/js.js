
  $(document).ready(function(){
  //Variables
  var caseVisable = 1
  var numberOfCase = 1
  var isStartPage = false,
  animationPresentationDone = false;	  
	
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
var $newsOverflowControl = $('.newsoverflow');
var $newsBlock = $('.newsholder');
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
		$this.width(newsItemWidth).css('left', (previousLeft + newsItemPadding));
		previousLeft = previousLeft + newsItemWidth + newsItemPadding;
		thisNewsNumber++;
	});
	console.log(leftPositionIndex);
	$newsBlock.width(previousLeft + endSpace);
	console.log("Newsblock width: " + (newsItemWidth));
	$('input[type="range"]').attr('max',previousLeft - newsItemWidth - newsItemPadding - newsItemPadding - newsItemWidth - endSpace).rangeslider({polyfill: false, onSlide: function(position, value) {adjustNews(value)},});
	setTimeout(function(){
		$('input[type="range"]').val(200).change();
	}, 1200);
}

function adjustNews(value){
	$newsBlock.css('left', 0 - value + 'px');
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