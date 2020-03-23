/*
Navicat MySQL Data Transfer

Source Server         : gw
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : shop

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2020-03-23 15:30:59
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `category_id` int(100) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(255) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', '家用电器');
INSERT INTO `category` VALUES ('2', '图书影像');
INSERT INTO `category` VALUES ('3', '手机数码');
INSERT INTO `category` VALUES ('4', '电脑办公');

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `product_id` int(100) NOT NULL AUTO_INCREMENT,
  `category_id` int(100) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_price` decimal(10,2) DEFAULT NULL,
  `product_dprice` decimal(10,2) DEFAULT NULL,
  `product_img_url` varchar(255) DEFAULT NULL,
  `product_num` int(11) DEFAULT NULL,
  `product_detail` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('1', '1', '外星人Alienware m15 15.6英寸英特尔酷睿i7眼球追踪轻薄游戏笔记本电脑(i7-9750H16G 512G GTX1660Ti 144Hz)', '15999.00', '6699.00', '//m.360buyimg.com/mobilecms/s750x750_jfs/t1/64099/10/14464/133347/5dbbaccbEc1315d4d/a51e85d05a46570a.jpg!q80.dpg', '999', '平板电视详情信息');
INSERT INTO `product` VALUES ('2', '1', '电冰箱', '3999.00', '4999.00', 'https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490175463169.jpg', '666', '冰箱产品详情信息');
INSERT INTO `product` VALUES ('3', '2', '古典音乐', '59.00', '69.00', '//img11.360buyimg.com/n1/jfs/t21016/177/522970946/389821/4d48c4c4/5b0fbe28N8478713c.jpg', '999', '古典详情信息');
INSERT INTO `product` VALUES ('4', '2', '瑞士劳力士', '98299.00', '42.00', '//m.360buyimg.com/mobilecms/s750x750_jfs/t1/102431/33/15510/193093/5e748589Ef5c4ac3f/376812395d8aa996.jpg!q80.dpg', '9999', '摇滚详情信息');

-- ----------------------------
-- Table structure for product_image
-- ----------------------------
DROP TABLE IF EXISTS `product_image`;
CREATE TABLE `product_image` (
  `image_id` int(100) NOT NULL AUTO_INCREMENT,
  `product_id` int(100) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`image_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product_image
-- ----------------------------
INSERT INTO `product_image` VALUES ('1', '1', '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/65677/16/11179/35645/5d897db7E904859aa/188547607166979d.jpg!q70.dpg.webp');
INSERT INTO `product_image` VALUES ('2', '1', '//m.360buyimg.com/mobilecms/s843x843_jfs/t1/74835/1/11304/65744/5d897db7E4e61bf91/af14aa9f175eeefb.jpg!q70.dpg.webp');
INSERT INTO `product_image` VALUES ('3', '2', 'https://x.dscmall.cn/storage/images/201809/goods_img/_P_1536533783480.jpg');
INSERT INTO `product_image` VALUES ('4', '2', 'https://x.dscmall.cn/storage/images/201703/goods_img/0_P_1490175463169.jpg');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(100) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL,
  `login_password` varchar(255) NOT NULL,
  `pay_password` varchar(255) NOT NULL,
  `user_phone` varchar(255) DEFAULT NULL,
  `user_address` varchar(255) DEFAULT NULL,
  `user_photo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('3', 'hello', 'e10adc3949ba59abbe56e057f20f883e', '', '12345678900', '河南郑州', '22');
INSERT INTO `user` VALUES ('4', '张三', 'e10adc3949ba59abbe56e057f20f883e', '', '12345678900', '河南郑州', '22');
INSERT INTO `user` VALUES ('5', '小明', 'e10adc3949ba59abbe56e057f20f883e', '', '12345678900', '河南郑州', '22');
INSERT INTO `user` VALUES ('6', '小刚', 'e10adc3949ba59abbe56e057f20f883e', '', '12345678900', '河南郑州', '22');
INSERT INTO `user` VALUES ('9', '哈哈', '5e543256c480ac577d30f76f9120eb74', '', '12345678900', '河南郑州', '228778');
INSERT INTO `user` VALUES ('10', '嘿嘿', '5e543256c480ac577d30f76f9120eb74', '', '12345678900', '河南郑州', '22');
INSERT INTO `user` VALUES ('14', 'Gaoyia', 'e10adc3949ba59abbe56e057f20f883e', '', '18888888888', null, null);
INSERT INTO `user` VALUES ('19', '888888', 'e10adc3949ba59abbe56e057f20f883e', '', '18999999999', null, null);
INSERT INTO `user` VALUES ('20', 'aaa', 'e10adc3949ba59abbe56e057f20f883e', '', '18999999999', '河南郑州', '20');
INSERT INTO `user` VALUES ('21', '思涵', 'e10adc3949ba59abbe56e057f20f883e', '', '18999999999', '河南郑州', '18');
