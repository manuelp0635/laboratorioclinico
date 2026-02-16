<?php
session_start();
require "../config/database.php";

header('Content-Type: application/json');

if(!isset($_SESSION['user'])){
    http_response_code(401);
    echo json_encode(["error"=>"No autorizado"]);
    exit;
}

$user=$_SESSION['user'];

if($user['rol']!=="paciente"){
    http_response_code(403);
    echo json_encode(["error"=>"Acceso denegado"]);
    exit;
}

$stmt=$pdo->prepare("
SELECT prueba, valor, fecha, laboratorio
FROM resultados
WHERE paciente_id=?
ORDER BY fecha DESC
");

$stmt->execute([$user['id']]);
$resultados=$stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($resultados);
