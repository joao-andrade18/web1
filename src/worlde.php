<?php
  require "authenticate.php"
?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Wordle</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css" />
  <!--Autores João e Thiago -->
</head>
<body>
  
<h1>Wordle Bem Vindo 
  <?php
    if ($login) {
      echo ", $user_name!";
    }
    else {
      echo "!";
    }
  ?>
 </h1><br>  
<div id="scoreContainer">
        Sua pontuação : <span id="score">0</span>
    </div>
    <table id="wordleTable"></table>
    <button id="btnn" onclick="window.location.href='../index.php';">Retornar</button>
    <div id="controlButtons">
        <button onclick="checkResponse()"  id="check">Verificar</button>
        <button onclick="backspace(false)" id="delete">Apagar</button>
    </div>

    <div id="keyboardLayout">
        <div id="keyboardLayoutRow1" class="keyboardKeys">

        </div>
        <div id="keyboardLayoutRow2" class="keyboardKeys">

        </div>
        <div id="keyboardLayoutRow3" class="keyboardKeys">

        </div>
    </div>

</body>
<script src="./script.js"></script>
</html>
