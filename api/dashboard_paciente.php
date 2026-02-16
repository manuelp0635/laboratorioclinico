<?php
require "../config/database.php";

$client_id = $_GET['client_id'];

$stmt = $pdo->prepare("
SELECT 
SUM(status=0) as pendientes,
SUM(status=1) as aprobadas,
SUM(status IN (4,6)) as finalizadas
FROM appointment_list
WHERE client_id = ?
");

$stmt->execute([$client_id]);
$data = $stmt->fetch();

echo json_encode($data);
