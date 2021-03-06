<?php
/*
Template Name: case overview template

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
	$header = get_field( "header" );
	$text = get_field( "text" );
	
?>
<section class="case_section sectionVpadding"> 
	<span class="preheading underline"><?php echo $text?></span>
	<h1 class="heading"><?php echo $header?></h1>
</section>
<section class="group section case_section" menu-white>
	<?php $loop = new WP_Query( array( 'post_type' => 'case', 'posts_per_page' => -1 ) ); ?>
	<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
			 <?php get_template_part( 'content', 'overview' );?>		
		<?php 
			endwhile;?>
		<?php wp_reset_query();?>		
</section>
<?php
get_footer();
?>
