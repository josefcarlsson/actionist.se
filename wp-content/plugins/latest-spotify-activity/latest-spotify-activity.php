<?php
/*
Plugin Name: Latest Spotify Activity
Plugin URI: http://www.justindocanto.com/portfolio/latest-spotify-activity-wordpress-plugin
Description: A simple widget that allows you to display your latest Spotify activity on your WordPress site. Uses Spotify's 'Last.fm Scrobble' which is built-in to all the app versions (desktop, tablet, laptop & phone).
Version: 0.1.2
Author: Justin DoCanto
Author URI: http://www.justindocanto.com
License: Use it. Modify it. Share it. Enjoy it.
*/

add_action("widgets_init", array('Spotify_Activity', 'register'));
register_activation_hook( __FILE__, array('Spotify_Activity', 'activate'));
register_deactivation_hook( __FILE__, array('Spotify_Activity', 'deactivate'));
class Spotify_Activity {
	function activate(){
		if (!get_option('Spotify_Activity')){
			$data = array(
				'lastfm_username' => '',
				'widget_title' => 'Latest Spotify Activity',
				'display_amount' => 3,
				'plugin_version'  => '0.1.2'
			);
	  		add_option('Spotify_Activity' , $data);
		} 
		else {
			$data = get_option('Spotify_Activity');
			$data['plugin_version'] = '0.1.2';
			$data['widget_title'] = 'Latest Spotify Activity';
	  		update_option('Spotify_Activity' , $data);
		}
	}
	function deactivate(){
		// delete_option('Spotify_Activity');
	}
  	function control(){
		$data = get_option('Spotify_Activity'); ?>
		<style type="text/css">
			p.spotify_activity {
				font-size:10px;
			}
			p.spotify_activity label {
				width:70px;margin:0;padding:0;display:inline-block;
			}
		</style>
		<p class="spotify_activity">Need instructions? Not sure why you need a last.fm username? <a href="http://wordpress.org/extend/plugins/latest-spotify-activity" target="_blank">Click here</a></p>
	  	<p class="spotify_activity">
	  		<label>Display Title</label>
	  		<input name="widget_title" type="text" value="<?php echo $data['widget_title']; ?>" />
	  	</p>
	  	<p class="spotify_activity">
	  		<label>Last.fm Username</label>
	  		<input name="lastfm_username" type="text" value="<?php echo $data['lastfm_username']; ?>" />
	  	</p>
	  	<p class="spotify_activity">
	  		<label>Songs to Display</label>
	  		<select name="display_amount" style="width:35px;">
	  			<option value="1" <?php if($data['display_amount'] == 1) { echo "selected"; } ?>>1</option>
	  			<option value="2" <?php if($data['display_amount'] == 2) { echo "selected"; } ?>>2</option>
	  			<option value="3" <?php if($data['display_amount'] == 3) { echo "selected"; } ?>>3</option>
	  			<option value="4" <?php if($data['display_amount'] == 4) { echo "selected"; } ?>>4</option>
	  			<option value="5" <?php if($data['display_amount'] == 5) { echo "selected"; } ?>>5</option>
	  		</select>
	  	</p>
		<?php
	   	if (isset($_POST['lastfm_username'])){
	   		$data['widget_title'] = attribute_escape($_POST['widget_title']);
			$data['lastfm_username'] = attribute_escape($_POST['lastfm_username']);
			$data['display_amount'] = attribute_escape($_POST['display_amount']);
			update_option('Spotify_Activity', $data);
	  	}
	}
	function widget($args){
		$spotify_activity = get_option('Spotify_Activity');
		if(empty($spotify_activity['widget_title'])) { $spotify_activity['widget_title'] = "Latest Spotify Activity"; }
		echo $args['before_widget'];
		echo $args['before_title'] . $spotify_activity['widget_title'] . $args['after_title'];
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, "ws.audioscrobbler.com/1.0/user/".$spotify_activity['lastfm_username']."/recenttracks.rss");
		curl_setopt($ch, CURLOPT_HEADER, 0);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt ($ch, CURLOPT_USERAGENT, $useragent);
		$rss = curl_exec($ch);
		curl_close($ch);
		$rss = simplexml_load_string($rss);	
		$cnt = $spotify_activity['display_amount'];
		function spotify_ago($ptime) {
   			$etime = time() - $ptime;
   			if( $etime < 1 ) {
				return 'Currently Playing';
			}
			$a = array(	12 * 30 * 24 * 60 * 60	=>  'year',
						30 * 24 * 60 * 60		=>  'month',
						24 * 60 * 60			=>  'day',
						60 * 60				=>  'hour',
						60					=>  'minute',
						1					=>  'second'
			);
			foreach( $a as $secs => $str ) {
				$d = $etime / $secs;
				if( $d >= 1 ) {
					$r = round( $d );
					if($r < 3 && $str == "second") {
						return 'Currently Playing';
					}
					else {
						return $r . ' ' . $str . ( $r > 1 ? 's' : '' ) . ' ago';
					}
				}
			}
		}
		for($i=0; $i<$cnt; $i++) {
			var_dump( $rss->channel->item[$i]);
			$url = $rss->channel->item[$i]->link;
			$img = $rss->channel->item[$i]->link;
			$title = $rss->channel->item[$i]->title;
			$pubDate = $rss->channel->item[$i]->pubDate;
			$pubDate_time = strtotime($pubDate);
			echo "<p>".$title." <abbr title='".$pubDate."'>".spotify_ago($pubDate_time)."</abbr></p><div class='test'>".$img."/+images</div>";
		}
		echo $args['after_widget'];
	}
	function register(){
		register_sidebar_widget('Latest Spotify Activity', array('Spotify_Activity', 'widget'));
		register_widget_control('Latest Spotify Activity', array('Spotify_Activity', 'control'));
	}
} ?>