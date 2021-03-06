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
-- Table `life`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `life` ;

CREATE TABLE IF NOT EXISTS `life` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `userstory` VARCHAR(45) NULL,
  `description` VARCHAR(200) NULL,
  `url_list` VARCHAR(45) NULL,
  `category` VARCHAR(45) NULL,
  `priority` VARCHAR(45) NULL,
  `line_number` INT NULL,
  `sub_menu` VARCHAR(45) NULL,
  `time_created` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
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
-- Data for table `life`
-- -----------------------------------------------------
START TRANSACTION;
USE `lifeTrackerdb`;
INSERT INTO `life` (`id`, `name`, `userstory`, `description`, `url_list`, `category`, `priority`, `line_number`, `sub_menu`, `time_created`) VALUES (1, 'Test', 'TestUserStory', 'TestUserStory', 'google.com', 'Water', NULL, 1234, NULL, NULL);
INSERT INTO `life` (`id`, `name`, `userstory`, `description`, `url_list`, `category`, `priority`, `line_number`, `sub_menu`, `time_created`) VALUES (2, 'Test  2', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

COMMIT;
