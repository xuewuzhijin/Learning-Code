/*
 Navicat Premium Data Transfer

 Source Server         : MAC
 Source Server Type    : MySQL
 Source Server Version : 50725
 Source Host           : localhost:3306
 Source Schema         : xobject

 Target Server Type    : MySQL
 Target Server Version : 50725
 File Encoding         : 65001

 Date: 05/07/2019 22:41:52
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` tinyint(4) NOT NULL COMMENT '0代表女1代表男',
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '88888888',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_user_unique` (`user`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES (1, 'admin', 'Oscar Hermann', 0, 'enola.ritchie@example.org', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'FFGC2y2b4h', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (2, '792-577-2437', 'Mr. Deontae Schimmel Jr.', 0, 'demarco.jakubowski@example.net', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'AM9JfEIAvn', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (3, '596.799.6937 x327', 'Fred Grimes', 1, 'sboyer@example.com', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'JWS04iRd9X', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (4, '1-524-799-8143', 'Jordyn Boehm V', 1, 'lmayer@example.com', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'H07ibxqJAi', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (5, '575.223.2415 x84814', 'Darius Klein DDS', 0, 'vconn@example.org', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'A7rLjoHVKq', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (6, '1-746-962-1423 x202', 'Ebba Abbott', 0, 'fadel.zora@example.net', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'N6cDmyNVs4', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (7, '+15327655883', 'Gay Gulgowski', 0, 'melba.okeefe@example.net', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'ov9Dfa2rzl', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (8, '+16596382736', 'Pablo Hammes', 0, 'lyda.doyle@example.com', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'bfPwL8IiE9', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (9, '(738) 309-3061', 'Magdalena Toy', 0, 'werner.grimes@example.net', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'NHP2RL4ej2', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (10, '(246) 638-0717 x2812', 'Miss Dakota Murazik MD', 1, 'langosh.norris@example.net', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'n0NPs6KeIm', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (11, '+1.909.408.4306', 'Aric Brown DDS', 1, 'braun.zena@example.com', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'qApLimcGyr', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (12, '787-543-9537', 'Grace Hagenes', 1, 'steuber.alison@example.net', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'tWofu2jtAl', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (13, '524.854.2978', 'Lenore Mante DDS', 1, 'carolyn.ankunding@example.net', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'ROBhXnjwQ5', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (14, '902-771-1212 x5669', 'Reynold Fay', 1, 'schultz.selena@example.com', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'Ay1CQ0eNEz', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (15, '220-816-5166 x794', 'Lemuel Streich', 1, 'xgleichner@example.net', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'StvZOU8VQT', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (16, '309-351-7935 x1105', 'Dr. Marilyne Runte IV', 1, 'hhaag@example.net', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'TW4Mc6HxUY', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (17, '1-679-622-4244 x060', 'Mr. Reinhold Hand PhD', 0, 'mabshire@example.org', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', '2LMCBrJIU2', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (18, '+1.659.474.3362', 'Miss Myriam O\'Reilly', 1, 'alessia.beahan@example.com', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'FqIY0v8XwR', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (19, '618.499.7032 x76420', 'Dr. Cornell McClure', 1, 'lcollins@example.com', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'wufN9GAIwY', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (20, '+1-574-686-1225', 'Fae Schmitt', 0, 'mathilde.conn@example.org', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'UpXaN1YsKM', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (21, '(982) 678-9007 x56910', 'Prof. Delfina Braun', 0, 'annamarie.pfeffer@example.org', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'H6uLlgQtDV', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (22, '709-999-9461', 'Fleta Kertzmann', 1, 'greilly@example.net', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'v3p1w5CKi6', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (23, '+14322080304', 'Arvilla Cremin', 0, 'susana.west@example.com', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'Gh1vs303qI', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (24, '557-974-2637 x653', 'Retha Jacobs', 0, 'penelope.cartwright@example.com', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'aCLuqIVEjV', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (25, '+15497583911', 'Dr. Dannie Emard PhD', 1, 'dhessel@example.net', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'dgLu04xZLZ', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (26, '(919) 346-8886 x45605', 'Aniya Upton', 0, 'harber.josh@example.org', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', '8PevOM5n6y', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (27, '(426) 434-5997', 'Pierre Rutherford', 1, 'ledner.rozella@example.com', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', '6i9krVSpIa', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (28, '1-380-668-1716 x8472', 'Marcelo Tremblay MD', 0, 'onie51@example.org', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'Ww3VlE4jsg', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (29, '(428) 342-3355', 'Reymundo Rice MD', 0, 'lexi.flatley@example.com', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'sLhz6WdimO', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (30, '+1 (880) 416-3405', 'Jeromy Bahringer', 0, 'iwyman@example.org', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'v3FoTnlzI2', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (31, '+17187344693', 'Dr. Jefferey Steuber MD', 1, 'stamm.marcelino@example.net', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'I36t8GbfWs', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (32, '+1 (369) 524-7127', 'Mr. Rhiannon Abshire Jr.', 0, 'bhuels@example.net', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'HaTztcHH3c', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (33, '+1-897-728-3648', 'Norval Bernhard', 1, 'strosin.paige@example.net', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'mpsWusnHMu', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (34, '+1.718.816.5561', 'Ronny Luettgen', 1, 'ernser.wilfred@example.com', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'FDT2nTxpHX', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (35, '+1-705-574-4449', 'Elijah Kohler', 1, 'gislason.ali@example.net', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'gpvD7Fk5wL', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (36, '659-674-9367 x5754', 'Dr. Amir Gislason', 0, 'schuster.maverick@example.net', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'ARbY19GD6T', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (37, '(862) 222-3108', 'Carlee Hettinger', 0, 'aherman@example.com', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'T6o2YphYeP', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (38, '(923) 223-9174 x2351', 'Haley Graham DDS', 0, 'emmerich.angus@example.com', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', '5YBPOP6B1O', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (39, '892-721-5705', 'Dovie Wisozk DVM', 0, 'zachary.oconnell@example.org', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'lRDw6JnZfp', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (40, '916-945-9650 x739', 'Ulises Prohaska', 1, 'lula82@example.org', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'vRktfGxkLQ', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (41, '1-345-908-6325 x64369', 'Eve Mraz', 1, 'hobart.hettinger@example.com', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'PFeru1z34X', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (42, '+1-208-379-7779', 'Beth Mosciski', 0, 'pinkie08@example.org', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'py4xiTFRWf', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (43, '1-838-439-9498 x104', 'Maureen Konopelski', 0, 'darrick50@example.org', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'oeby5zYDWL', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (44, '(981) 787-1135', 'Antonio Conroy', 1, 'bmohr@example.org', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'XrBOUdnp6P', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (45, '(647) 423-9970 x5350', 'Lyric Runolfsson', 1, 'hahn.adrianna@example.net', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'ApxtaBzfA6', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (46, '279-723-6756', 'Dr. Waldo Reinger I', 0, 'msmith@example.org', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'UBXsRgXB2J', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (47, '356-612-4228 x6748', 'Linwood Durgan', 0, 'misael69@example.net', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'XmxFWquLWu', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (48, '646-559-5694', 'Deon Miller', 0, 'herman.abdullah@example.com', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', '4UbWiw45U0', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (49, '(316) 509-1626 x291', 'Asha Smith', 0, 'abogan@example.com', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'Er88TYUWhs', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
INSERT INTO `users` VALUES (50, '(265) 818-3114', 'Mrs. Carlie Johnson', 1, 'brown.josephine@example.com', '2019-06-29 14:26:43', '$2y$10$eUNEANVM2E706Hhgu7e0zeKYEumeuRIJTikDfwfib7dXR9oYvwbkO', 'nugK5gC2zT', '2019-06-29 14:26:43', '2019-06-29 14:26:43');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
