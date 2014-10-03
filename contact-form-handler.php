<?php
$errors = '';
$myemail = 'j@johndevlin.me'; //<----- Your email address here.

$contactname = $_POST['contact-form-name'];
$contactemail = $_POST['contact-form-email'];
$contactmessage = $_POST['contact-form-message'];


if( empty($errors))
{
$to = $myemail;
$email_subject = "Contact form submission from $contactname";
$email_body = "You have received a new message the johndevlin.me contact form. ".
"Here is the message:\n

Name: $contactname \n
Email address: $contactemail \n

Here is their message: \n $contactmessage

";
$headers = "From: $myemail";
$headers .= "Reply-To: $contactemail";

mail($to,$email_subject,$email_body,$headers);

//redirect to the 'thank you' page
header('Location: /thanks-for-your-message/');
}
?>