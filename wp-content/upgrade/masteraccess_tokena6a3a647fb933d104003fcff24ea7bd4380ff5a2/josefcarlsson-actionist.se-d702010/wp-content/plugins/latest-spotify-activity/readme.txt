=== Latest Spotify Activity ===
Contributors: justindocanto
Donate link: http://www.justindocanto.com/donate
Tags: widget, spotify, scrobbling, last.fm, latest, activity, play, time, ago
Requires at least: 3.0
Tested up to: 3.3
Stable tag: 0.1.2

A simple widget that displays your Spotify activity on your site. Powered by Spotify's built-in 'Last.fm Scrobble' functionality.

== Description ==

A simple widget that displays your Spotify activity on your site. Powered by Spotify's built-in 'Last.fm Scrobble' functionality.
=   =
Once setup, the songs you play on your Spotify app are instantly viewable on your site for your users to see! Each line displays the song's artist, song title & how long it's been since you started listening to it. If a song is still playing it will display "Currently Playing" instead of displaying the time since it was played.
&nbsp;
= Easy to Setup =
This plugin requires no extra software to be installed on the device you're playing music from. Once you activate it on WordPress and enter your Last.fm username, anything you play will be displayed via the widget.
&nbsp;
= It's Lightweight! =
Although this plugin is ~5kb in size, only ~2kb is used on the front-end to display your recent activity. The remaining code is used to register the plugin & create/process the widget options. Translation? This is a very small script and won't even dent your load time.
&nbsp;
= This plugin uses Spotify's 'Last.fm Scrobbling' =
Because Spotify does not currently have an API to see your latest activity, this plugin uses Spotify's "Last.fm Scrobbling" feature as a workaround. This means a Last.fm account is required for it to work. If you don't have a Last.fm account, have no fear, as creating one takes approx. 15 seconds and it's free!
&nbsp;
= Demo =
See a demo of what the widget look's like to users, [here](http://www.justindocanto.com/blog/using-the-golden-ratio-in-website-typography) or on the 'Screenshots' tab. See what the widget's settings look like, on the 'Screenshots' tab as well.

= Instructions =
1. If you don't have one already, [Sign-up](http://www.last.fm/join) for a Last.fm account.
2. In your Spotify app's [preferences](spotify:config), enable last.fm scrobbling & enter your last.fm login info
3. In your WordPress admin area, under "Appearance" > "Widgets" area, drag & drop the "Latest Spotify Activity" widget to the desired sidebar location
4. In the "Lastest Spotify Activity" widget settings, enter your last.fm user name and choose how many songs to display. Don't forget to press save!
5. You're done! Get back to listening to music!

= Support =
Questions? Bugs? Suggestions? E-mail support@justindocanto.com or tweet [@justindocanto](http://www.twitter.com/justindocanto) and I'll get back to you as soon as possible.

== Installation ==

1. Install or Upload the plugin via the WordPress Admin 'Plugins' administration area. Don't forget to activate the plugin!
2. The widget should now be available for use via 'Appearance' &rarr; 'Widgets'

== Frequently Asked Questions ==

= Can I style the widget output? =
Absolutely! The widget area will have an id of "latest-spotify-activity". You can style the inner html by adding styles specific to the ID like '#latest-spotify-activity h3', '#latest-spotify-activity p' & '#latest-spotify-activity abbr'. This plugin will inherit your previously existing widget styling if you don't specify any specific to the widget.

= Does it auto-scroll line in facebook? =
No. There is no javascript called or integrated with this plugin whatsoever, in order to keep resource usage as low as possible. This means it does not auto-populate new data like facebook does. This widget is intended to simply allow somebody to view your latest activity at the time of opening your page/post. Each time you switch/open/reload pages, the widget shows your most recent Spotify activity.

= Will it display new song data even if my pages having caching turned on? =
This depends on how in-depth your caching is. If you're caching everything, even HTML, it's failing approx 1:10 times. No page caching = 100% success rate. I will work on a solution for people who are caching their html, in a future version.

Questions? Bugs? Suggestions? E-mail support@justindocanto.com or tweet [@justindocanto](http://www.twitter.com/justindocanto) and I'll get back to you as soon as possible.

== Screenshots ==

1. An example of what the plugin looks like. You can style it anyway you'd like!
2. This is what the settings look like within the widget.

== Changelog ==

= 0.1.2 =
* Added ability to enter your own "Display Title" incase you didn't want to use "Latest Spotify Activity".
* Re-wrote the plugin details with brand-new screenshots & FAQ's for the WordPress.org page
* Fixed bug where "Currently Playing" song would occasional display timestamp of "1 seconds ago"

= 0.1.1 =
* Skipped due to error

= 0.1 =
* Initial Release
* Powered by Last.fm scrobbling
* Allows input of last.fm username and number of items to display
* Outputs each song title and "time ago" 

== Upgrade Notice ==

= 0.1.2 =
Added option to enter your own display title, which replaces "Latest Spotify Activity" + Fixed a bug where "Currently Playing" was not always displayed correctly.
