# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 192.168.31.151 (MySQL 5.6.23-log)
# Database: seller
# Generation Time: 2020-09-13 02:45:10 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table collection
# ------------------------------------------------------------

DROP TABLE IF EXISTS `collection`;

CREATE TABLE `collection` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `firstName` varchar(11) NOT NULL DEFAULT '' COMMENT 'first name',
  `lastName` varchar(11) NOT NULL DEFAULT '' COMMENT 'last name',
  `category` int(11) NOT NULL DEFAULT '0' COMMENT '类别',
  `link` varchar(255) NOT NULL DEFAULT '' COMMENT '网站地址',
  `linkAuthored` tinyint(11) NOT NULL DEFAULT '0' COMMENT '确认网站地址的真实性',
  `hasOnlineShop` tinyint(11) NOT NULL DEFAULT '0' COMMENT '是否有线上商店',
  `sellUrls` text NOT NULL COMMENT '线上商品的url',
  `quality` tinyint(11) NOT NULL DEFAULT '0' COMMENT '质量期望',
  `experience` tinyint(11) NOT NULL DEFAULT '0' COMMENT '线上销售经验',
  `understanding` tinyint(11) NOT NULL DEFAULT '0' COMMENT '对市场销售的理解',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='调查收集表';




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
