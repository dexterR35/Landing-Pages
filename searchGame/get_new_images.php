<?php
$dir = "assets/";
$images = glob($dir . "*.{jpg,jpeg,png,gif}", GLOB_BRACE);

foreach ($images as $image) {
    echo basename($image) . "\n";
}
?>