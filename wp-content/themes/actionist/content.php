<?php
/**
 * The default template for displaying content
 *
 * Used for both single and index/archive/search.
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */
?>
<?php
	$top_bild = get_field('top_bild');
?>
<div class="top_bild">
		<img src="<?php echo $top_bild['url']?>">
</div>
<div class="maxwidthNewsWrapper">
<div class="maxwidthNews">
			 <div class="grid-sizer"></div>
<article id="post-<?php the_ID(); ?>" class="textWrapper productDetailElement">
	<header class="entry-header">
		<?php
			if ( is_single() ) :
				the_title( '<h1 class="entry-title">', '</h1>' );
			else :
				the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' );
			endif;
		?>
	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php
			/* translators: %s: Name of current post */
			the_content( sprintf(
				__( 'Continue reading %s', 'twentyfifteen' ),
				the_title( '<span class="screen-reader-text">', '</span>', false )
			) );
		?>
	</div><!-- .entry-content -->
</article><!-- #post-## -->
	 <?php if( have_rows('bilder') ): 
	 while( have_rows('bilder') ): the_row(); 
		 $bild = get_sub_field('bild');
		 $format = get_sub_field('format');
		 ?>
		 <div class="<?php echo $format ?> productDetailElement">
			<img src="<?php echo $bild['url'] ?>" class="newsImg">
		 </div>
	<?php endwhile;
	endif; ?>
</div>
</div>
