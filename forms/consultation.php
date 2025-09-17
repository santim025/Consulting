<?php
// Configuración básica para el formulario de consultoría - Asoafil SAS
header('Content-Type: application/json');

// Validar que sea una petición POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}

// Validar campos requeridos
$required_fields = ['name', 'email', 'phone', 'service'];
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
$phone = htmlspecialchars($_POST['phone']);
$company = htmlspecialchars($_POST['company'] ?? 'No especificada');
$service = htmlspecialchars($_POST['service']);

// Email de destino
$to = 'info@asoafil.com';
$subject = 'Nueva Solicitud de Asesoría - Asoafil SAS - ' . $service;

// Crear el mensaje
$message = "Nueva solicitud de asesoría recibida:\n\n";
$message .= "Nombre: $name\n";
$message .= "Email: $email\n";
$message .= "Teléfono/WhatsApp: $phone\n";
$message .= "Empresa: $company\n";
$message .= "Servicio de Interés: $service\n\n";
$message .= "Fecha y hora: " . date('Y-m-d H:i:s') . "\n";

// Headers del email
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Intentar enviar el email
if (mail($to, $subject, $message, $headers)) {
    echo json_encode(['success' => true, 'message' => '¡Tu solicitud ha sido enviada exitosamente! Nos pondremos en contacto contigo pronto.']);
} else {
    // Si falla el envío por email, al menos guardar la información
    $log_entry = date('Y-m-d H:i:s') . " - Consultoría: $name ($email) - $service\n";
    file_put_contents('../logs/consultations.log', $log_entry, FILE_APPEND | LOCK_EX);
    
    echo json_encode(['success' => true, 'message' => '¡Tu solicitud ha sido recibida! Nos pondremos en contacto contigo pronto.']);
}
?>
