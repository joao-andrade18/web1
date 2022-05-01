<?php
require_once "credentials.php";

// Cria a conexão
$conn = mysqli_connect($servername, $user, $password);
// Checka a conexão
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Cria o banco de dados
$sql = "CREATE DATABASE users";
if (mysqli_query($conn, $sql)) {
    echo "Database created successfully";
} else {
    echo "Error creating database: " . mysqli_error($conn);
}

mysqli_close($conn);
?>
