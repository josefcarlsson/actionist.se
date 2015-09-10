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
	$test = get_field('test');
?>

<!DOCTYPE html>

<!------------------------------- presentation ------------------------------>

<script>
	var quats = []
	window.quats= quats
</script>
	
</section>	
<?php if( have_rows('quats') ): 
	 while( have_rows('quats') ): the_row(); 
		 $quat= get_sub_field('quat');?>
		<script>
			var obj = {text: '<?php echo $quat ?>'}
			quats.push(obj);
		</script>
	<?php endwhile;
endif; ?>


<section id="top" class="fullHeight">
	<video width="100%" height="100%" autoplay="" muted="" id="video" loop="">
		<source src="<?php echo get_template_directory_uri(); ?>/images/movie.mp4" type="video/mp4">
		<source src="<?php echo get_template_directory_uri(); ?>/images/movie.ogv" type="video/ogv">
		  Your browser does not support the video tag.
	</video>
	<div class="verticalWrapper">
		<div class="widthWrapper">
			<h3><span id="timeOfDay"></span></h3>
			<h1><span>Vi är:</span><span id="quats"></span></h1>
			<button class="exit-start-view">Ta en titt</button>
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
		<?php query_posts( array ( 'category_name' => 'cases', 'posts_per_page' => -1 ) ); ?>
			<?php while (have_posts()) : the_post(); 
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
		<?php query_posts( array ( 'category_name' => 'news', 'posts_per_page' => -1 ) ); ?>
			<?php if (have_posts()) : ?><?php while (have_posts()) : the_post(); 	?>	
					<!--<a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>">-->
						<?php get_template_part( 'content', 'news' );?>		
					
					<?php endwhile; ?>
		<?php endif; 
		wp_reset_query();?>
		</div>
	</div>
	<input type="range" min="0" max="0" step="1" class="newsdragger">
</section>

<!------------------------------- uspar ------------------------------>
<section id="uspar" class="group section">
	<div class="uspNewsWrapper col span_4_of_12">
		<h3>Nyhet</h3>
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
	<h3>#actionist</h3>
	</div>
	
	<div class="span_4_of_12 col spotify">
		<h3>Senast spelat på kontoret</h3>
		<?php get_sidebar();?>
		<?php dynamic_sidebar( 'spotify' );?>
	</div>
</section>

<section id="clients">
	<div class="widthWrapper">

		<h3>Våra kunder</h3>
	<?php if( have_rows('clients') ): ?>
		<div class="logoWrapper">
		 <?php while( have_rows('clients') ): the_row(); 
			 $logo= get_sub_field('logo');?>

			 <img src="<?php echo $logo['url'] ?>" class="clientLogo">
			<?php endwhile;?>
		</div>
	<?php endif; ?>	
	</div>
</section>

