<?php 
$name = $_POST['name'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$service = $_POST['service'];
$message = $_POST['message'];
$to       = 'parimala@willtoptechnology.com';
$subject  = $service.'service request';
$message  = 'Hi, <br/> name:'.$name.'<br/>email:'.$email.'<br/>mobile:'.$mobile.'<br/>service:'.$service.'<br/>query:'.$message.'';
$headers  = 'From: info@willtoptechnology.com' . "\r\n" .
            'MIME-Version: 1.0' . "\r\n" .
            'Content-type: text/html; charset=utf-8';
if(mail($to, $subject, $message, $headers))
    echo "Email sent";
else
    echo "Email sending failed";
?>