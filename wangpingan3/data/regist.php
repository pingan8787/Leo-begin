<?php
    header('Content-Type:application/json;charset=UTF-8');
    $zname = $_REQUEST['zname'];
    $zpwd = $_REQUEST['zpwd'];
  $conn = mysqli_connect('w.rdc.sae.sina.com.cn','kmn14wmw0n','zkw2jhz3x50454jh4j4wj4232k3jz2343mxxwmw0','app_wangpingan3',3307);

    $sql = "SET NAMES UTF8";
    mysqli_query($conn , $sql);
    $output=[];
    $sql = "SELECT * FROM himu_user WHERE uname = '$zname'";
    $result = mysqli_query($conn,$sql);

    $output = ['code'=>0 , 'msg'=>null , 'cont'=>null];

    if($row=mysqli_fetch_assoc($result)!=null){
        $output['code'] = 1001;
        $output['msg'] = '账号存在';
        $output['cont'] = '账号存在,注册失败，请重新输入';
    }else{
        $output['code'] = 1002;
        $output['msg'] = '账号可用';
        $output['cont'] = '账号可用,注册成功,请返回登录';
        $sql = "INSERT INTO himu_user VALUES (NULL,'$zname','$zpwd');";
        $result = mysqli_query($conn,$sql);
    }
    echo json_encode($output);
?>