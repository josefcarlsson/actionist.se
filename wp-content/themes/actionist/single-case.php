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
<script>
	var videos= []
</script>
<main id="main" class="site-main" role="main">
	
		<?php
		// Start the loop.
		while ( have_posts() ) : the_post();?>

	<div class="caseContent group section">
	
	<div class="col span_12_of_12">
		
		<?php if( $video ): ?>
			</div>
			
									

			<div id="topvideo" class="topArea"></div>
		<?php else: ?>
			<img src="<?php echo $casePresentationimg['url']?>"class="topArea">
		<?php endif; ?>
	</div>
	<div class="col span_6_of_12">
			<h3><?php echo $caseCustomer ?></h3>
			<h1><?php the_title( '<h1 class="entry-title">- ', '</h1>' ); ?></h1>
			<div><?php the_content(); ?></div>
	</div>
	<div class="col span_6_of_12">
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
		<?php 
			endwhile;
		?>
	<?php if( have_rows('sectionWrapper') ):
		$numberSections	
		?>
		<?php while( have_rows('sectionWrapper') ): the_row();
				$numberSections = $numberSections + 1;

				if( have_rows('wrapper') ):
				$count;
				$elem ?>
					<div class="group section">
					<?php while( have_rows('wrapper') ): the_row();
							$count = $count +1;
							$text = get_sub_field('text');
							$elem = $elem +1;
							
							?>
							<div class="<?php echo $numberSections ?>content col" id="<?php echo $elem ?>">
								<?php echo $text ?>
							</div>
								<script type="text/javascript">
									
								var html = document.getElementById("<?php echo $elem ?>").innerHTML
								var content = $('#'+<?php echo $elem ?> +' p').text()
								if(content.length > 5 && content.length  < 30){
									var obj = {element: "<?php echo $elem ?>", id:"'"+content+"'" };
									videos.push(obj);
								    }
								</script>
									
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
<script>
	console.log(videos)
	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	var player<?php echo $elem ?>;
	var elem = '<?php echo $elem ?>'
	
	function onYouTubeIframeAPIReady() {
		$.each(videos, function( key, video ) {
		  alert( video.element );
		  alert( video.id );
		})
									  	player7 = new YT.Player('7', {
									  	height: '390',
									  	width: '640',
									  	videoId: 'WER9wIxjdaE',
									  		});
									  	player8 = new YT.Player('8', {
									  	height: '390',
									  	width: '640',
									  	videoId: 'WER9wIxjdaE',
									  		});
									  	player9 = new YT.Player('9', {
									  	height: '390',
									  	width: '640',
									  	videoId: '<?php echo $video ?>',
									  		});
										}
						
	function onPlayerReady(event) {
			event.target.playVideo();
			}
						
	 var done = false;
	function onPlayerStateChange(event) {
		if (event.data == YT.PlayerState.PLAYING && !done) {
			setTimeout(stopVideo, 6000);
			done = true;
			}
		}
	function stopVideo() {
			player.stopVideo();
			}
</script>
		</main><!-- .site-main -->
<?php get_footer(); ?>
