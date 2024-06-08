DROP DATABASE ea3form;
CREATE DATABASE ea3form;
USE ea3form;

CREATE TABLE formularios_contacto (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  asunto VARCHAR(100) NOT NULL,
  mensaje TEXT NOT NULL,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO formularios_contacto (nombre, email, asunto, mensaje) 
VALUES ('Pedro', 'pedrogon1337@gmail.com', 'Feedback', 'El diseño de la página web me agrada');

SELECT * FROM formularios_contacto;
