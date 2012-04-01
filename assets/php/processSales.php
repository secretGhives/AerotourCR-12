<?php
 $to = "ventas@aerotourcr.com";
 $name = $_REQUEST['name'];
 $from = $_REQUEST['email'];
 $subject = "AEROTOUR! Sales form";
 $msg = $_REQUEST['body'];
 $body = "name: $name\nemail: $from \n\nSays: $msg";
 if (mail($to, $subject, $body)) {
   echo("Message successfully sent!");
  } else {
   echo("Message delivery failed...");
  }
 ?>