<?php
/**
 * The template used for displaying page content
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */
?>
	<?php
		$casePreviewImg = get_field( "casePreviewImg" );
		$casePresentationimg = get_field( "presentationimg" );
		$caseCustomer = get_field( "customer" );
		$caseTitle = get_field( "title" );
		$caseText = get_field( "text" );
		$caseColor = get_field( "caseColor" );
		$ranColor = array("#B3F0E9", "#F0D234", "#FDC6CC", "#FDC6CC");
		$rand_keys = array_rand($ranColor, 2);

	?>
	
<div class="col span_4_of_12 case_preview" >
	<div class="case_preview_wrapper" style="background-image:url(<?php echo $casePreviewImg['url']?>)">
		</div>
		<a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>">
		<div class="preview_wrapper"style="background-color:<?php echo $ranColor[$rand_keys[0]] ?>">
			<div class="preview_content">
				<h3><?php echo $caseCustomer ?></h3>
				<?php the_title( '<h1 class="entry-title">- ', '</h1>' ); ?>
				<div class="summary"><?php the_content(); ?></div>
				<a href="<?php the_permalink() ?>" class="link readMore">Se hela caset</a>
			</div>
		</div>
		</a>
</div><!-- .entry-content -->