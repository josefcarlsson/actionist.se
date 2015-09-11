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
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/masonry.pkgd.min.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/hammer.min.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/jquery.hammer.js"></script>
	<link href='http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Cardo:400,400italic,700' rel='stylesheet' type='text/css'>
	<script src="<?php echo get_template_directory_uri(); ?>/js/instafeed.min.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/rangeslider.min.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/js/js.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script>
	<!--[if lt IE 9]>
	<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/html5.js"></script>
	<![endif]-->
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<!------------------------------- MENU ------------------------------>
<nav>
	<img src="<?php echo get_template_directory_uri(); ?>/images/actionist.png" alt="actionist">
	<ul class="mainnav">
				<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_class' => 'nav-menu', 'menu_id' => 'primary-menu' ) ); ?>
	</ul>

	<ul class="social">
		<li class="linkedin"><a href="#"></a></li>
		<li class="instagram"><a href="#"></a></li>
	</ul>
</nav>