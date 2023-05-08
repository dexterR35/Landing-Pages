<?php
$folder = 'assets';
$imagini = array();

if ($handle = opendir($folder)) {
    while (false !== ($entry = readdir($handle))) {
        if ($entry != "." && $entry != ".." && !is_dir($folder.'/'.$entry)) {
            $imagini[] = $entry;
        }
    }
    closedir($handle);
}

header('Content-Type: application/json');
echo json_encode($imagini);
error_log($imagini);
?>
