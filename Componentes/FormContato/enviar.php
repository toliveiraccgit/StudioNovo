<?php

date_default_timezone_set('America/Sao_Paulo');
 
require_once('src/PHPMailer.php');
require_once('src/SMTP.php');
require_once('src/Exception.php');
 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

 
	$nome = !empty($_POST['nome']) ? $_POST['nome'] : 'Não informado';
	$email = $_POST['email'];
	$empresa = $_POST['empresa'];
	$assunto = 'Formulario de Contato';
	$mensagem = $_POST['mensagem'];
	$data = date('d/m/Y H:i:s');
 
	$mail = new PHPMailer();
	$mail->isSMTP();
	$mail->Host = 'smtp.gmail.com';
	$mail->SMTPAuth = true;
	$mail->Username = 'thiago@toliveira.cc';
	$mail->Password = 'diogo110702';
	$mail->Port = 587;
 
	$mail->setFrom('thiago@toliveira.cc');
	$mail->addAddress('thiago@toliveira.cc');
 
	$mail->isHTML(true);
	$mail->Subject = $assunto;
	$mail->Body = "Nome: {$nome}<br>
				   Empresa: {$empresa}<br>
				   Email: {$email}<br>
				   Mensagem: {$mensagem}<br>";

				   if($mail->send()) {
					echo 'Email enviado com sucesso.';
					} else {
						echo 'Email não enviado.';
					}
					