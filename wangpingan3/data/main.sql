SET NAMES UTF8;
DROP DATABASE IF EXISTS himu;
CREATE DATABASE himu CHARSET = UTF8;
USE himu;
/*用户信息表*/
CREATE TABLE himu_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32),
    upwd VARCHAR(32)
);
INSERT INTO himu_user VALUES
(NULL,'leo','123456'),
(NULL,'robin','0123456');

/*用户留言内容*/
CREATE TABLE himu_msg(
    mid INT PRIMARY KEY AUTO_INCREMENT,
    Yname VARCHAR(64),
    Yemail VARCHAR(32),
    Mess VARCHAR(512)
);
INSERT INTO himu_msg VALUES
(NULL,'Leo','leo@qq.com','用户留言测试'),
(NULL,'Mary','Mary@163.com','用户留言测试');