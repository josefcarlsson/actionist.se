<?php
/*
Template Name: Index template

 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages and that other
 * 'pages' on your WordPress site will use a different template.
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */
 
get_header(); ?>
<?php 
	/*variables*/
	$presentationTopHeader = get_field('presentationTopHeader');
	$presentationBigHeader = get_field('presentationBigHeader');
	$presentationText = get_field('presentationText');
	$presentationButton = get_field('presentationButton');

?>

<!DOCTYPE html>

<!------------------------------- presentation ------------------------------>

<script>
	var quats = []
	window.quats= quats
</script>
	
<?php if( have_rows('quats') ): 
	 while( have_rows('quats') ): the_row(); 
		 $quat= get_sub_field('quat');?>
		<script>
			var obj = {text: '<?php echo $quat ?>'}
			quats.push(obj);
			console.log(quats)
		</script>
	<?php endwhile;
endif; ?>


<section id="top" class="fullHeight">
	<video width="100%" height="100%" autoplay="" muted="" id="video" loop="">
		<source src="<?php echo get_template_directory_uri(); ?>/images/movie.mp4" type="video/mp4">
		<source src="<?php echo get_template_directory_uri(); ?>/images/movie.ogv" type="video/ogv">
		  Your browser does not support the video tag.
	</video>
	<div class="verticalWrapper">
		<div class="withWrapper">
			<h3><span id="timeOfDay"></span></h3>
			<h1>Detta är den senaste</h1>
			<h1><span>Vi är:</span><span id="quats"></span></h1>
	</div>
	</div>
</section>

<!------------------------------- presentation ------------------------------>
<section id="presentation" class="presentation withWrapper">
	<h4><?php echo $presentationTopHeader ?></h4>
	<h1><?php echo $presentationBigHeader ?><br><span class="dott"></span></h1>
	<div><?php echo $presentationText ?></div>
	<button class="blue square"><?php echo $presentationButton ?></button>
</section>

<!------------------------------- case ------------------------------>

<section id="case">
	<?php query_posts( array ( 'category_name' => 'cases', 'posts_per_page' => -1 ) ); ?>
	<?php if (have_posts()) : ?><?php while (have_posts()) : the_post(); 
		 if(get_field('showOnStart') == 'Ja') : ?>
			<a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>">
				<?php get_template_part( 'content', 'page' );?>		
			</a>
		<?php endif;
			endwhile; 
	endif; ?>
</section>

<!------------------------------- news ------------------------------>	
<section id="news">
	<h3>Ha koll på</h3>
	<h1>Livet på Actionsit</h1>
	<?php query_posts( array ( 'category_name' => 'news', 'posts_per_page' => -1 ) ); ?>
		<?php if (have_posts()) : ?><?php while (have_posts()) : the_post(); 	?>	
				<a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>">
					<?php get_template_part( 'content', 'usp' );?>		
				</a>
				<?php endwhile; ?>
	<?php endif; ?>
</section>

<!------------------------------- uspar ------------------------------>
<section id="uspar" class="group section">
	<div class="uspNewsWrapper col span_4_of_12">
		<?php query_posts( array ( 'category_name' => 'news', 'posts_per_page' => -1 ) ); ?>
			<?php if (have_posts()) : 
				 while (have_posts()) : the_post(); 	?>	
				<?php if(get_field('showOnStart') != 'Ja') : ?>
					<a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>">
						<?php get_template_part( 'content', 'usp' );?>		
					</a>
				<?php else : ?>
			<?php endif; ?>
		<?php endwhile; ?>
		<?php endif; ?>
	</div>
	
	<div class="span_4_of_12 col instagram" id="instafeed">
	</div>
	
	<div class="span_4_of_12 col spotify">
		<h2>Spotify</h2>
		<?php 
			$username = 'femhundratolv';
			$scrobbler_url = "http://ws.audioscrobbler.com/2.0/user/" . $username . "/recenttracks";
			
			if ($scrobbler_xml = file_get_contents($scrobbler_url)) {
			       $scrobbler_data = simplexml_load_string($scrobbler_xml);        
			       $i=0;
			       echo '<ul>';
			       foreach ($scrobbler_data->track as $track) {
			          $string = '<li>';
			          if($track->image[3]){
			              $string .= '<div class="cover"><img width="300" height="300" class="cover" src="' . $track->image[3] . '" /></div>';
			              }
			          else{
			          $string .= '<div class="cover"><img width="300" height="300" class="cover" src="fdsfds" /></div>';
			          }
			               $string .= '<p><span class="title">' . $track->artist . '</span><br />' . $track->name . '</p>';
			               $string .= '<p>Played: ' . $track->date . '</p>';
			               $string .= '</li>';
			               echo $string;
			               $i++;
			if($i==1) break;
			       }
			       echo '</ul>';
			}
		?>
	</div>
</section>

<section id="clients">
	fdsa
	<?php if( have_rows('clientsLogos') ): 
	 while( have_rows('clientsLogos') ): the_row(); 
		 $logo= get_sub_field('logo');?>
		 	<div class="span_3_of_12 col logo">
			 	<img src="<?php echo $logo ?>">
		 	</div>
		<?php endwhile;
	endif; ?>		
</section>

