<?php
  require "authenticate.php";
?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>[WEB 1] Exemplo Sistema de Login</title>
</head>
<body>
<h1>Bem-vindo
  <?php
    if ($login) {
      echo ", $user_name!";
    }
    else {
      echo "!";
    }
  ?>
</h1>

<p>
  Escolha uma das opções:
</p>
<ul>
  <?php if ($login): ?>
    <li><a href="logout.php">Logout</a></li>
  <?php else: ?>
    <li><a href="index.php">Login</a></li>
    <li><a href="index-cadastro.php">Registrar-se</a></li>
  <?php endif; ?>
</ul>
</p>
</body>
</html>