<?php
/*
Template Name: Index template

 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages and that other
 * 'pages' on your WordPress site will use a different template.
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */
 
get_header(); ?>
<?php 
	/*variables*/
	$presentationTopHeader = get_field('presentationTopHeader');
	$presentationBigHeader = get_field('presentationBigHeader');
	$presentationText = get_field('presentationText');
	$presentationButton = get_field('presentationButton');
?>

<!DOCTYPE html>

<!------------------------------- presentation ------------------------------>

<script>
	var quats = []
	var monday =[]
	var thuesday =[]
	var wednessday =[]
	var thursday =[]
	var friday =[]
	var saturday =[]
	var sunday =[]
	var special =[]
	window.quats= quats

 //youtube script
 </script>
 <?php if( have_rows('monday') ): 
	 while( have_rows('monday') ): the_row(); 
		 $id= get_sub_field('id');?>
		<script>
			var obj = "<?php echo $id ?>";
			monday.push(obj);
		</script>
	<?php endwhile;
endif; ?>
 <?php if( have_rows('thuesday') ): 
	 while( have_rows('thuesday') ): the_row(); 
		 $id= get_sub_field('id');?>
		<script>
			var obj = "<?php echo $id ?>";
			thuesday.push(obj);
		</script>
	<?php endwhile;
endif; ?>
 <?php if( have_rows('wednessday') ): 
	 while( have_rows('wednessday') ): the_row(); 
		 $id= get_sub_field('id');?>
		<script>
			var obj = "<?php echo $id ?>";
			wednessday.push(obj);
		</script>
	<?php endwhile;
endif; ?>
 <?php if( have_rows('thursday') ): 
	 while( have_rows('thursday') ): the_row(); 
		 $id= get_sub_field('id');?>
		<script>
			var obj = "<?php echo $id ?>";
			thursday.push(obj);
		</script>
	<?php endwhile;
endif; ?>
 <?php if( have_rows('friday') ): 
	 while( have_rows('friday') ): the_row(); 
		 $id= get_sub_field('id');?>
		<script>
			var obj = "<?php echo $id ?>";
			friday.push(obj);
		</script>
	<?php endwhile;
endif; ?>
 <?php if( have_rows('saturday') ): 
	 while( have_rows('saturday') ): the_row(); 
		 $id= get_sub_field('id');?>
		<script>
			var obj = "<?php echo $id ?>";
			saturday.push(obj);
		</script>
	<?php endwhile;
endif; ?>
 <?php if( have_rows('sunday') ): 
	 while( have_rows('sunday') ): the_row(); 
		 $id= get_sub_field('id');?>
		<script>
			var obj = "<?php echo $id ?>";
			sunday.push(obj);
		</script>
	<?php endwhile;
endif; ?>
 <?php if( have_rows('special') ): 
	 while( have_rows('special') ): the_row(); 
		 $id= get_sub_field('id');?>
		<script>
			var obj = "<?php echo $id ?>";
			special.push(obj);
		</script>
	<?php endwhile;
endif; ?>
<script>
	var d = new Date();
    var n = d.getDay()
	switch (n) {
		    case 1:
				var videoId = monday[Math.floor(Math.random() * monday.length)];
		        break;
		    case 2:
				var videoId = thuesday[Math.floor(Math.random() * thuesday.length)];
		        break;
		    case 3:
				var videoId = wednessday[Math.floor(Math.random() * wednessday.length)];
		        break;
		    case 4:
				var videoId = thursday[Math.floor(Math.random() * thursday.length)];
		        break;
		    case 5:
		    	var videoId = friday[Math.floor(Math.random() * friday.length)];
		        break;
		    case 6:
				var videoId = saturday[Math.floor(Math.random() * saturday.length)];
		        break;
		   	case 7:
				var videoId = sunday[Math.floor(Math.random() * sunday.length)];
		        break;
		    default:
				var videoId = special[Math.floor(Math.random() * special.length)];
			    break;
		};
		
</script>
<script>
var tag = document.createElement('script');
tag.src = "//www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

onYouTubeIframeAPIReady = function () {
    player = new YT.Player('player', {
        videoId: videoId,	  // youtube video id
        playerVars: {
            'autoplay': 1,
            'rel': 0,
            'controls': 0, 
            'showinfo': 0,
            'autohide':1,
            'loop' : 1,
            'playlist': videoId
        },
        events: {
            'onReady': onPlayerReady
        }
        
    });
}
	 function onPlayerReady(event) {
	 	$("#playerWrapper").fitVids();
        event.target.mute();
        if($('#playerWrapper').height() <= $(window).height()){
	     	var ratio = $('#playerWrapper').width()/$('#playerWrapper').height()
	        $('#playerWrapper').css({
		        width:($(window).height() * ratio)
	        })
        }
      }
