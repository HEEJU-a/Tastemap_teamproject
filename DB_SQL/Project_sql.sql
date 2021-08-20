------유저 테이블------
CREATE TABLE t_user(
	iuser INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	email VARCHAR(50) UNIQUE,
	pw VARCHAR(100),
	nm VARCHAR(15) NOT NULL,
	tel CHAR(13) COMMENT '연락처',
	profileImg VARCHAR(50),
	authCd CHAR(5) COMMENT '회원가입 인증코드',
	regdt DATETIME DEFAULT NOW(),
	provider VARCHAR(10),
	INDEX idx_auth_cd (`authCd`)
);
SELECT * FROM t_user;

-----댓글 테이블------
CREATE TABLE t_matzip_cmt(
	icmt INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	iboard INT UNSIGNED, 
	iuser INT UNSIGNED,
	cmt VARCHAR(400) NOT NULL,
	regdate DATE DEFAULT NOW(),
	FOREIGN KEY (iboard) REFERENCES t_matzip(iboard),
	FOREIGN KEY (iuser) REFERENCES  t_user(iuser)
);
SELECT * FROM t_matzip_cmt;


------맛집 테이블------
CREATE TABLE t_matzip(
	iboard INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	rsnm VARCHAR(100) NOT NULL,
	rsc VARCHAR(20) NOT NULL,
	rsad VARCHAR(100) NOT NULL
);
SELECT * FROM t_matzip;


------예약 테이블------
CREATE TABLE t_matzip_rev(
	irev INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	iuser INT UNSIGNED,
	iboard INT UNSIGNED,
	dt DATETIME NOT NULL,
	memberct INT UNSIGNED NOT NULL,
	FOREIGN KEY (iuser) REFERENCES t_user(iuser),
	FOREIGN KEY (iboard) REFERENCES t_matzip(iboard)
);
SELECT * FROM t_matzip_rev;


------좋아요 테이블------
CREATE TABLE t_matzip_fav(
	iboard INT UNSIGNED,
	iuser INT UNSIGNED,
	regdt DATETIME DEFAULT NOW(),
	PRIMARY KEY(iboard, iuser),
	FOREIGN KEY (iboard) REFERENCES t_matzip(iboard),
	FOREIGN KEY (iuser) REFERENCES t_user(iuser)
);
SELECT * FROM t_matzip_fav;
