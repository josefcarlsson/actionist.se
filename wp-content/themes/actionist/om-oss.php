<?php
/*
Template Name: About template

 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages and that other
 * 'pages' on your WordPress site will use a different template.
 *
 * @package WordPress
 * @subpackage Actionist
 * @since Actionist 1.0
 */
 
get_header(); 

?>

<!------------------------------- presentation ------------------------------>
<section id="about" class="section preanimation">
	<div class="thinWrapper centercontent">
		<?php if(get_field('preheading')): ?>
			<span class="preheading underline"><?php the_field('preheading'); ?></span>
		<?php endif; ?>
		<h1 class="heading"><?php the_field('rubrik'); ?></h1>
		<div class="intro"><?php the_field('text'); ?></div>
	</div>
</section>


<?php get_footer(); ?>

