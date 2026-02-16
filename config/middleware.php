<?php
session_start();

function requireLogin(){
if(!isset($_SESSION['user'])){
http_response_code(401);
echo json_encode(["error"=>"No autenticado"]);
exit;
}
}

function requireRole($role){
requireLogin();
if($_SESSION['user']['role'] !== $role){
http_response_code(403);
echo json_encode(["error"=>"No autorizado"]);
exit;
}
}

function requirePermission($perm){
requireLogin();
if(!in_array($perm,$_SESSION['user']['permissions'])){
http_response_code(403);
echo json_encode(["error"=>"Sin permiso"]);
exit;
}
}
