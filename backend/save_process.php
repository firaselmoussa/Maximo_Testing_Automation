<?php
include 'db_config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $process_id = $_POST['process_id'];
    $user_id = $_POST['user_id'];
    $name = $_POST['name'];
     $description = $_POST['description'];

    $stmt = $mysqli->prepare("INSERT INTO SAVED_PROCESS (PROCESS_ID, USER_ID, NAME, DESCRIPTION) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("iiss", $process_id, $user_id, $name, $description);

    if ($stmt->execute()) {
        echo "Record saved successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $mysqli->close();
}
?>
