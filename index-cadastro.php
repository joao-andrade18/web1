<?php
require "server.php";

$error = false;
$success = false;
$name = $email = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["password"]) && isset($_POST["confirm-password"])) {

    $conn = connect_db();

    $name = mysqli_real_escape_string($conn,$_POST["name"]);
    $email = mysqli_real_escape_string($conn,$_POST["email"]);
    $password = mysqli_real_escape_string($conn,$_POST["password"]);
    $confirm_password = mysqli_real_escape_string($conn,$_POST["confirm-password"]);

    if ($password == $confirm_password) {
      $password = md5($password);

      $sql = "INSERT INTO $table_users
              (nome, email, senha) VALUES
              ('$name', '$email', '$password');";

      if(mysqli_query($conn, $sql)){
        $success = true;
      }
      else {
        $error_msg = mysqli_error($conn);
        $error = true;
      }
    }
    else {
      $error_msg = "Senha não confere com a confirmação.";
      $error = true;
    }
  }
  else {
    $error_msg = "Por favor, preencha todos os dados.";
    $error = true;
  }
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="style-cadastro.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">  
</head>
<body>
    <form action="index-cadastro.php" method="post">
        <div class="container">
            <h1>Cadastro</h1>
            <div id="msgError"></div>
            <div id="msgSuccess"></div>
                <div class="form-name">
                     <label for="name" id="label-name">Nome</label>
                     <input type="text" name="name" id="name" placeholder="Digite seu nome" value="<?php echo $name; ?>">
                 </div>
                <div class="form-email">
                    <label for="email" id="labell">Email</label>
                    <input type="text" name="email" id="email" placeholder="Digite seu e-mail" value="<?php echo $email; ?>">
                </div>
                <div class="form-password">
                    <label for="password " id="labelll">Senha</label>
                    <input type="password" name="password" id="password" placeholder="Digite sua senha" value="">
                </div>
                <div class="form-confirm">
                    <label for="confirm-password " id="label-confirm">Confirmar senha</label>
                    <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirma sua senha" value="">
                </div>
                <input type="submit" onclick="cadastrar()" value="Cadastrar" id="btn">

                <a href="index-login.php">Voltar</a>
        </div>
    </form>
   
</body>
<script src="script-cadastro.js"></script>
</html>
