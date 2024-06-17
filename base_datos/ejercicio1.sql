CREATE TABLE clientes (
    id INTEGER NOT NULL,
    nombre VARCHAR2(250)NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE productos(
    id INTEGER NOT NULL,
    nombre_producto VARCHAR2(250) NOT NULL,
    precio NUMBER  NULL,
    stock INTEGER NULL,
    categoria_id INTEGER NOT NULL,
    PRIMARY KEY(id) ,
 FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);
CREATE TABLE categorias(
    id  INTEGER NOT NULL,
    nombre VARCHAR2(250) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE pedidos(
id INTEGER NOT NULL,
cliente_id INTEGER NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

CREATE TABLE detalle_pedidos(
    pedido_id INTEGER NOT NULL,
    producto_i d INTEGER NOT NULL, 
    cantidad INTEGER NOT NULL,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
    FOREIGN KEY (producto_id)REFERENCES productos(id)
);
INSERT INTO categorias VALUES(1,'Tecnología');
INSERT INTO categorias VALUES(2,'Deporte');
INSERT INTO categorias VALUES(3,'Muebles');
INSERT INTO categorias VALUES(4,'Electrodomésticos');
INSERT INTO categorias VALUES(5,'Ferretería');


INSERT INTO productos VALUES(1,'Televisión Samsung 55 pulgadas',3500.00,100,1);
INSERT INTO productos VALUES(2,'Samsung Galaxy Flip 5 ',10500.00,5000,1);
INSERT INTO productos VALUES(3,'airpods 3',100.00,800,1);
INSERT INTO productos VALUES(4,'Teclado Razer Gaming Cynosa',850.00,500,1);
INSERT INTO productos VALUES(5,'Mouse BENGOO  con Retroiluminación RGB',980.50,600,1);
INSERT INTO productos VALUES(6,'Auriculares inalámbricos ASTRO Gaming A50',1800.00,350,1);


INSERT INTO productos VALUES(7,'Guantes Para Portero',100.00,100,2);
INSERT INTO productos VALUES(8,'Balón de Football 5',150.00,200,2);
INSERT INTO productos VALUES(9,'Camisa Selección de Guatemala',350.00,50,2);
INSERT INTO productos VALUES(10,'Pachón Hidratante 500ML',100.00,300,2);
INSERT INTO productos VALUES(11,'Nike Magista Onda FG Soccer Cleats',1077.00,100,2);
INSERT INTO productos VALUES(12 ,'Espinilleras Wilson WSP 2000',55.00,150,2);



