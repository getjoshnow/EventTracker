-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `table`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `table` ;

CREATE TABLE IF NOT EXISTS `table` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Category` VARCHAR(45) NULL,
  `name` VARCHAR(45) NULL,
  `Description` VARCHAR(450) NULL,
  `URL` VARCHAR(45) NULL,
  `Importance` VARCHAR(45) NULL,
  `DueDate` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
GRANT USAGE ON *.* TO admin;
 DROP USER admin;
SET SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';
CREATE USER 'admin' IDENTIFIED BY 'admin';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'admin';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `table`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `table` (`id`, `Category`, `name`, `Description`, `URL`, `Importance`, `DueDate`) VALUES (1, 'bananas', 'Walmart', 'Tacos', 'Google.com', NULL, NULL);
INSERT INTO `table` (`id`, `Category`, `name`, `Description`, `URL`, `Importance`, `DueDate`) VALUES (2, 'cookies', 'Dave And Busters', 'Bridal Shower', 'SpaceX.com', NULL, NULL);
INSERT INTO `table` (`id`, `Category`, `name`, `Description`, `URL`, `Importance`, `DueDate`) VALUES (3, 'cake', 'BestBuy', 'Vacation', 'dnb.com', NULL, NULL);

COMMIT;
