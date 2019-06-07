<?php
  $emailfooter = $_POST['emailFooter'];
  if($emailfooter == ""){
    echo "unsuccessfully";
  }else{
    $recipient = "ovens290375@gmail.com";
    $message = "E-mail: $emailfooter";
    mail($recipient, "60Frames-Email-Adres", $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recipient");
    echo "successfully";
  }

?>
