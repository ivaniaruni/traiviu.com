<?php
header("Access-Control-Allow-Origin: https://traiviu.com");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$host = "mysql.hostinger.com";
$user = "ivaniaruni";
$password = "Traiviucode7789";
$dbname = "users";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Connection failed:" . $conn->connect_error]));
}

$data = json_decode(file_get_contents("php://input"), true);

if (!$data || !isset($data['email'])) {
    echo json_encode(["status" => "error", "message" => "Invalid data"]);
    exit;
}

$email = $conn->real_escape_string($data['email']);
$sql = "INSERT INTO emails (email) VALUES ('$email')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["status" => "success", "message" => "Email saved successfully"]);
} else {
    echo json_encode(["status" => "error", "message" => "Error saving:" . $conn->error]);
}

$conn->close();
?>
