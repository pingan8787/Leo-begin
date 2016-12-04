CREATE TABLE msg_user(
    mid INT PRIMARY KEY AUTO_INCREMENT,
    mname VARCHAR(64),
    mrela VARCHAR(32),
    mmsg VARCHAR(512),
    mtime VARCHAR(24)
);
INSERT INTO m_user VALUES
(NULL,'Leo','leo@qq.com','用户留言测试','123156464'),
(NULL,'Mary','Mary@163.com','用户留言测试','123156464');