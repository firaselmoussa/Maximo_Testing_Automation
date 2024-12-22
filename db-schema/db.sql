
CREATE TABLE IF NOT EXISTS `USER` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `USERNAME` VARCHAR(45) NOT NULL,
  `PASSWORD` VARCHAR(45) NOT NULL,
  `EMAIL` VARCHAR(45) NOT NULL,
  `FNAME` VARCHAR(45) NOT NULL,
  `LNAME` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC) VISIBLE,
  UNIQUE INDEX `USERNAME_UNIQUE` (`USERNAME` ASC) VISIBLE)


CREATE TABLE IF NOT EXISTS `PROCESS_STEP` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `STEPNO` VARCHAR(45) NOT NULL,
  `NAME` VARCHAR(45) NULL,
  `DESCRIPTION` VARCHAR(500) NULL,
  PRIMARY KEY (`ID`, `STEPNO`),
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC) VISIBLE,
  UNIQUE INDEX `STEPNO_UNIQUE` (`STEPNO` ASC) VISIBLE)


CREATE TABLE IF NOT EXISTS `PROCESS` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `PROCESS_STEP_ID` INT NOT NULL,
  `STEP_ORDER` INT NULL,
  PRIMARY KEY (`ID`, `PROCESS_STEP_ID`),
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC) VISIBLE,
  INDEX `fk_PROCESS_PROCESS_STEP1_idx` (`PROCESS_STEP_ID` ASC) VISIBLE,
  CONSTRAINT `fk_PROCESS_PROCESS_STEP1`
    FOREIGN KEY (`PROCESS_STEP_ID`)
    REFERENCES `PROCESS_STEP` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)


CREATE TABLE IF NOT EXISTS `PROCESS_REPORT` (
  `ID` INT NOT NULL,
  `PROCESS_ID` INT NOT NULL,
  `DATE` DATETIME NULL,
  `REPORT` BLOB NULL,
  PRIMARY KEY (`ID`, `PROCESS_ID`),
  INDEX `fk_PROCESS_REPORT_PROCESS1_idx` (`PROCESS_ID` ASC) VISIBLE,
  CONSTRAINT `fk_PROCESS_REPORT_PROCESS1`
    FOREIGN KEY (`PROCESS_ID`)
    REFERENCES `PROCESS` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)


CREATE TABLE IF NOT EXISTS `SAVED_PROCESS` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `PROCESS_ID` INT NOT NULL,
  `USER_ID` INT NOT NULL,
  `NAME` VARCHAR(45) NOT NULL,
  `DESCRIPTION` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`ID`, `PROCESS_ID`, `USER_ID`),
  INDEX `fk_USER_has_PROCESS_STEPS_USER_idx` (`USER_ID` ASC) VISIBLE,
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC) VISIBLE,
  INDEX `fk_SAVED_PROCESS_PROCESS1_idx` (`PROCESS_ID` ASC) VISIBLE,
  CONSTRAINT `fk_USER_has_PROCESS_STEPS_USER`
    FOREIGN KEY (`USER_ID`)
    REFERENCES `USER` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_SAVED_PROCESS_PROCESS1`
    FOREIGN KEY (`PROCESS_ID`)
    REFERENCES `PROCESS` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)



CREATE TABLE IF NOT EXISTS `SCHEDULED_PROCESS` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `WHEN_TO_RUN` DATETIME NOT NULL,
  `RUN_COUNT` VARCHAR(45) NOT NULL,
  `RECURRING` TINYINT NOT NULL,
  `USER_ID` INT NOT NULL,
  `PROCESS_ID` INT NOT NULL,
  `PROCESS_PROCESS_STEP_ID` INT NOT NULL,
  PRIMARY KEY (`ID`, `USER_ID`, `PROCESS_ID`, `PROCESS_PROCESS_STEP_ID`),
  UNIQUE INDEX `ID_UNIQUE` (`ID` ASC) VISIBLE,
  INDEX `fk_SCHEDULED_PROCESS_USER1_idx` (`USER_ID` ASC) VISIBLE,
  INDEX `fk_SCHEDULED_PROCESS_PROCESS1_idx` (`PROCESS_ID` ASC, `PROCESS_PROCESS_STEP_ID` ASC) VISIBLE,
  CONSTRAINT `fk_SCHEDULED_PROCESS_USER1`
    FOREIGN KEY (`USER_ID`)
    REFERENCES `USER` (`ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_SCHEDULED_PROCESS_PROCESS1`
    FOREIGN KEY (`PROCESS_ID` , `PROCESS_PROCESS_STEP_ID`)
    REFERENCES `PROCESS` (`ID` , `PROCESS_STEP_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
    



