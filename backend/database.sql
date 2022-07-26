-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: checkpoint4
-- ------------------------------------------------------
-- Server version	8.0.29-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `collection`
--

DROP TABLE IF EXISTS `collection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `collection` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `author` varchar(45) DEFAULT NULL,
  `img` varchar(512) DEFAULT NULL,
  `description` varchar(256) DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`,`user_id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_collection_user_idx` (`user_id`),
  CONSTRAINT `fk_collection_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `collection`
--

LOCK TABLES `collection` WRITE;
/*!40000 ALTER TABLE `collection` DISABLE KEYS */;
INSERT INTO `collection` VALUES (6,'Harry Potter','JK Rowling','https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Harry_Potter.jpg/1200px-Harry_Potter.jpg','',1),(7,'Dragon Ball - Francais','','https://lvdneng.rosselcdn.net/sites/default/files/dpistyles_v2/vdn_864w/2021/05/10/node_1001248/51312219/public/2021/05/10/B9726989900Z.1_20210510115351_000%2BGGOI3LTJE.1-0.jpg?itok=iJIKaFbA1620640438','',1),(8,'Gaston la Licorne','','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNkLHz7xM_KkA8kycjtFYNfqgOLxnMOfjJNA&usqp=CAU','',1),(9,'P\'tit Loup','','https://www.auzou.fr/modules/pm_advancedtopmenu/element_icons/172-fr.png','',1),(11,'T\'choupi','','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqL7Hj5Ae5L13ssNPf2fInBB3S1j7QD0rQ4w&usqp=CAU','',1),(12,'Mickey','','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeHZk2KJGxDe69X3bOtmfDyrkUrOIjgP_OKEZtdOAF-6kYcPmHkSWupKzUIbPKqSQcrkY&usqp=CAU','',1);
/*!40000 ALTER TABLE `collection` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `issue`
--

DROP TABLE IF EXISTS `issue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `issue` (
  `id` int NOT NULL AUTO_INCREMENT,
  `number` varchar(45) NOT NULL,
  `title` varchar(512) DEFAULT NULL,
  `author` varchar(45) DEFAULT NULL,
  `year` varchar(45) DEFAULT NULL,
  `img` varchar(512) DEFAULT NULL,
  `description` varchar(512) DEFAULT NULL,
  `collection_id` int NOT NULL,
  `state_id` int NOT NULL,
  PRIMARY KEY (`id`,`collection_id`,`state_id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_issue_collection1_idx` (`collection_id`),
  KEY `fk_issue_state1_idx` (`state_id`),
  CONSTRAINT `fk_issue_collection1` FOREIGN KEY (`collection_id`) REFERENCES `collection` (`id`),
  CONSTRAINT `fk_issue_state1` FOREIGN KEY (`state_id`) REFERENCES `state` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `issue`
--

LOCK TABLES `issue` WRITE;
/*!40000 ALTER TABLE `issue` DISABLE KEYS */;
INSERT INTO `issue` VALUES (1,'2','Harry Potter et la chambre des secrets',NULL,NULL,NULL,NULL,6,2),(2,'5','Harry Potter et l\'ordre du phoenix',NULL,NULL,NULL,NULL,6,1),(3,'7','La Menace',NULL,NULL,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4O094bNDeHe9DNU2p3cr30zvGfhSwV9xgeQ&usqp=CAU',NULL,7,3),(4,'28','Trunks',NULL,NULL,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzUp542U6V-n0VSQ1qdJ0_qJbKb0M6ElBVLCGg4Xg9YbQmhksih7mRql7bUC623GoRJXs&usqp=CAU',NULL,7,4),(5,'28','Trunks','','','https://images-na.ssl-images-amazon.com/images/I/41XA3ZO6vGL._SX317_BO1,204,203,200_.jpg','',7,4),(7,'1','Harry Potter à l\'école des sorciers','JK Rowling','','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-nf7mNZvd17d5d8QzyhJ0sAOhY3Qd1tl1HQ&usqp=CAU','',6,2),(8,'1','Je suis tout fou fou','','','https://lagriffenoire.com/cache/images/product/0002891-image-9782017089629.jpg','',8,1),(10,'3','P\'tit Loup va à la gare','','2022','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMj_HQPS8JIE1I1kYshp7eGq4p4a9LGkgKfg&usqp=CAU','',9,3),(11,'2','T\'choupi a fait une bétise','','','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRskIsyZIj8J2Lz1_h_rvnryQ4iwe0VKaxg4g&usqp=CAU','',11,5),(12,'4','Le spectacle de Mickey','Walt Disney','','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO1EGoGVhX7Zxs3cySL-fRU2K-KHHFnx4q4g&usqp=CAU','',12,1),(13,'1','','','','https://media.mediatheques.fr/res/medias/album/400c/229/839229.jpg','A la demande de Mademoiselle Ma Fille',11,2);
/*!40000 ALTER TABLE `issue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `state`
--

DROP TABLE IF EXISTS `state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `state` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `state`
--

LOCK TABLES `state` WRITE;
/*!40000 ALTER TABLE `state` DISABLE KEYS */;
INSERT INTO `state` VALUES (1,'neuf'),(2,'très bon'),(3,'bon'),(4,'correct'),(5,'au moins je l\'ai');
/*!40000 ALTER TABLE `state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Cam','cam@mail.com','azerty');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-21 23:23:53
