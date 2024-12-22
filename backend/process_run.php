<?php
include 'db_config.php';

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $rawData = file_get_contents('php://input');
    $data = json_decode($rawData, true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        echo json_encode(['error' => 'Invalid JSON payload']);
        exit();

    }
    if (!isset($data['env'], $data['pocess']) ||
        !isset($data['env']['url'], $data['env']['user'], $data['env']['pass']) ||
        !is_array($data['pocess'])) {
        echo json_encode(['error' => 'Missing required fields']);
        exit();
    }
    $serverUrl = ''; 

    $ch = curl_init($serverUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
     curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    
     curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Accept: application/json'
    ]);

    $response = curl_exec($ch);

    if (curl_errno($ch)) {
        echo json_encode(['error' => 'Request failed: ' . curl_error($ch)]);
        curl_close($ch);
    exit();
    }

    curl_close($ch);
    echo $response;
} else {
    echo json_encode(['error' => 'Invalid request method']);
}
?>
