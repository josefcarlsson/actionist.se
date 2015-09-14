<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the "site-content" div and all content after.
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */
?>
<?php 
	/*variables*/
	$mail = get_field('mail');
	$phone = get_field('phone');
	$postadress = get_field('postadress');
	$besoksadress = get_field('besoksadress');
?>
	<footer class="site-footer group" role="contentinfo">
		<div class="col span_3_of_12">
			<h4>Hör av dig till oss,</h4>
			<a href="mailto:<?php echo $mail ?>?Subject=Hejsan" target="_top"><?php echo $mail ?></a>
			<p><?php echo $phone ?></p>
		</div>
		<div class="col span_3_of_12">
			<h4>Postadress</h4>
			<p><?php echo $postadress ?></p>
		</div>
		<div class="col span_3_of_12">
			<h4>Besöksadress</h4>
			<p><?php echo $besoksadress ?></p>
		</div>
		<div class="col span_3_of_12">
			<ul class="social">
				<li class="linkedin"><a href="#"></a></li>
				<li class="instagram"><a href="#"></a></li>
			</ul>
		</div>
	</footer><!-- .site-footer -->

</div><!-- .site -->

<?php wp_footer(); ?>

</body>
</html>
