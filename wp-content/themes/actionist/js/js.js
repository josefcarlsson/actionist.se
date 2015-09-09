
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
		
		if($('.visable').attr('id') == lastCase){
			
		}
		else{
			$(".case").each(function() {
				if($(this).attr('id') == 1){
					console.log('fds')
					$(this).css({
						left: '-=' + (windowWidth - 100)
					})
				}
				else{
					$(this).css({
						left: '-='+windowWidth
					})
				}

				$('#'+prev).removeClass('visable');
				$('#'+next).addClass('visable');
			})	
		}
	})
	
$('.right').click(function(){
		var windowWidth = ($(window).width() - 50);
		var prev = $('.visable').attr('id');
		var firstCase= JSON.parse($('.case:first-child').attr('id'));
		var next = JSON.parse(prev) - 1

		if($('.visable').attr('id') == firstCase){}
		else{
			$(".case").each(function() {
				$(this).css({
					left: '+='+windowWidth
				})
				$('#'+prev).removeClass('visable');
				$('#'+next).addClass('visable');
			})	
			}
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