CREATE TABLE Estudiantes_cfp (
    estudiante_id INTEGER PRIMARY KEY,
    nombre VARCHAR2(100),
    direccion VARCHAR2(200),
    telefono VARCHAR2(20),
    correo VARCHAR2(100),
    fecha_ingreso VARCHAR2(100)
);

CREATE TABLE Profesores (
    profesor_id INTEGER PRIMARY KEY,
    nombre VARCHAR2(100),
    especialidad VARCHAR2(100),
    contacto VARCHAR2(100)
);

CREATE TABLE Cursos (
    curso_id INTEGER PRIMARY KEY,
    nombre VARCHAR2(100),
    descripcion VARCHAR2(500)
);

CREATE TABLE Inscripciones (
    inscripcion_id INTEGER PRIMARY KEY,
    estudiantes_id INTEGER,
    curso_id INTEGER,
    FOREIGN KEY (estudiantes_id) REFERENCES Estudiantes_cfp(estudiante_id),
    FOREIGN KEY (curso_id) REFERENCES Cursos(curso_id)
);

CREATE TABLE Calificaciones (
    calificacion_id INTEGER PRIMARY KEY,
    estudiante_id INTEGER,
    curso_id INTEGER,
    nota INTEGER,
    FOREIGN KEY (estudiante_id) REFERENCES Estudiantes_cfp(estudiante_id),
    FOREIGN KEY (curso_id) REFERENCES Cursos(curso_id)
);


CREATE TABLE Horarios (
    horario_id INTEGER PRIMARY KEY,
    curso_id INTEGER,
    dia VARCHAR2(10),
    hora_inicio VARCHAR2(5),
    hora_fin VARCHAR2(5),
    aula VARCHAR2(50),
    FOREIGN KEY (curso_id) REFERENCES Cursos(curso_id)
);

CREATE TABLE Asignaciones (
    asignacion_id INTEGER PRIMARY KEY,
    profesor_id INTEGER,
    curso_id INTEGER,
    FOREIGN KEY (profesor_id) REFERENCES Profesores(profesor_id),
    FOREIGN KEY (curso_id) REFERENCES Cursos(curso_id)
);



INSERT INTO Estudiantes_cfp VALUES (1,'Daniel Juarez','10 calle 5-2 zona1',55424577,'dani54@gmail.com','2024/1/1' );
INSERT INTO Estudiantes_cfp VALUES (2,'Carlos López','15 calle 12-3 zona5',12444785,'delinkar@gmail.com','2024/1/11' );
INSERT INTO Estudiantes_cfp VALUES (3,'Luis Suarez','18 calle 6-22 zona10',12288672,'lucho@gmail.com','2024/1/5' );
INSERT INTO Estudiantes_cfp VALUES (4,'Oscar Lemus','13 calle 9-2 zona1',54789965,'coca@gmail.com','2024/1/2' );
INSERT INTO Estudiantes_cfp VALUES (5,'Juan Carlos Plata','29 calle 6-21 zona1',14859876,'pinplata@gmail.com','2024/1/16' );
INSERT INTO Estudiantes_cfp VALUES (6,'Andrea Tamargo','36 calle 10-2 zona8',20356748,'Andrea2024@gmail.com','2024/1/15');
INSERT INTO Estudiantes_cfp VALUES (7,'Karla Herrarte','19 calle 8-54 zona6',15743685,'KACHE@gmail.com','2024/1/15' );
INSERT INTO Estudiantes_cfp VALUES (8,'Analu Rodriguez','15 calle 5-2 zona3',54338519,'anau@gmail.com','2024/1/12' );
INSERT INTO Estudiantes_cfp VALUES (9,'Daniela López','10 calle 11-25 zona1',47583215,'daniela1998@gmail.com','2024/1/12');
INSERT INTO Estudiantes_cfp VALUES (10,'Lucía Quiej','15 calle 12-25 zona1',154788958,'dani54@gmail.com','2024/1/12' );



INSERT INTO Profesores VALUES (1, 'Ana Lopez', 'Matemáticas', 'ana@example.com');
INSERT INTO Profesores VALUES (2, 'Carlos Vasquez', 'Ingles', 'delinkar@example.com');
INSERT INTO Profesores VALUES (3, 'Rudy Santizo', 'Sociales', 'ruink@example.com');
INSERT INTO Profesores VALUES (4, 'Gladys Gonzalez', 'Computación', ' jeanethcumes2024@example.com');
INSERT INTO Profesores VALUES (5, 'Giacarlo Lucas', 'Religión', 'josephandrew1906@gmail.com');

INSERT INTO Cursos  VALUES (1, 'Matematicas Básicas', 'Curso de introducción a las matemáticas' );
INSERT INTO Cursos  VALUES (2, 'ingles', 'Curso de introducción de Inglés');
INSERT INTO Cursos  VALUES (3, 'Sociales', 'Curso de introducción a Sociales');
INSERT INTO Cursos VALUES (4, 'computación', 'Curso de introducción a Computación');
INSERT INTO Cursos  VALUES (5, 'Religión', 'Reforzamiento de Religión');

INSERT INTO Inscripciones  VALUES (1, 1, 1);
INSERT INTO Inscripciones  VALUES (2, 2, 2);
INSERT INTO Inscripciones  VALUES (3, 3, 3);
INSERT INTO Inscripciones  VALUES (4, 4, 4);
INSERT INTO Inscripciones  VALUES (5, 5, 5);


INSERT INTO Calificaciones  VALUES (1, 1, 1, 65);
INSERT INTO Calificaciones  VALUES (2, 2, 2, 70);
INSERT INTO Calificaciones VALUES (3, 3, 3, 58);
INSERT INTO Calificaciones  VALUES (4, 4, 4, 82);
INSERT INTO Calificaciones  VALUES (5, 5, 5, 100);

INSERT INTO Horarios  VALUES (1, 1, 'Lunes', '08:00', '9:00', 'Salón 1');
INSERT INTO Horarios  VALUES (2, 2, 'Martes', '10:00', '12:00', 'Salón 2');
INSERT INTO Horarios  VALUES (3, 3, 'Miercoles', '11:00', '13:00', 'Salón 3');
INSERT INTO Horarios  VALUES (4, 4, 'Jueves', '8:00', '9:00', 'Salón 4');
INSERT INTO Horarios  VALUES (5, 5, 'Viernes', '10:30', '11:15', 'Salón 5');

INSERT INTO Asignaciones VALUES (1, 1, 1);
INSERT INTO Asignaciones  VALUES (2, 2, 2);
INSERT INTO Asignaciones  VALUES (3, 3, 3);
INSERT INTO Asignaciones  VALUES (4, 4, 4);
INSERT INTO Asignaciones  VALUES (5, 5, 5);

INSERT INTO Estudiantes_cfp VALUES (11, 'Maria Dias', '15 calle 22-5 zona 1', 803820209, 'maria@example.com', '2024-02-1');
INSERT INTO Cursos  VALUES (6, 'Física Fundamental', 'Reforzamiento de Física Fundamental');
INSERT INTO Calificaciones  VALUES (6, 11, 6, 98);

select * from Estudiantes;
select * from Profesores;
select * from Cursos ; 
select * from Inscripciones;
select * from Calificaciones;
select * from Horarios; 
select * from Asignaciones; 