</script>
	
</section>	
<?php if( have_rows('quats') ): 
	 while( have_rows('quats') ): the_row(); 
		 $quat= get_sub_field('quat');?>
		<script>
			var obj = "<?php echo $quat ?>";
			quats.push(obj);
		</script>
	<?php endwhile;
endif; ?>


<section id="top" class="fullHeight">
	<div id="playerWrapper">
		<div id="player"></div>
	</div>
	<button class="exit-start-view">Ta en titt</button>
	<!--<video width="100%" height="100%" autoplay="" muted="" id="video" loop="">
		<source src="<?php echo get_template_directory_uri(); ?>/images/movie.mp4" type="video/mp4">
		<source src="<?php echo get_template_directory_uri(); ?>/images/movie.ogv" type="video/ogv">
		  Your browser does not support the video tag.
	</video>-->
	<div class="verticalWrapper">
		<div class="widthWrapper">
			<h3><span id="timeOfDay"></span></h3>
			<h1><span>Vi är:</span><span id="quats"></span></h1>
		</div>
	</div>
</section>

<!------------------------------- presentation ------------------------------>
<section id="presentation" class="presentation widthWrapper preanimation">
	<span class="preheading underline"><?php echo $presentationTopHeader ?></span>
	<h2 class="heading"><?php echo $presentationBigHeader ?></h2>
	<span class="dot"></span>
	<div><?php echo $presentationText ?></div>
	<button class="blue square"><?php echo $presentationButton ?></button>
</section>

<!------------------------------- case ------------------------------>

<section class="caseSection">
	<div id="caseWrapper">
		<ul>
		<?php $loop = new WP_Query( array( 'post_type' => 'case', 'posts_per_page' => -1 ) ); ?>
		<?php while ( $loop->have_posts() ) : $loop->the_post(); 
			 if(get_field('showOnStart') == 'Ja') : ?>
			 						<?php get_template_part( 'content', 'page' );?>		
				<?php endif;
			endwhile;?>
		<?php wp_reset_query();?>
		</ul>
	</div>			
</section>

<!------------------------------- news ------------------------------>	
<section id="news">
	<span class="preheading">Ha koll på</span>
	<h2 class="heading">Livet på Actionist</h2>
	<div class="newsoverflow">
		<div class="newsholder">
		<?php query_posts( array ( 'posts_per_page' => -1, 'orderby' => 'date', 'order' => 'asc' ) ); ?>
			<?php if (have_posts()) : ?><?php while (have_posts()) : the_post(); 	?>	
					<!--<a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>">-->
						<?php get_template_part( 'content', 'news' );?>		
					<?php endwhile; ?>
		<?php endif; 
		wp_reset_query();?>
		</div>
	</div>
	<input type="range" min="0" max="0" step="1" value="1" class="newsdragger">
</section>

<!------------------------------- uspar ------------------------------>
<section id="uspar" class="group section">
	<div class="uspNewsWrapper col span_4_of_12">
		<h2>Nyhet</h2>
		<?php query_posts( array ( 'category_name' => 'news', 'posts_per_page' => -1 ) ); ?>
			<?php if (have_posts()) : 
				 while (have_posts()) : the_post(); 	?>	
				<?php if(get_field('showOnStart') != 'Ja') : ?>
					<a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>">
						<?php get_template_part( 'content', 'usp' );?>		
					</a>
				<?php else : ?>
			<?php endif; ?>
		<?php endwhile; ?>
		<?php endif; 
	wp_reset_query();?>
		
	</div>
	
	<div class="span_4_of_12 col instagram" id="instafeed">
	<h2>#actionist</h2>
	</div>
	
	<div class="span_4_of_12 col spotify">
		<div class="bluebox"><h2>Spelas på kontoret</h2></div>
		<?php get_sidebar();?>
		<?php dynamic_sidebar( 'spotify' );?>
	</div>
</section>

<section id="clients">
	<div class="widthWrapper">

		<h2 class="heading">Våra kunder</h2>
	<?php if( have_rows('clients') ): ?>
		<div class="logoWrapper">
		 <?php while( have_rows('clients') ): the_row(); 
			 $logo= get_sub_field('logo');
			 $class = get_sub_field('clientsize');
			 ?>
			 <div class="gutter-sizer"></div>
			 <div class="grid-sizer"></div>
			 <div class="clientLogo <?php echo $class ?>" style="background-image:url(<?php echo $logo['url'] ?>)">
				 <img src="<?php echo $logo['url'] ?>"></div>
			<?php endwhile;?>
		</div>
	<?php endif; ?>	
	</div>
</section>
<?php
get_footer();
?>
