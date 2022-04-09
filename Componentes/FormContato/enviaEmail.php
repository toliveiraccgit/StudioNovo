<?php
//1 – Definimos Para quem vai ser enviado o email
$para = "oliveiradiogo50@gmail.com";
//2 - resgatar o nome digitado no formulário e  grava na variavel $nome
$nome = $_POST['nome'];
// 3 - resgatar o assunto digitado no formulário e  grava na variavel
//$assunto

$empresa = $_POST['empresa'];
$email = $_POST['email'];
$mensagem = $_POST['mensagem'];
 //4 – Agora definimos a  mensagem que vai ser enviado no e-mail
$mensagem = "<strong>Nome:  </strong>".$nome;
$mensagem = "<strong>Nome Empresa:  </strong>".$empresa;
$mensagem = "<strong>E-Mail:  </strong>".$email;
$mensagem .= "<br>  <strong>Mensagem: </strong>"
.$_POST['mensagem'];

//5 – agora inserimos as codificações corretas e  tudo mais.
$headers =  "Content-Type:text/html; charset=UTF-8\n";
$headers .= "From:  https://toliveiraccgit.github.io/StudioNovo/<$email>\n";
//Vai ser //mostrado que  o email partiu deste email e seguido do nome
$headers .= "X-Sender:  <$email>\n";
//email do servidor //que enviou
$headers .= "X-Mailer: PHP  v".phpversion()."\n";
$headers .= "X-IP:  ".$_SERVER['REMOTE_ADDR']."\n";
$headers .= "Return-Path:  <$email>\n";
//caso a msg //seja respondida vai para  este email.
$headers .= "MIME-Version: 1.0\n";

mail($para, $assunto, $mensagem, $headers);  //função que faz o envio do email.
?>



