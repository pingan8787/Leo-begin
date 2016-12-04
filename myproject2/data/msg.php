<?php
    header('Content-Type:application/json;chartset=UTF-8');
    $Yname = $_REQUEST['Yname'];
    $Yphone = $_REQUEST['Yphone'];
    $Ydate = $_REQUEST['Ydate'];
    $conn = mysqli_connect('127.0.0.1','root','','lithe',3306);
    $sql = "SET NAMES UTF8";
    mysqli_query($conn,$sql);

    $sql = "INSERT INTO lithe_msg VALUES(null,'$Yname','$Yphone','$Ydate')";
    $result = mysqli_query($conn,$sql);
?>