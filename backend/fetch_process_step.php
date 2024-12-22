<?php
include 'db_config.php';

try {
    $sql = "SELECT * FROM PROCESS_STEP";
     $result = $mysqli->query($sql);
    $process_steps = [];

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $process_steps[] = $row;
        }
    }

} catch (Exception $e) {
     error_log("Error fetching PROCESS_STEP records: " . $e->getMessage());
} finally {
    $mysqli->close();
}

echo json_encode($process_steps);
?>
