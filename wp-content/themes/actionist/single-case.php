<?php
/**
 * The template for displaying all single posts and attachments
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */

get_header();
		$casePresentationimg = get_field( "presentationimg" );
		$caseCustomer = get_field( "customer" );
		$caseTitle = get_field( "title" );
		$caseText = get_field( "text" );
		$caseColor = get_field( "caseColor" );
		$video = get_field( "video" );
		
?>
<script src="<?php echo get_template_directory_uri(); ?>/js/case.js"></script>
<main id="main" class="site-main case-detail" role="main">
	
		<?php
		// Start the loop.
		while ( have_posts() ) : the_post();?>

	<?php if( $video ):?>		
		<div id="topvideo" class="topArea">
								<?php
									if (strpos($video, '<video ') !== false) {
									   preg_match('#<video[^>]+>(.+?)</video>#ims', $video, $result);
									   print $result[0];
									}	
									elseif(strpos($video, '<img ') !== false) {
									   preg_match_all('!http://.+\.(?:jpe?g|png|gif)!Ui' ,$video, $result);
									   preg_match_all('/<img[^>]+>/i',$video, $resultFrame); ?>
									   <div class="image" style="background-image:url(<?php echo $result[0][0];?>)"><?php echo $resultFrame[0][0]; ?></div><?php
									}
									else
										echo $video
								?>
		<?php else: ?>
	<div class="col span_12_of_12">
			<img src="<?php echo $casePresentationimg['url']?>"class="topArea">
		<?php endif; ?>
	</div>
	
	<div class="caseContent group section">
		<div class="col span_6_of_12">
			<h3><?php echo $caseCustomer ?></h3>
			<?php the_title( '<h1 class="entry-title">- ', '</h1>' ); ?>
			<div><?php the_content(); ?></div>
		</div>
		<div class="col span_6_of_12">
			<div class="resultWrapper">
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
			</div>		
		</div>
		<?php 
			endwhile;
		?>
	</div>
	<?php if( have_rows('sectionWrapper') ):
		$numberSections	
		?>
		<?php while( have_rows('sectionWrapper') ): the_row();
				$numberSections = $numberSections + 1;

				if( have_rows('wrapper') ):
				$count; ?>
					<div class="group section caseDetail">
					<?php while( have_rows('wrapper') ): the_row();
							$count = $count +1;
							$text = get_sub_field('text');?>
							<div class="<?php echo $numberSections ?>content caseDetailContent col">
								<?php
									if (strpos($text, '<video ') !== false) {
									   preg_match('#<video[^>]+>(.+?)</video>#ims', $text, $result);
									   print $result[0];
									}	
									elseif(strpos($text, '<img ') !== false) {
									   preg_match_all('/<img[^>]+>/i',$text, $result); 
									   print $result[0][0];
									}
									else{
										print "<div class='text'>".$text."</div>";
									}
										?>
										
										
							</div>
																
					<?php endwhile; 
				?>
				<script>
				switch (<?php echo $count; ?>) {
					case 2:
						$('.'+<?php echo $numberSections?>+'content').addClass('span_6_of_12');
						break;
					case 3:
						$('.'+<?php echo $numberSections?>+'content').addClass('span_4_of_12');
						break;
					default:
						$('.'+<?php echo $numberSections?>+'content').addClass('span_12_of_12');
						break;
						}
						
					$( ".caseWrapper" ).each(function( index ) {
						console.log($(this).text())
						 if ($(this).find('img').length > 0) {
							    $(this).children().css({
								   visibility:'hidden'
							    })
							    $(this).find('img').css({
								    visibility: 'visible'
							    })
							}
						 if ($(this).find('.wp-video').length > 0) {
							    $(this).children().css({
								    visibility:'hidden'
							    })
							     $(this).find('img').css({
								    visibility: 'hidden'
							    })
							    $(this).find('.wp-video').css({
								    visibility: 'visible'
							    })
							}
					});
				
				</script>
				<?php
				 $count = 0;
				 ?>
					</div>
				<?php endif; //if( get_sub_field('items') ): 
				
				?>
				
		<?php endwhile;?>
		
	<?php endif; //if( get_sub_field('items') ): ?>
	</div>
	<div class="moreCaseHeader section"><h1>Fler case, kolla hit!</h1></div>
	<div class="group case_section caseDetailLoadMore section">
			<?php $loop = new WP_Query( array( 'post_type' => 'case', 'posts_per_page' => -1 ) ); ?>
		<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
			 <?php get_template_part( 'content', 'overview' );?>		
		<?php 
			endwhile;?>
		<?php wp_reset_query();?>
	</div>
	<button id="loadMoreCase" class="blue square">Ladda fler</button>	
	</main><!-- .site-main -->
<?php get_footer(); ?>
