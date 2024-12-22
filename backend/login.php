<?php
include 'db_config.php';

// Login Function
function login($pdo, $username, $password) {
    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username");
    $stmt->bindParam(':username', $username);
    $stmt->execute();
     $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user['password'])) {
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];
        return "Login successful! Welcome, " . htmlspecialchars($user['username']) . ".";
        header("Location: app.html");
    } else {
        return "Invalid username or password.";
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if (!empty($username) && !empty($password)) {
        echo login($pdo, $username, $password);
    } else {
        echo "Both fields are required.";
    }
}
?>
