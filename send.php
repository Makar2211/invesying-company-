<?php
$fio = $_POST['fio'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$tel = htmlspecialchars($tel);
$fio = urldecode($fio);
$email = urldecode($email);
$tel = urldecode($tel);
$fio = trim($fio);
$email = trim($email);
$tel = trim($tel);
/* echo $fio;
echo "<br>";
echo $email;
echo "<br>";
echo $city; */
if (mail("makardovgopolji@gmail.com", "Заявка с сайта", "ФИО:".$fio." . E-mail: ".$email ,"From: makasha2004@gmail.com \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>