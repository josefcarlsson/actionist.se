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

<section id="top" class="fullHeight">
	<video width="100%" height="100%" autoplay="" muted="" id="video" loop="">
		<source src="<?php echo get_template_directory_uri(); ?>/images/movie.mp4" type="video/mp4">
		<source src="<?php echo get_template_directory_uri(); ?>/images/movie.ogv" type="video/ogv">
		  Your browser does not support the video tag.
	</video>
	<div class="verticalWrapper">
		<div class="withWrapper">
			<h3><span id="timeOfDay"></span></h3>
			<h1><span>Vi är: </h1><h1 id="quats"></span></h1>
	</div>
	</div>
</section>
<!------------------------------- MENU ------------------------------>
<nav>
	<img src="<?php echo get_template_directory_uri(); ?>/images/actionist.png" alt="actionist">
	<ul>
		<li>JOBB</li>
		<li>OM OSS</li>
		<li>KONTAKTA OSS</li>
		<li><span class="dott"></span><span class="dott"></span></li>
	</ul>
</nav>

<!------------------------------- presentation ------------------------------>
<section id="presentation" class="presentation withWrapper">
	<h4><?php echo $presentationTopHeader ?></h4>
	<h1><?php echo $presentationBigHeader ?><br><span class="dott"></span></h1>
	<div><?php echo $presentationText ?></div>
	<button><?php echo $presentationButton ?></button>
</section>

<!------------------------------- case ------------------------------>

<div class="case">
	<?php query_posts( array ( 'category_name' => 'cases', 'posts_per_page' => -1 ) ); ?>
	<?php if (have_posts()) : ?><?php while (have_posts()) : the_post(); 
		 if(get_field('showOnStart') == 'Ja') : ?>
			<a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>">
				<?php get_template_part( 'content', 'page' );?>		
			</a>
		<?php endif;
			endwhile; 
	endif; ?>
</div>

<!------------------------------- news ------------------------------>	
<section class="news">
	<h3>Ha koll på</h3>
	<h1>Livet på Actionsit</h1>
	<div class="">
	<?php query_posts( array ( 'category_name' => 'news', 'posts_per_page' => -1 ) ); ?>
	<?php if (have_posts()) : ?><?php while (have_posts()) : the_post(); 		
			if(get_field('showOnStart') == 'Ja') : ?>
			<a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>">
				<?php get_template_part( 'content', 'page' );?>		
			</a>
		<?php endif; ?>
	<?php endwhile; ?>
	<?php endif; ?>
</section>

<!------------------------------- uspar ------------------------------>
<?php get_footer(); ?>
