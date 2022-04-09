<?php

$nome = $_POST['nome']; // o $_POST usa o name pra pegar os dados
$empresa = $_POST['empresa'];
$email = $_POST['email'];
$mensagem = $_POST['mensagem'];

$to = "oliveiradiogo50@gmail.com";
$subject = "Formulário Contato Novos Negócios";
$msg = "Nome: $nome\n" .
"Empresa: $empresa\n" . // O \n pula uma linha e o . conecta os pedaços
"Mensagem: $mensagem\n" .
"Enviado por: $email"; 
// aqui você pode incluir os campos que quiser
mail($to, $subject, $msg);

echo "Obrigado por enviar seu email"; // esta será a mensagem na página de saída, depois do e-mail ser enviado, mas vc pode personalizar...

?>