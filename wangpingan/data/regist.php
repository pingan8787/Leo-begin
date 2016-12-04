<?php
    header('Content-Type:application/json;charset=UTF-8');
    $zname = $_REQUEST['zname'];
    $zpwd = $_REQUEST['zpwd'];
    $conn = mysqli_connect('w.rdc.sae.sina.com.cn','x54l40z5m4','3hli2ml3yx4j5xkj1jmklxw0lwyz0x4kw01wizi5','app_wangpingan',3307);

    $sql = "SET NAMES UTF8";
    mysqli_query($conn , $sql);
    $output=[];
    $sql = "SELECT * FROM pro_user WHERE uname = '$zname'";
    $result = mysqli_query($conn,$sql);

    $output = ['code'=>0 , 'msg'=>null , 'cont'=>null];

    if($row=mysqli_fetch_assoc($result)!=null){
        $output['code'] = 1001;
        $output['msg'] = '账号存在';
        $output['cont'] = '注册失败，重新输入';
    }else{
        $output['code'] = 1002;
        $output['msg'] = '账号可用';
        $output['cont'] = '注册成功,返回登录';
        $sql = "INSERT INTO pro_user VALUES (NULL,'$zname','$zpwd');";
        $result = mysqli_query($conn,$sql);
    }
    echo json_encode($output);
?>