SET NAMES UTF8;
DROP DATABASE IF EXISTS mypro;
CREATE DATABASE myPro CHARSET = UTF8;
USE mypro;
/*用户信息表*/
CREATE TABLE pro_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32),
    upwd VARCHAR(32)
);
INSERT INTO pro_user VALUES
(NULL,'leo','123456'),
(NULL,'robin','0123456');
/*首页轮播图图片*/
CREATE TABLE img_home(
    iid INT PRIMARY KEY AUTO_INCREMENT,
    iurl VARCHAR(64)
);
INSERT INTO img_home VALUES
(NULL,'images/slider/slide1.jpg'),
(NULL,'images/slider/slide2.jpg'),
(NULL,'images/slider/slide3.jpg');
/*portfolio的12张图片*/
CREATE TABLE img_port(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    purl VARCHAR(256),
    ptype INT
);
INSERT INTO img_port VALUES
(NULL,'1.jpg','1'),
(NULL,'2.jpg','2'),
(NULL,'3.jpg','1'),
(NULL,'4.jpg','2'),
(NULL,'5.jpg','4'),
(NULL,'6.jpg','3'),
(NULL,'7.jpg','2'),
(NULL,'8.jpg','4'),
(NULL,'9.jpg','3'),
(NULL,'10.jpg','1'),
(NULL,'11.jpg','4'),
(NULL,'12.jpg','1');

/*TEAM个人资料卡*/
CREATE TABLE team_card (
    tid INT PRIMARY KEY AUTO_INCREMENT,
    turl VARCHAR(256),
    tname VARCHAR(36),
    tdev VARCHAR(36),
    tintro VARCHAR(512)
);
INSERT INTO team_card VALUES
(NULL,'member1.jpg','William Hur','Sr. Web Developer','Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod'),
(NULL,'member2.jpg','Alekjandra Jony','Creative Designer','Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod'),
(NULL,'member3.jpg','Paul Johnson','Skilled Programmer','Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod'),
(NULL,'member4.jpg','John Richerds','Marketing Officer','Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod');

/*BLOG个人资料卡*/
CREATE TABLE blog_card (
    bid INT PRIMARY KEY AUTO_INCREMENT,
    burl VARCHAR(256),
    btitle VARCHAR(36),
    bname VARCHAR(36),
    bdata VARCHAR(36),
    bintro VARCHAR(512)
);
INSERT INTO blog_card VALUES
(NULL,'1.jpg','Lorem ipsum dolor sit amet','Posted By: John','Posted On: Apr 15 2014','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aspernatur consectetur eligendi molestias saepe tempora totam ullam veniam!'),
(NULL,'2.jpg','Lorem ipsum dolor sit amet','Posted By: John','Posted On: Apr 15 2014','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aspernatur consectetur eligendi molestias saepe tempora totam ullam veniam!'),
(NULL,'3.jpg','Lorem ipsum dolor sit amet','Posted By: John','Posted On: Apr 15 2014','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aspernatur consectetur eligendi molestias saepe tempora totam ullam veniam!'),
(NULL,'3.jpg','Lorem ipsum dolor sit amet','Posted By: John','Posted On: Apr 15 2014','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aspernatur consectetur eligendi molestias saepe tempora totam ullam veniam!'),
(NULL,'2.jpg','Lorem ipsum dolor sit amet','Posted By: John','Posted On: Apr 15 2014','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aspernatur consectetur eligendi molestias saepe tempora totam ullam veniam!'),
(NULL,'1.jpg','Lorem ipsum dolor sit amet','Posted By: John','Posted On: Apr 15 2014','Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aspernatur consectetur eligendi molestias saepe tempora totam ullam veniam!');

/*用户留言内容*/
CREATE TABLE msg_user(
    mid INT PRIMARY KEY AUTO_INCREMENT,
    Yname VARCHAR(64),
    Yemail VARCHAR(32),
    Mess VARCHAR(512)
);
INSERT INTO msg_user VALUES
(NULL,'Leo','leo@qq.com','用户留言测试'),
(NULL,'Mary','Mary@163.com','用户留言测试');