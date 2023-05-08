

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <h1>Imagini din folder:</h1>
    <div id="imagesDiv">
        {foreach $files as $file}
          {if $file|@file_exists:$asset/$file}
            {if $file|@strtolower|@pathinfo:"PATHINFO_EXTENSION"|@in_array:['jpg', 'jpeg', 'png', 'gif']}
              <img src="{$asset}/{$file}">
            {/if}
          {/if}
        {/foreach}
        </div>

    <script>
       // funcția care face cererea AJAX și afișează rezultatul în div
	   function getImages() {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var images = this.responseText;
					console.log(images)
                    var imagesHTML = '';
					console.log(imagesHTML)
                    for (var i = 0; i < images.length; i++) {
                        imagesHTML += '<img src="assets/' + images[i] + '" alt="Imagine ' + (i+1) + '">';
                    }
                    document.getElementById("imagesDiv").innerHTML = imagesHTML;
                }
            };
            xmlhttp.open("GET", "get_new_images.php", true);
            xmlhttp.send();
        }

        // apelează funcția de afișare a imaginilor la încărcarea paginii
        window.onload = function() {
            getImages();
        }
    </script>

</html>