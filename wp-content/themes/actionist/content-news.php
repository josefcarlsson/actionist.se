<?php
/**
 * The template used for displaying page content
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */
?>


<article id="post-<?php the_ID(); ?>" data-date="<?php get_the_date(); ?>" <?php post_class(); ?>>
		<?php the_title( '<h3 class="entry-title">', '</h3>' ); ?>
		<div class="presentationText"><?php the_content(); ?></div>
</article><!-- #post-## -->
