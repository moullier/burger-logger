drop database if exists burgers_db;
create database burgers_db;

use burgers_db;

create table burgers (
    id int primary key auto_increment,
    burger_name varchar(100) NOT NULL,
    devoured boolean NOT NULL
);