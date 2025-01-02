-- Crear tabla de pacientes
CREATE TABLE Pacientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    edad INT NOT NULL,
    genero ENUM('M', 'F') NOT NULL,
    correo VARCHAR(100)
);

-- Crear tabla de examenes
CREATE TABLE Examenes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    rango_referencia VARCHAR(50)
);

-- Crear tabla de ordenes
CREATE TABLE Ordenes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_paciente INT NOT NULL,
    fecha_orden TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_paciente) REFERENCES Pacientes(id)
);

-- Crear tabla de resultados
CREATE TABLE Resultados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_orden INT NOT NULL,
    id_examen INT NOT NULL,
    resultados VARCHAR(50),
    FOREIGN KEY (id_orden) REFERENCES Ordenes(id),
    FOREIGN KEY (id_examen) REFERENCES Examenes(id)
);

----------------------------- Cargar Datos ----------------------------------------------------------------------------------------

-- Insertar ejemplo de paciente
INSERT INTO Pacientes (nombre, edad, genero, correo) VALUES ('Juan Perez', 35, 'M', 'juan.perez@example.com');

-- Insertar ejemplo de examen
INSERT INTO Examenes (nombre, descripcion, rango_referencia) VALUES ('Glucosa', 'Medicion de glucosa en sangre', '70-110 mg/dL');

-- Insertar ejemplo de orden
INSERT INTO Ordenes (id_paciente) VALUES (1);

-- Insertar ejemplo de resultados
INSERT INTO Resultados (id_orden, id_examen, resultados) VALUES (1, 1, '90 mg/dL');