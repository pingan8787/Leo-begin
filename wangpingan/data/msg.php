<?php
    header('Content-Type:application/json;charset=UTF-8');
    $uname = $_REQUEST['uname'];
    $upwd = $_REQUEST['upwd'];
    $conn = mysqli_connect('w.rdc.sae.sina.com.cn','x54l40z5m4','3hli2ml3yx4j5xkj1jmklxw0lwyz0x4kw01wizi5','app_wangpingan',3307);

    $sql = "SET NAMES UTF8";
    mysqli_query($conn , $sql);

    $sql = "SELECT * FROM pro_user WHERE uname = '$uname' AND upwd = '$upwd'";
    $result = mysqli_query($conn,$sql);

    $output = ['code'=>0 , 'msg'=>null];
    if($result === false){
        $output['code'] = 1001;
        $output['msg'] = 'SQL语句错误';
    }else{
        $row = mysqli_fetch_assoc($result);
        if($row === null){
            $output['code'] = 1002;
            $output['msg'] = '用户名或密码错误';
        }else{
            $output['code'] = 1000;
            $output['msg'] = '管理员登录成功';
        }
    }

    echo json_encode($output);
?>