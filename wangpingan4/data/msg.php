<?php
    header('Content-Type:application/json;chartset=UTF-8');
    $Yname = $_REQUEST['Yname'];
    $Yphone = $_REQUEST['Yphone'];
    $Ydate = $_REQUEST['Ydate'];
    $conn = mysqli_connect('w.rdc.sae.sina.com.cn','kmn14wmw0n','zkw2jhz3x50454jh4j4wj4232k3jz2343mxxwmw0','app_wangpingan3',3307);
    $sql = "SET NAMES UTF8";
    mysqli_query($conn,$sql);

    $sql = "INSERT INTO lithe_msg VALUES(null,'$Yname','$Yphone','$Ydate')";
    $result = mysqli_query($conn,$sql);
?>