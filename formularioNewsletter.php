<?php
$mail = $_POST['email'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .="Mime-Version: 1.0 \r\n";
$header .="Content-Type: text/plain";

$mensaje = "Nuevo suscriptor de Newsletter! Su mail es: " . $mail . " \r\n";
$mensaje. = "Enviado el " .date('d/m/Y', time());

$para = 'matiasarce13@gmail.com';
$asunto = 'Nuevo suscriptor para Newsletter de Just We ';

mail($para, $asunto, utf8_decode($mensaje), $header);

header("Location:index.html");
?>
