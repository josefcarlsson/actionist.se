<?php
/*
Template Name: news overview template

 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages and that other
 * 'pages' on your WordPress site will use a different template.
 *
 * @package WordPress
 * @subpackage Twenty_Thirteen
 * @since Twenty Thirteen 1.0
 */
 
get_header(); ?>
<?php $date = $news['date'];
$month = cleanUpDate('month', substr($date, 5, 2));
$day = cleanUpDate('day', substr($date, 8, 2));
var_dump($news);
?>
<section class="group section news_section">
	<?php $newsArr = array();
		$newsCount = 0;?>
		<?php query_posts( array ( 'posts_per_page' => -1, 'orderby' => 'date', 'order' => 'desc' ) ); ?>
			<?php if (have_posts()) : ?><?php while (have_posts()) : the_post(); 	?>
				<?php 
				$newsArr[$newsCount] = array('date' => get_the_date(), 'heading' => get_the_title(), 'text' => get_the_excerpt(), 'permalink' => get_permalink(), 'id'=>get_the_id());
				$newsCount++?>
			<?php endwhile; ?>
		<?php endif;
		wp_reset_query();?>
		<?php
		$reversedArr = array_reverse($newsArr);
		foreach($reversedArr as $news):?>
		<?php $date = $news['date'];
			$month = cleanUpDate('month', substr($date, 5, 2));
			$day = cleanUpDate('day', substr($date, 8, 2));
			?>
			
				<?php get_template_part( 'content', 'newsoverview' );?>	

		<?php endforeach; ?>
		</div>


</section>
<?php
get_footer();
?>
