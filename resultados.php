<?php
require('path/to/fpdf/fpdf.php'); // Asegúrate de que FPDF esté incluido
$mysqli = new mysqli("localhost", "username", "password", "database");

// Validar conexión
if ($mysqli->connect_error) {
    die("Error de conexión: " . $mysqli->connect_error);
}

// Obtener datos de la base de datos
$idPaciente = $_GET['id_paciente']; // Recibe el ID del paciente por GET
$query = "
    SELECT p.nombre AS paciente, p.edad, p.genero, e.nombre AS examen, 
           e.rango_referencia, r.resultado, o.fecha_orden
    FROM Resultados r
    JOIN Ordenes o ON r.id_orden = o.id
    JOIN Pacientes p ON o.id_paciente = p.id
    JOIN Examenes e ON r.id_examen = e.id
    WHERE p.id = $idPaciente
";

$resultado = $mysqli->query($query);

// Verificar si hay datos
if ($resultado->num_rows > 0) {
    // Crear PDF
    $pdf = new FPDF();
    $pdf->AddPage();
    $pdf->SetFont('Arial', 'B', 16);
    $pdf->Cell(0, 10, 'Resultados de Laboratorio', 0, 1, 'C');
    $pdf->Ln(10);

    // Obtener información del paciente
    $fila = $resultado->fetch_assoc();
    $pdf->SetFont('Arial', '', 12);
    $pdf->Cell(0, 10, 'Paciente: ' . $fila['paciente'], 0, 1);
    $pdf->Cell(0, 10, 'Edad: ' . $fila['edad'], 0, 1);
    $pdf->Cell(0, 10, 'Genero: ' . $fila['genero'], 0, 1);
    $pdf->Cell(0, 10, 'Fecha de Orden: ' . $fila['fecha_orden'], 0, 1);
    $pdf->Ln(10);

    // Agregar tabla de resultados
    $pdf->SetFont('Arial', 'B', 12);
    $pdf->Cell(60, 10, 'Examen', 1);
    $pdf->Cell(60, 10, 'Resultado', 1);
    $pdf->Cell(60, 10, 'Rango Referencia', 1);
    $pdf->Ln();

    $pdf->SetFont('Arial', '', 12);
    do {
        $pdf->Cell(60, 10, $fila['examen'], 1);
        $pdf->Cell(60, 10, $fila['resultado'], 1);
        $pdf->Cell(60, 10, $fila['rango_referencia'], 1);
        $pdf->Ln();
    } while ($fila = $resultado->fetch_assoc());

    // Descargar PDF
    $pdf->Output('D', 'resultados_laboratorio.pdf');
} else {
    echo "No se encontraron resultados.";
}

$mysqli->close();
?>
