create table tareas(
    id serial primary key,
    titulo varchar(255) unique ,
    descripccion varchar(255)
)

insert into tareas(titulo,descripccion) values('Tarea 1','Descripcion 1')
select * from tareas where id = 1
