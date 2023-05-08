<?php
if (isset($_GET['folder'])) {
	$folder = $_GET['folder'];
	$images = glob($folder . '/*.{jpg,jpeg,png,gif}', GLOB_BRACE);
	echo implode("\n", array_map('basename', $images));
}
?>