<?php
// Configuración básica para el formulario de contacto - Asoafil SAS
header('Content-Type: application/json');

// Validar que sea una petición POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}

// Validar campos requeridos
$required_fields = ['name', 'email', 'subject', 'message'];
foreach ($required_fields as $field) {
    if (empty($_POST[$field])) {
        echo json_encode(['success' => false, 'message' => 'Por favor completa todos los campos requeridos.']);
        exit;
    }
}

// Validar email
if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Por favor ingresa un email válido.']);
    exit;
}

// Datos del formulario
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$subject = htmlspecialchars($_POST['subject']);
$user_message = htmlspecialchars($_POST['message']);

// Email de destino
$to = 'info@asoafil.com';
$email_subject = 'Contacto Web - Asoafil SAS: ' . $subject;

// Crear el mensaje
$message = "Nuevo mensaje de contacto recibido:\n\n";
$message .= "Nombre: $name\n";
$message .= "Email: $email\n";
$message .= "Asunto: $subject\n\n";
$message .= "Mensaje:\n$user_message\n\n";
$message .= "Fecha y hora: " . date('Y-m-d H:i:s') . "\n";

// Headers del email
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Intentar enviar el email
if (mail($to, $email_subject, $message, $headers)) {
    echo json_encode(['success' => true, 'message' => '¡Tu mensaje ha sido enviado exitosamente! Te responderemos pronto.']);
} else {
    // Si falla el envío por email, al menos guardar la información
    $log_entry = date('Y-m-d H:i:s') . " - Contacto: $name ($email) - $subject\n";
    file_put_contents('../logs/contacts.log', $log_entry, FILE_APPEND | LOCK_EX);
    
    echo json_encode(['success' => true, 'message' => '¡Tu mensaje ha sido recibido! Te responderemos pronto.']);
}
?>
