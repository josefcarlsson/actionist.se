<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */

get_header(); ?>

<section id="error" class="maxwidth preanimation">
	<div class="centercontent introtext">
		<span class="preheading underline">Vad hände?</span>
		<h1 class="heading">Oops! Sorry, något gick fel.</h1>
		<div class="intro"><p>På grund utav internets outgrundliga mystik har något nu blivit fel i maskineriet. Därför ber vi dig gå tillbaka till 
<a href="<?php get_site_url(); ?>">www.actionist.se</a> för att få hänga lite med oss igen.</p></div>
	</div>
</section>

<?php get_footer(); ?>
