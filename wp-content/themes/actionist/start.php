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
	$videoTopHeaderBackup = get_field('videoTopHeaderBackup');
	$presentationTopHeader = get_field('presentationTopHeader');
	$presentationBigHeader = get_field('presentationBigHeader');
	$presentationText = get_field('presentationText');
	$presentationButton = get_field('presentationButton');
	$presentationButtonLink = get_field('button_link');
	
?>

<!DOCTYPE html>

<!------------------------------- presentation ------------------------------>

<script>

	var monday =[]
	var thuesday =[]
	var wednessday =[]
	var thursday =[]
	var friday =[]
	var saturday =[]
	var sunday =[]
	var special =[]
	//window.quats= quats

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
		window.videoId
</script>

	
</section>	
<!--<?php if( have_rows('quats') ): 
	 while( have_rows('quats') ): the_row(); 
		 $quat= get_sub_field('quat');?>
		<script>
			var obj = "<?php echo $quat ?>";
			quats.push(obj);
		</script>
	<?php endwhile;
endif; ?>-->
<section id="preloader">
	<div class="preloaderImg">
		<div id="svg"><svg version="1.1"  id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
		 viewBox="0 0 887.8 821" enable-background="new 0 0 887.8 821" xml:space="preserve">
		<circle fill="none" class="path" stroke="#000000" stroke-width="47" stroke-miterlimit="10" cx="446.5" cy="408.7" r="375.3"/>
		</svg></div>
		<img src="<?php echo get_template_directory_uri(); ?>/images/actionistA.svg" class="preloaderImg">
	</div>
</section>
<div id="topWrapper"> 
<section id="top" class="fullHeight" style="background-image: url(<?php echo $videoTopHeaderBackup['url']?>)">
	<div id="playerWrapper">
		<video id="player" autoplay muted loop>
			  <source id="videoMp4" src="" type="video/mp4">
			  			<script>
				$('#videoMp4').attr('src','http://actionistdev.se/actionist_v2/video/'+videoId)
			</script>
		</video>
	</div>
	<button class="exit-start-view">Ta en titt<br><img src="<?php echo get_template_directory_uri(); ?>/images/arrowDown.svg"></button>
	<!--<video width="100%" height="100%" autoplay="" muted="" id="video" loop="">
		<source src="<?php echo get_template_directory_uri(); ?>/images/movie.mp4" type="video/mp4">
		<source src="<?php echo get_template_directory_uri(); ?>/images/movie.ogv" type="video/ogv">
		  Your browser does not support the video tag.
	</video>-->
	<div class="top_center">
	<div class="verticalWrapper">
		<div class="widthWrapper">
			<h3><span id="timeOfDay"></span>!</h3>
			<h1>Välkommen till<br> Actionist</h1>
		</div>
	</div>
	</div>
</section>
</div>
<!------------------------------- presentation ------------------------------>
<section id="presentation" class="presentation widthWrapper preanimation introtext">
	<span class="preheading underline"><?php echo $presentationTopHeader ?></span>
	<h2 class="heading"><?php echo $presentationBigHeader ?></h2>
	<span class="dot"></span>
	<div><?php echo $presentationText ?></div>
	<?php if(1===2): ?><a href="<?php echo $presentationButtonLink?>"><button class="blue square"><?php echo $presentationButton ?></button></a><?php endif; ?>
</section>

<!------------------------------- case ------------------------------>

<section class="caseSection" id="casesSection">
<div class="dotholder">
            <button class="left caseNavigation"><img src="<?php echo get_template_directory_uri(); ?>/images/arrow.png" alt="arrow"/></button>
            <button class="right caseNavigation" ><img src="<?php echo get_template_directory_uri(); ?>/images/arrow.png" alt="arrow"/></button>
            <div class="number-of-case">
            </div>
        </div>
		<ul>
		<?php $loop = new WP_Query( array( 'post_type' => 'case', 'posts_per_page' => -1 ) ); ?>
		<?php while ( $loop->have_posts() ) : $loop->the_post(); 
			 if(get_field('showOnStart') == 'Ja') : ?>
			 	<?php get_template_part( 'content', 'casepreview' );?>		
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
		<?php if(1===2): ?><article id="" data-date="" class="post">
			<h3 class="entry-title">Nyhetsarkiv</h3>
			<p>Se fler nyheter <a href="#">här</a>
		</article><!-- #post-## --><?php endif; ?>
		<?php $newsArr = array();
		$newsCount = 0;?>
		<?php query_posts( array ( 'posts_per_page' => 10, 'orderby' => 'date', 'order' => 'desc' ) ); ?>
			<?php if (have_posts()) : ?><?php while (have_posts()) : the_post(); 	?>
				<?php 
				$newsArr[$newsCount] = array('date' => get_the_date(), 'heading' => get_the_title(), 'text' => get_the_content(), 'permalink' => get_permalink(), 'id'=>get_the_id());
				$newsCount++?>
			<?php endwhile; ?>
		<?php endif;
		wp_reset_query();?>
		<?php
		$reversedArr = array_reverse($newsArr);
		foreach($reversedArr as $news):?>
		<?php $date = $news['date'];
			$month = cleanUpDate('month', substr($date, 5, 2));
			$day = cleanUpDate('day', substr($date, 8, 2));
			?>
			
			<article id="post-<?php print $news['id']; ?>" data-date="<?php print $day . " " . $month; ?>" class="post">
				<h3 class="entry-title"><?php print $news['heading']; ?></h3>
				<?php print $news['text']; ?>
			</article><!-- #post-## -->

		<?php endforeach; ?>
		</div>
	</div>
	<input type="range" min="0" max="0" step="1" value="1" class="newsdragger">
</section>

<!------------------------------- uspar ------------------------------>
<section id="uspar" class="group section maxwidth">
	<div class="uspNewsWrapper col span_4_of_12"><!--
		--><h2>Nyhet</h2>
		<?php query_posts( array ( 'posts_per_page' => -1, 'orderby' => 'date', 'order' => 'desc' ) ); ?>
			<?php $count = 0; ?>
			<?php if (have_posts()) : 
				 while (have_posts()) : the_post(); 	?>	
				<?php if(get_field('showOnStart') === 'Ja' && $count < 1): ?>
					<!--<a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>">-->
						<?php get_template_part( 'content', 'usp' );?>		
					<!--</a>-->
					<?php $count++; ?>
				<?php else : ?>
			<?php endif; ?>
		<?php endwhile; ?>
		<?php endif; 
	wp_reset_query();?>
	</div>
	
	<div class="span_4_of_12 col instagram">
		<div id="instafeed"><h2>#actioniststhlm</h2></div>
	</div>
	
	<div class="span_4_of_12 col spotify">
		<h2>Spelas på kontoret</h2>
		
		<?php dynamic_sidebar( 'spotify' );?>
	</div>
</section>

<section id="clients" class="maxwidth section">
	

		<h2 class="heading">Våra kunder</h2>
	<?php if( have_rows('clients') ): ?>
		<ul class="logoWrapper">
		 <?php while( have_rows('clients') ): the_row(); 
			 ?><li>
				<?php $image = get_sub_field('logo');
				if( $image ) {
					print "<img src='" . $image['sizes']['client'] . "'>";
				} ?>
			</li><?php endwhile;?>
		</ul>
	<?php endif; ?>	
	
</section>
<?php
get_footer();
?>
