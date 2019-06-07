<?php
	$name = $_POST['feedback__name'];
	$email = $_POST['feedback__email'];
	$phone = $_POST['feedback__phone'];
	$message = $_POST['feedback__message'];
	if($name=="" & $email=="" & $phone== "" & $message=="")
	{
		echo "all-empty";
	}
	elseif($name=="")
	{
		echo "name";
	}
	elseif($email=="")
	{
		echo "email";
	}
	elseif($phone=="")
	{
		echo "phone";
	}
	elseif($message=="")
	{
		echo "message";
	}
	elseif(trim(strlen($name))<=3)
	{
		echo "none-empty+name-error";
	}
	elseif(trim(strlen($email))<=8)
	{
		echo "none-empty+email-error";
	}
	elseif(trim(strlen($phone))<=8)
	{
		echo "none-empty+phone-error";
	}
	elseif(trim(strlen($message))<=20)
	{
		echo "none-empty+message-error";
	}
	else
	{
		$recipient = "ovens290375@gmail.com";
		$message = "Name: $name, \n Phone: $phone, \n E-mail: $email , \n Message: $message";
		mail($recipient, "60Frames", $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recipient");
		echo "none-empty+none-error";
	}

?>
