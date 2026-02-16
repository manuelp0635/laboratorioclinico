<?php
require "../config/database.php";

$data = [];

/* Total pruebas activas */
$stmt = $pdo->query("SELECT COUNT(*) FROM test_list WHERE delete_flag = 0 AND status = 1");
$data['tests'] = $stmt->fetchColumn();

/* Citas */
$data['pendientes'] = $pdo->query("SELECT COUNT(*) FROM appointment_list WHERE status = 0")->fetchColumn();
$data['aprobadas']  = $pdo->query("SELECT COUNT(*) FROM appointment_list WHERE status = 1")->fetchColumn();
$data['finalizadas']= $pdo->query("SELECT COUNT(*) FROM appointment_list WHERE status IN (4,6)")->fetchColumn();

/* Clientes */
$data['clientes'] = $pdo->query("SELECT COUNT(*) FROM client_list WHERE delete_flag = 0")->fetchColumn();

echo json_encode($data);
