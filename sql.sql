CREATE TABLE IF NOT EXISTS `users`
(
  `user_id`  INT NOT NULL AUTO_INCREMENT,
  `email`    VARCHAR(80) NOT NULL,
  `password` VARCHAR(80) NOT NULL,
  PRIMARY KEY (user_id)
) ENGINE = InnoDB;
