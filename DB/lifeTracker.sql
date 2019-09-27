-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema lifeTrackerdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `lifeTrackerdb` ;

-- -----------------------------------------------------
-- Schema lifeTrackerdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `lifeTrackerdb` DEFAULT CHARACTER SET utf8 ;
USE `lifeTrackerdb` ;

-- -----------------------------------------------------
-- Table `lifeTracker`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `lifeTracker` ;

CREATE TABLE IF NOT EXISTS `lifeTracker` (
  `idlifeTracker` INT NOT NULL AUTO_INCREMENT,
  `id` VARCHAR(45) NULL,
  PRIMARY KEY (`idlifeTracker`))
ENGINE = InnoDB;

SET SQL_MODE = '';
GRANT USAGE ON *.* TO admin@localhost;
 DROP USER admin@localhost;
SET SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';
CREATE USER 'admin'@'localhost' IDENTIFIED BY 'admin';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'admin'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `lifeTracker`
-- -----------------------------------------------------
START TRANSACTION;
USE `lifeTrackerdb`;
INSERT INTO `lifeTracker` (`idlifeTracker`, `id`) VALUES (1, '1');

COMMIT;
