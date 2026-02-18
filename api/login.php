<?php
require '../config.php';
session_start(); // ⚠️ ESTO ES OBLIGATORIO

header('Content-Type: application/json');

$input = json_decode(file_get_contents('php://input'), true);

$cedula = trim($input['cedula'] ?? '');
$password = trim($input['password'] ?? '');
$role = trim($input['role'] ?? '');

if (!$cedula || !$password || !$role) {
    http_response_code(400);
    echo json_encode(['error'=>'Campos incompletos']);
    exit;
}

$stmt = $pdo->prepare("SELECT * FROM usuarios WHERE cedula=? AND rol=?");
$stmt->execute([$cedula, $role]);
$user = $stmt->fetch();

if ($user && password_verify($password, $user['password'])) {

    $_SESSION['user_id'] = $user['id'];
    $_SESSION['nombre'] = $user['nombre'];
    $_SESSION['role'] = $user['rol'];

    echo json_encode(['success'=>true]);
} else {
    http_response_code(401);
    echo json_encode(['error'=>'Acceso denegado']);
}
