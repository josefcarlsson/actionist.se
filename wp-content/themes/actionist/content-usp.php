<?php
/**
 * The template used for displaying page content
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */
?>


<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		<h4><?php the_title( '<h1 class="entry-title">', '</h1>' ); ?></h4>
		<!--<div class="presentationText"><?php the_content(); ?></div>-->
</article><!-- #post-## -->
