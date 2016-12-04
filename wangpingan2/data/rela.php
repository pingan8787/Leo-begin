<?php
  header('Content-Type:application/json;chartset=UTF-8');
  $conn = mysqli_connect('w.rdc.sae.sina.com.cn','x54l40z5m4','3hli2ml3yx4j5xkj1jmklxw0lwyz0x4kw01wizi5','app_wangpingan',3307);
  $sql = "SET NAMES UTF8";
  mysqli_query($conn,$sql);
  $output=[];
  $sql = "SELECT * FROM m_user order by mtime DESC;";
  $result = mysqli_query($conn,$sql);
  while(($row = mysqli_fetch_assoc($result))!=null){
    $output[]=$row;
  };
  echo json_encode($output);
?>