<?php

header('Content-Type: application/json; charset=utf-8');

$recipient = 'thevipertv20@gmail.com';

function respond(int $status, array $body): void
{
    http_response_code($status);
    echo json_encode($body);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, ['success' => false, 'error' => 'Only POST requests are allowed.']);
}

$data = json_decode(file_get_contents('php://input'), true);

if (!is_array($data)) {
    respond(400, ['success' => false, 'error' => 'Request body must be valid JSON.']);
}

$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$message = $data['message'] ?? '';

if (!is_string($name) || !is_string($email) || !is_string($message)) {
    respond(400, ['success' => false, 'error' => 'Name, email and message must be text.']);
}

// Line breaks are removed so nobody can smuggle extra mail headers in.
$name = trim(str_replace(["\r", "\n"], ' ', $name));
$email = trim($email);
$message = trim($message);

if ($name === '' || mb_strlen($name) > 100) {
    respond(400, ['success' => false, 'error' => 'Name is missing or too long.']);
}

if (mb_strlen($email) > 254 || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(400, ['success' => false, 'error' => 'Email address is not valid.']);
}

if (mb_strlen($message) < 3 || mb_strlen($message) > 5000) {
    respond(400, ['success' => false, 'error' => 'Message must be between 3 and 5000 characters.']);
}

$host = preg_replace('/[^a-z0-9.-]/', '', strtolower($_SERVER['SERVER_NAME'] ?? ''));
if ($host === '') {
    $host = 'localhost';
}

$subject = 'New message from your portfolio contact form';
$body = "Name: $name\nEmail: $email\n\nMessage:\n$message\n";
$headers = [
    'From' => "Portfolio <noreply@$host>",
    'Reply-To' => $email,
    'MIME-Version' => '1.0',
    'Content-Type' => 'text/plain; charset=utf-8',
];

if (!mail($recipient, $subject, $body, $headers)) {
    respond(500, ['success' => false, 'error' => 'The message could not be sent.']);
}

respond(200, ['success' => true]);
