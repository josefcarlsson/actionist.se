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
<li class="case" style="background-color:<?php echo $caseColor ?>">
	<button class="left caseNavigation" style="background-color:<?php echo $caseColor ?>"><img src="<?php echo get_template_directory_uri(); ?>/images/arrow.png" alt="arrow"/></button>
	<button class="right caseNavigation" style="background-color:<?php echo $caseColor ?>"><img src="<?php echo get_template_directory_uri(); ?>/images/arrow.png" alt="arrow"/></button>
	<a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>">

	<div class="caseContent group section">
		<img src="<?php echo $casePresentationimg['url']?>" class="img">
		<h3><?php echo $caseCustomer ?></h3>
		<h1><?php the_title( '<h1 class="entry-title">- ', '</h1>' ); ?></h1>
		<div class="presentationText col span_4_of_12">
			<div><?php the_content(); ?></div>
			<a href="<?php the_permalink() ?>" class="readMore"rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>">Läs mer här</a></div>
			
			<?php while( have_rows('result') ): the_row(); ?>
			<div class="resultStat col span_2_of_12">
			<?php
				$number = get_sub_field('number');
				$img = get_sub_field('image');
				$text = get_sub_field('text');
				?>
				<img src="<?php echo $img['url'] ?>">
				<h3><?php echo $number ?></h3>
				<p><?php echo $text ?></p>
			</div>
			<?php endwhile;?>
		
		</div><!-- .entry-content -->
					</a>
				</li>