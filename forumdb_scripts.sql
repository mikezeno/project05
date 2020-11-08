use forumdb;

select * from users;

insert into users (firstname, lastname, username, password) values ('Bruce', 'Banner', 'TheHulk', 'test0001');
insert into users (firstname, lastname, username, password) values ('Clark', 'Kent', 'SuperMan', 'test0002');
insert into users (firstname, lastname, username, password) values ('Diana', 'Prince', 'WonderWoman', 'test0003');
insert into users (firstname, lastname, username, password) values ('Tony', 'Stark', 'IronMan', 'test0004');


CREATE TABLE `forumdb`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `createdate` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);

select * from categories;

insert into categories (category) values ('general');

