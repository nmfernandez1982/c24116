create database prueba1;

use prueba1;

create table clientes
(
id int
);

drop table clientes;

create table personal 
(
id int auto_increment primary key,
nombre varchar(35),
apellido varchar(35) not null,
dni int unique,
mail varchar(40) unique,
habilitado boolean default true
)

