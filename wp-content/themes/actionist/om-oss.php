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
<?php if(get_field('toppbild')): ?>
	<div class="topimage">
		<img src="<?php the_field('toppbild'); ?>">
	</div>
<?php endif; ?>
</div>
<section id="about" class="maxwidth preanimation">
	<div class="centercontent introtext">
		<?php if(get_field('preheading')): ?>
			<span class="preheading underline"><?php the_field('preheading'); ?></span>
		<?php endif; ?>
		<h1 class="heading"><?php the_field('rubrik'); ?></h1>
		<span class="dot"></span>
		<div class="intro"><?php the_field('text'); ?></div>
	</div>
</section>
<section id="about-tools" class="maxwidth centercontent preanimation">
		<h1 class="heading">Våra verktyg</h1>
	<ul class="group section">
		<?php if( have_rows('ikonlista') ):?>
		<?php while ( have_rows('ikonlista') ) : the_row(); ?>
			<li class="col span_3_of_12">
        	<img src="<?php the_sub_field('ikon'); ?>">
			<h2><?php the_sub_field('rubrik'); ?></h2>
			<?php the_sub_field('text'); ?>
        </li>

    <?php endwhile;

else :

    // no rows found

endif; ?>
	</ul>
</section>

<?php get_footer(); ?>

