<?php
session_start();
header('Content-Type: application/json');

// Recibir datos JSON
$data = json_decode(file_get_contents('php://input'), true);
if(!isset($data['cedula']) && !isset($data['username'])){
    http_response_code(400);
    echo json_encode(['error'=>'No se recibieron datos']);
    exit;
}

try {
    // Conexión a la base de datos
    $pdo = new PDO("mysql:host=localhost;dbname=lab_db","usuario","contraseña");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e){
    http_response_code(500);
    echo json_encode(['error'=>'Error de conexión con la base de datos: '.$e->getMessage()]);
    exit;
}

// Determinar si es paciente o admin
if(isset($data['cedula'])){ 
    // Login paciente
    $cedula = $data['cedula'];
    $password = $data['password'];

    try {
        $stmt = $pdo->prepare("SELECT id, nombre, role FROM usuarios WHERE cedula = ?");
        $stmt->execute([$cedula]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if($user && $user['role'] === 'paciente' && $password === $cedula){
            $_SESSION['id'] = $user['id'];
            $_SESSION['nombre'] = $user['nombre'];
            $_SESSION['role'] = 'paciente';
            echo json_encode(['success'=>true,'role'=>'paciente']);
            exit;
        }
        http_response_code(401);
        echo json_encode(['error'=>'Cédula o contraseña incorrecta']);
    } catch(PDOException $e){
        http_response_code(500);
        echo json_encode(['error'=>'Error al consultar la base de datos: '.$e->getMessage()]);
    }

} elseif(isset($data['username'])) { 
    // Login administrador
    $username = $data['username'];
    $password = $data['password'];

    try {
        $stmt = $pdo->prepare("SELECT id, nombre, role, password_hash FROM usuarios WHERE username = ?");
        $stmt->execute([$username]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if($user && $user['role'] === 'admin' && password_verify($password, $user['password_hash'])){
            $_SESSION['id'] = $user['id'];
            $_SESSION['nombre'] = $user['nombre'];
            $_SESSION['role'] = 'admin';
            echo json_encode(['success'=>true,'role'=>'admin']);
            exit;
        }
        http_response_code(401);
        echo json_encode(['error'=>'Usuario o contraseña incorrectos']);
    } catch(PDOException $e){
        http_response_code(500);
        echo json_encode(['error'=>'Error al consultar la base de datos: '.$e->getMessage()]);
    }
}
?>