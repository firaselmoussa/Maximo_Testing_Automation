<?php
include 'db_config.php';

$sql = "SELECT * FROM SAVED_PROCESS";
$result = $mysqli->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "ID: " . $row["ID"] . " - Process ID: " . $row["PROCESS_ID"] . " - User ID: " . $row["USER_ID"] . 
             " - Name: " . $row["NAME"] . " - Description: " . $row["DESCRIPTION"] . "<br>";
    }
} else {
    echo "No records found.";
}

$mysqli->close();
?>
