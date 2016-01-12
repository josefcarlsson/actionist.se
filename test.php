<?php

$string = "<div class='img'><img src='bild.jpg' class='image' /></div><img src='bild2.jpg' class='image' /></div>";

if (strpos($string, '<img ') !== false) {
    preg_match_all('/<img[^>]+>/i',$string, $result); 
    var_dump($result);
} else{
	print "FAAAALSE";
}