<?php
/**
 * The template used for displaying page content
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */
?>

<?php $date = get_the_date();
$month = cleanUpDate('month', substr($date, 5, 2));
$day = cleanUpDate('day', substr($date, 8, 2));

?>
<article id="post-<?php the_ID(); ?>" data-date="<?php print $day . " " . $month; ?>" <?php post_class(); ?>>
		<?php the_title( '<h3 class="entry-title">', '</h3>' ); ?>
		<div class="presentationText"><?php the_content(); ?></div>
</article><!-- #post-## -->
