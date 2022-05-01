<?php
require_once "credentials.php";

// Cria a conexão
$conn = mysqli_connect($servername, $user, $password, $dbname);
// Verificar a conexão
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// SQL para criar a tabela
$sql = "CREATE TABLE register (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(30) NOT NULL,
  email VARCHAR(50) NOT NULL,
  senha VARCHAR(128) NOT NULL
)";

if (mysqli_query($conn, $sql)) {
    echo "Table register created successfully";
} else {
    echo "Error creating table: " . mysqli_error($conn);
}

mysqli_close($conn);
?>
