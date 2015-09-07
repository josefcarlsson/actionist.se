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
		$casePresentationimg = get_field( "presentationimg" );
		$caseCustomer = get_field( "customer" );
		$caseTitle = get_field( "title" );
		$caseText = get_field( "text" );
		$caseColor = get_field( "caseColor" );
	?>

	<div style="background-color:<?php echo $caseColor ?>">
		<img src="<?php echo $casePresentationimg['url'] ?>">
		<h3><?php echo $caseCustomer ?></h3>
		<h1><?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
		<div class="presentationText"><?php the_content(); ?></div>
		<a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>">Läs mer här</a>
		<button> se alla casen </button>
	</div><!-- .entry-content -->
