<?php
/**
 * The template used for displaying page content
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */
?>

<?php $date = $news['date'];
$month = cleanUpDate('month', substr($date, 5, 2));
$day = cleanUpDate('day', substr($date, 8, 2));
var_dump($news);
?>
<article id="post-<?php print $news['id']; ?>" data-date="<?php print $day . " " . $month; ?>">
	<h3 class="entry-title"><?php print $news['title']; ?></h3>
</article><!-- #post-## -->
