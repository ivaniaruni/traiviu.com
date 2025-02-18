<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$host = "localhost";
$dbname = "u389706336_users_db";
$username = "u389706336_ivan_iaruni";
$password = "Traiviucode7789";

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Error connecting to the database"]));
}

$data = json_decode(file_get_contents("php://input"), true);
$email = filter_var($data["email"], FILTER_SANITIZE_EMAIL);

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["status" => "error", "message" => "Invalid email format"]);
    exit;
}

$stmt = $conn->prepare("INSERT INTO users (email) VALUES (?)");
$stmt->bind_param("s", $email);

if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "Mail saved successfully"]);
} else {
    echo json_encode(["status" => "error", "message" => "Error saving email"]);
}

$stmt->close();
$conn->close();
?>