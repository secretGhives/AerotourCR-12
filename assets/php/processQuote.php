<?php
 $to = "ventas@aerotourcr.com";
 $name = $_REQUEST['name'];
 $from = $_REQUEST['email'];
 $phone = $_REQUEST['phone'];
 $pax = $_REQUEST['pax'];
 $subject = "AEROTOUR! Quote Request form";
 $msg = $_REQUEST['body'];
 $body = "name: $name\ntel: $phone\npax: $pax\nemail: $from \n\nSays: $msg";
 if (mail($to, $subject, $body)) {
   echo("Message successfully sent!");
  } else {
   echo("Message delivery failed...");
  }
 ?>