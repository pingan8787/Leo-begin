<?php
  header('Content-Type:application/json;chartset=UTF-8');
  $Yname = $_REQUEST['Yname'];
  $Yemail = $_REQUEST['Yemail'];
  $Mess = $_REQUEST['Mess'];
  $pubTime = time()*1000;

  $conn = mysqli_connect('w.rdc.sae.sina.com.cn','x54l40z5m4','3hli2ml3yx4j5xkj1jmklxw0lwyz0x4kw01wizi5','app_wangpingan',3307);
  $sql = "SET NAMES UTF8";
  mysqli_query($conn,$sql);

  $sql = "INSERT INTO msg_user VALUES(null,'$Yname','$Yemail','$Mess') ";
  $result = mysqli_query($conn,$sql);

?>