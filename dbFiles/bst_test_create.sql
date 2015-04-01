SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL';

CREATE SCHEMA IF NOT EXISTS `bst_test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci ;
USE `bst_test` ;

-- -----------------------------------------------------
-- Table `bst_test`.`triathlete`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `bst_test`.`triathlete` (
  `id_triathlete` INT NOT NULL AUTO_INCREMENT ,
  `triathlete_firstName` VARCHAR(45) NOT NULL ,
  `triathlete_lastName` VARCHAR(45) NOT NULL ,
  `triathlete_nickName` VARCHAR(45) NULL ,
  `triathlete_desc` VARCHAR(500) NULL ,
  PRIMARY KEY (`id_triathlete`) ,
  UNIQUE INDEX `idtriathlete_UNIQUE` (`id_triathlete` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bst_test`.`def_division`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `bst_test`.`def_division` (
  `id_def_division` INT NOT NULL AUTO_INCREMENT ,
  `division_name` VARCHAR(45) NOT NULL ,
  `division_desc` VARCHAR(1000) NULL ,
  PRIMARY KEY (`id_def_division`) ,
  UNIQUE INDEX `id_def_division_UNIQUE` (`id_def_division` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bst_test`.`competition`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `bst_test`.`competition` (
  `id_competition` INT NOT NULL AUTO_INCREMENT ,
  `comp_year` INT NOT NULL ,
  `comp_location` VARCHAR(60) NULL ,
  `comp_desc` TEXT NULL ,
  `comp_division_id` INT NOT NULL ,
  `comp_odds_desc` TEXT NULL ,
  PRIMARY KEY (`id_competition`) ,
  UNIQUE INDEX `id_competition_UNIQUE` (`id_competition` ASC) ,
  INDEX `fk_competition_division_id` (`comp_division_id` ASC) ,
  CONSTRAINT `fk_competition_division_id`
    FOREIGN KEY (`comp_division_id` )
    REFERENCES `bst_test`.`def_division` (`id_def_division` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bst_test`.`competition_odd`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `bst_test`.`competition_odd` (
  `id_odd` INT NOT NULL AUTO_INCREMENT ,
  `odd_comp_id` INT NULL ,
  `odd_triathlete_id` INT NULL ,
  `odd_description` TEXT NULL ,
  PRIMARY KEY (`id_odd`) ,
  UNIQUE INDEX `id_odd_UNIQUE` (`id_odd` ASC) ,
  INDEX `fk_odd_comp_id` (`odd_comp_id` ASC) ,
  INDEX `fk_odd_triathlete_id` (`odd_triathlete_id` ASC) ,
  CONSTRAINT `fk_odd_comp_id`
    FOREIGN KEY (`odd_comp_id` )
    REFERENCES `bst_test`.`competition` (`id_competition` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_odd_triathlete_id`
    FOREIGN KEY (`odd_triathlete_id` )
    REFERENCES `bst_test`.`triathlete` (`id_triathlete` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = 'This should house the odds per each year';


-- -----------------------------------------------------
-- Table `bst_test`.`def_event_type`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `bst_test`.`def_event_type` (
  `id_event_type` INT NOT NULL AUTO_INCREMENT ,
  `def_event_name` VARCHAR(100) NOT NULL ,
  `def_event_desc` VARCHAR(500) NOT NULL ,
  PRIMARY KEY (`id_event_type`) ,
  UNIQUE INDEX `id_event_type_UNIQUE` (`id_event_type` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bst_test`.`def_minor_event`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `bst_test`.`def_minor_event` (
  `id_def_minor_event` INT NOT NULL AUTO_INCREMENT ,
  `def_minor_event_name` VARCHAR(200) NOT NULL ,
  `def_minor_event_desc` VARCHAR(500) NOT NULL ,
  PRIMARY KEY (`id_def_minor_event`) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bst_test`.`major_event`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `bst_test`.`major_event` (
  `id_major_event` INT NOT NULL AUTO_INCREMENT ,
  `major_event_type_id` INT NOT NULL ,
  `major_event_comp_id` INT NOT NULL ,
  PRIMARY KEY (`id_major_event`) ,
  INDEX `fk_major_event_type` (`major_event_type_id` ASC) ,
  INDEX `fk_major_event_comp` (`major_event_comp_id` ASC) ,
  UNIQUE INDEX `id_major_event_UNIQUE` (`id_major_event` ASC) ,
  CONSTRAINT `fk_major_event_type`
    FOREIGN KEY (`major_event_type_id` )
    REFERENCES `bst_test`.`def_event_type` (`id_event_type` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_major_event_comp`
    FOREIGN KEY (`major_event_comp_id` )
    REFERENCES `bst_test`.`competition` (`id_competition` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bst_test`.`minor_event`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `bst_test`.`minor_event` (
  `id_minor_event` INT NOT NULL AUTO_INCREMENT ,
  `minor_event_major_event_id` INT NOT NULL ,
  `minor_event_type_id` INT NOT NULL ,
  PRIMARY KEY (`id_minor_event`) ,
  UNIQUE INDEX `id_minor_event_UNIQUE` (`id_minor_event` ASC) ,
  INDEX `fk_minor_event_major_event` (`minor_event_major_event_id` ASC) ,
  INDEX `fk_minor_event_type` (`minor_event_type_id` ASC) ,
  CONSTRAINT `fk_minor_event_major_event`
    FOREIGN KEY (`minor_event_major_event_id` )
    REFERENCES `bst_test`.`major_event` (`id_major_event` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_minor_event_type`
    FOREIGN KEY (`minor_event_type_id` )
    REFERENCES `bst_test`.`def_minor_event` (`id_def_minor_event` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bst_test`.`result`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `bst_test`.`result` (
  `id_result` INT NOT NULL AUTO_INCREMENT ,
  `result_minor_event_id` INT NOT NULL ,
  `result_triathlete_id` INT NOT NULL ,
  `result_opponent_id` INT NOT NULL ,
  `result_score_win_place` INT NOT NULL DEFAULT 0 ,
  PRIMARY KEY (`id_result`) ,
  UNIQUE INDEX `id_result_UNIQUE` (`id_result` ASC) ,
  INDEX `fk_result_minor_event` (`result_minor_event_id` ASC) ,
  INDEX `fk_result_triathlete_id` (`result_triathlete_id` ASC) ,
  INDEX `fk_result_opponent_id` (`result_opponent_id` ASC) ,
  CONSTRAINT `fk_result_minor_event`
    FOREIGN KEY (`result_minor_event_id` )
    REFERENCES `bst_test`.`minor_event` (`id_minor_event` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_result_triathlete_id`
    FOREIGN KEY (`result_triathlete_id` )
    REFERENCES `bst_test`.`triathlete` (`id_triathlete` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_result_opponent_id`
    FOREIGN KEY (`result_opponent_id` )
    REFERENCES `bst_test`.`triathlete` (`id_triathlete` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = 'column \'result_score_win_place\' should be used to put the bo' /* comment truncated */;


CREATE USER `user_rob` IDENTIFIED BY 'password';


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
