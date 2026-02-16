<?php
require "../config/database.php";

$stmt = $pdo->query("
SELECT a.id,a.code,a.schedule,
CONCAT(c.firstname,' ',c.lastname) as paciente,
a.status
FROM appointment_list a
JOIN client_list c ON a.client_id = c.id
ORDER BY a.date_created DESC
");

echo json_encode($stmt->fetchAll());
