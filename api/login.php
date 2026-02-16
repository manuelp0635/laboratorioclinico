<?php
require "../config/database.php";
session_start();

$data=json_decode(file_get_contents("php://input"),true);

$stmt=$pdo->prepare("SELECT * FROM usuarios WHERE email=?");
$stmt->execute([$data['email']]);
$user=$stmt->fetch(PDO::FETCH_ASSOC);

if($user && password_verify($data['password'],$user['password'])){

$_SESSION['user']=[
"id"=>$user['id'],
"nombre"=>$user['nombre'],
"role"=>$user['role'],
"permissions"=>explode(",",$user['permissions'])
];

echo json_encode(["success"=>true]);
}else{
http_response_code(401);
echo json_encode(["error"=>"Credenciales inválidas"]);
}
