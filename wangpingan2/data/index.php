<?php
  header('Content-Type:application/json;chartset=UTF-8');
  $mname = $_REQUEST['mname'];
  $mrela = $_REQUEST['mrela'];
  $mmsg = $_REQUEST['mmsg'];
  $mtime = time()*1000;

  $conn = mysqli_connect('w.rdc.sae.sina.com.cn','x54l40z5m4','3hli2ml3yx4j5xkj1jmklxw0lwyz0x4kw01wizi5','app_wangpingan',3307);
  $sql = "SET NAMES UTF8";
  mysqli_query($conn,$sql);

  $sql = "INSERT INTO m_user VALUES(null,'$mname','$mrela','$mmsg','$mtime') ";
  $result = mysqli_query($conn,$sql);

?>