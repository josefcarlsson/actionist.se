<?php
/*
Template Name: Contact template

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
<section id="contact" class="section"> <!-- Lägg till class Preanimation för att starta animeringarna -->
	<div class="thinWrapper centercontent">
		<?php if(get_field('pre-heading')): ?>
			<span class="preheading underline"><?php the_field('pre-heading'); ?></span>
		<?php endif; ?>
		<h1 class="heading"><?php the_field('rubrik'); ?></h1>
		<div class="intro"><?php the_field('textstycke'); ?></div>
	</div>

	<ul class="weareactionist">
		<?php $loop = new WP_Query( array( 'post_type' => 'Personal', 'posts_per_page' => -1 ) ); ?>
		<?php while ( $loop->have_posts() ) : $loop->the_post(); ?><li class=""><!--preanimation -->
			<?php $image = get_field('bild');
				$size = 'portrait';

				if( $image ) {

					echo remove_width_and_height_attribute(wp_get_attachment_image( $image, $size ));

				} else{
					print '<img src="' . get_template_directory_uri() . '/images/defaultportrait.jpg">';
					}?>
					<?php the_title('<h2>', '</h2>'); ?>
					<p class="title"><?php the_field('titel'); ?></p>
					<a href="mailto:<?php the_field('email'); ?>" class="email"><?php the_field('email'); ?></a>
					<span class="telephone"><?php the_field('telefon'); ?></span>
		</li><?php endwhile; wp_reset_query(); ?><?php if(get_field('visa-vi-soker-folk')): ?><li class=""><!--preanimation -->
		<?php $image = get_field('bild-folk');
				$size = 'portrait';

				if( $image ) {

					echo remove_width_and_height_attribute(wp_get_attachment_image( $image, $size ));

				} else{
					print '<img src="' . get_template_directory_uri() . '/images/defaultportrait.jpg">';
					}?>
		<h2><?php the_field('rubrik-folk'); ?></h2>
		<p class="title">&nbsp;</p>
		<a href="mailto:<?php the_field('email'); ?>" class="email"><?php the_field('email-folk'); ?></a>
		<span class="telephone"><?php the_field('telefon-folk'); ?></span>
		</li><?php endif; ?>
	</ul>
	<div class="thinWrapper centercontent">
		<h2 class="heading"><?php the_field('hittahitrubrik'); ?></h2>
		<div class="adress"><?php the_field('adress'); ?></div>
	</div>
	<?php the_field('karta'); ?>
</section>


<?php get_footer(); ?>

