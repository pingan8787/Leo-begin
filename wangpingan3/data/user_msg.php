<?php
  header('Content-Type:application/json;chartset=UTF-8');
  $Yname = $_REQUEST['Yname'];
  $Yemail = $_REQUEST['Yemail'];
  $Mess = $_REQUEST['Mess'];
  $pubTime = time()*1000;

  $conn = mysqli_connect('w.rdc.sae.sina.com.cn','kmn14wmw0n','zkw2jhz3x50454jh4j4wj4232k3jz2343mxxwmw0','app_wangpingan3',3307);
  $sql = "SET NAMES UTF8";
  mysqli_query($conn,$sql);

  $sql = "INSERT INTO himu_msg VALUES(null,'$Yname','$Yemail','$Mess') ";
  $result = mysqli_query($conn,$sql);

?>