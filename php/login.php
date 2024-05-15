<?php
// login.php

$dbHost = 'localhost';
$dbUser = 'root';
$dbPass = '12345678';
$dbName = 'diplomathesis';

$conn = new mysqli($dbHost, $dbUser, $dbPass, $dbName);

if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $hashedPassword = $_POST['hashedPassword'];

    $sql = "SELECT * FROM users WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('s', $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($hashedPassword, $row['passwordHash'])) {
            echo 'Login successful'; // You can customize this response
        } else {
            echo 'Invalid credentials'; // You can customize this response
        }
    } else {
        echo 'User not found'; // You can customize this response
    }
}else {
    echo 'Invalid request method'; // Handle other request methods (e.g., GET)
}

$stmt->close();
$conn->close();
?>