<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
	<meta name="viewport" content="width=device-width,user-scalable=no">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<link rel="icon" type="image/png" href="<?php echo get_template_directory_uri(); ?>/images/fav-icon.png" sizes="32x32">
	<script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/jquery.fitvids.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/masonry.pkgd.min.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/hammer.min.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/jquery.hammer.js"></script>
	<link href='http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Cardo:400,400italic,700' rel='stylesheet' type='text/css'>
	<script src="<?php echo get_template_directory_uri(); ?>/js/instafeed.min.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/rangeslider.min.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/js.js"></script>
	<script src="http://www.youtube.com/player_api?enablejsapi=1&version=3"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script>
		<meta name="description" content='Actionist är en online action marketing-byrå som skapar taktiska aktiviteter med mätbara resultat'>
	<meta property="og:description" content='Actionist är en online action marketing-byrå som skapar taktiska aktiviteter med mätbara resultat'>
	<meta property="og:title" content="Välkommen till Actionist">
	<meta property="og:url" content="http://www.actionist.se/">
	<meta property="og:type" content="website">
	<meta property="og:image" content="http://www.actionist.se/actionist_share.jpg">
	<!--[if lt IE 9]>
	<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/html5.js"></script>
	<![endif]-->
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<!------------------------------- MENU ------------------------------>
<nav>
	<div class="navWrapper">
		<a href="<?php print get_home_url(); ?>" id="logo"><img src="<?php echo get_template_directory_uri(); ?>/images/actionistlogo.png" alt="actionist"></a>
		<button class="hamburger">
			<div></div>
			<div></div>
			<div></div>
		</button>
		<div class="menus">
			<button class="close">
				<div></div>
				<div></div>
				<div></div>
			</button>
			<ul class="mainnav">
				<?php wp_nav_menu(); ?>
			</ul>
	
			<ul class="social">
				<li class="linkedin mobileVisible"><a href="<?php the_field('linkedinlink', 2); ?>" target="_blank"></a></li>
				<li class="instagram mobileVisible"><a href="<?php the_field('instagramlink', 2); ?>" target="_blank"></a></li>
			</ul>
		</div>
	</div>
</nav>