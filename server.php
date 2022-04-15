<?php
require "credentials.php";

function connect_db(){
  global $servername, $user, $password, $dbname;
  $conn = mysqli_connect($servername, $user, $password, $dbname);

  if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
  }

  return($conn);
}

function disconnect_db($conn){
  mysqli_close($conn);
}

?>