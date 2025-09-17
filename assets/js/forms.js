/**
 * Manejo de formularios sin backend para Asoafil SAS
 * Opciones: EmailJS, Formspree, o simulación local
 */

// Configuración para EmailJS (opcional - requiere registro gratuito)
const EMAILJS_CONFIG = {
    enabled: false, // Cambiar a true si configuras EmailJS
    serviceId: 'service_xxxxxx',
    consultationTemplateId: 'template_consultation',
    contactTemplateId: 'template_contact',
    publicKey: 'your_public_key'
};

// Inicializar EmailJS si está habilitado
if (EMAILJS_CONFIG.enabled) {
    emailjs.init(EMAILJS_CONFIG.publicKey);
}

/**
 * Enviar email usando EmailJS
 */
function sendEmailJS(templateId, formData) {
    return emailjs.send(
        EMAILJS_CONFIG.serviceId,
        templateId,
        formData,
        EMAILJS_CONFIG.publicKey
    );
}

/**
 * Enviar formulario usando Formspree (alternativa gratuita)
 */
function sendFormspree(formData, isConsultation = false) {
    // Necesitas registrarte en formspree.io y obtener tu endpoint
    const endpoint = isConsultation 
        ? 'https://formspree.io/f/your-consultation-form-id' 
        : 'https://formspree.io/f/your-contact-form-id';
    
    return fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });
}

/**
 * Enviar datos del formulario directamente a WhatsApp
 */
function sendToWhatsApp(formData, isConsultation = true) {
    const whatsappNumber = '573118407318'; // Tu número principal
    
    let message = '';
    
    if (isConsultation) {
        message = `NUEVA SOLICITUD DE ASESORIA - ASOAFIL SAS%0A%0A` +
                 `Nombre: ${formData.name}%0A` +
                 `Email: ${formData.email}%0A` +
                 `Telefono: ${formData.phone}%0A` +
                 `Empresa: ${formData.company}%0A` +
                 `Servicio: ${formData.service}%0A%0A` +
                 `Fecha: ${new Date().toLocaleString('es-CO')}%0A%0A` +
                 `Solicitud enviada desde el sitio web`;
    } else {
        message = `NUEVO MENSAJE DE CONTACTO - ASOAFIL SAS%0A%0A` +
                 `Nombre: ${formData.name}%0A` +
                 `Email: ${formData.email}%0A` +
                 `Asunto: ${formData.subject}%0A%0A` +
                 `Mensaje: ${formData.message}%0A%0A` +
                 `Fecha: ${new Date().toLocaleString('es-CO')}`;
    }
    
    // El mensaje ya está codificado con %0A para saltos de línea
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    // Abrir WhatsApp en una nueva ventana
    window.open(whatsappUrl, '_blank');
    
    return Promise.resolve({ ok: true });
}

/**
 * Manejar envío de formulario de consultoría
 */
function handleConsultationForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Mostrar estado de carga
    showLoadingState(form, true);
    
    // Preparar datos
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        company: formData.get('company') || 'No especificada',
        service: formData.get('service'),
        type: 'consultation',
        subject: `Nueva Solicitud de Asesoría - ${formData.get('service')} - Asoafil SAS`
    };
    
    // Validar datos
    if (!validateFormData(data, true)) {
        showError(form, 'Por favor completa todos los campos requeridos.');
        showLoadingState(form, false);
        return;
    }
    
    // Enviar a WhatsApp directamente
    sendToWhatsApp(data, true)
        .then((response) => {
            if (response.ok) {
                // Registrar conversión para Google Ads
                if (typeof trackConsultationRequest === 'function') {
                    trackConsultationRequest(data);
                }
                
                showSuccess(form, '¡Perfecto! Se ha abierto WhatsApp con tu información. Envía el mensaje y te responderemos pronto.');
                form.reset();
            } else {
                throw new Error('Error en el envío');
            }
        })
        .catch((error) => {
            console.error('Error sending consultation:', error);
            showError(form, 'Hubo un problema al enviar tu solicitud. Por favor, inténtalo de nuevo o contáctanos directamente.');
        })
        .finally(() => {
            showLoadingState(form, false);
        });
}

/**
 * Manejar envío de formulario de contacto
 */
function handleContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Mostrar estado de carga
    showLoadingState(form, true);
    
    // Preparar datos
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        type: 'contact'
    };
    
    // Validar datos
    if (!validateFormData(data, false)) {
        showError(form, 'Por favor completa todos los campos requeridos.');
        showLoadingState(form, false);
        return;
    }
    
    // Enviar a WhatsApp directamente
    sendToWhatsApp(data, false)
        .then((response) => {
            if (response.ok) {
                showSuccess(form, '¡Perfecto! Se ha abierto WhatsApp con tu mensaje. Envía y te responderemos pronto.');
                form.reset();
            } else {
                throw new Error('Error en el envío');
            }
        })
        .catch((error) => {
            console.error('Error sending contact:', error);
            showError(form, 'Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo o contáctanos directamente.');
        })
        .finally(() => {
            showLoadingState(form, false);
        });
}

/**
 * Validar datos del formulario
 */
function validateFormData(data, isConsultation) {
    const required = isConsultation 
        ? ['name', 'email', 'phone', 'service']
        : ['name', 'email', 'subject', 'message'];
    
    for (const field of required) {
        if (!data[field] || data[field].trim() === '') {
            return false;
        }
    }
    
    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        return false;
    }
    
    return true;
}

/**
 * Mostrar estado de carga
 */
function showLoadingState(form, isLoading) {
    const loading = form.querySelector('.loading');
    const button = form.querySelector('button[type="submit"]');
    
    if (loading) {
        loading.style.display = isLoading ? 'block' : 'none';
    }
    
    if (button) {
        button.disabled = isLoading;
        button.textContent = isLoading ? 'Enviando...' : (form.id === 'consultation-form' ? 'Enviar Solicitud' : 'Enviar Mensaje');
    }
}

/**
 * Mostrar mensaje de éxito
 */
function showSuccess(form, message) {
    hideMessages(form);
    const successDiv = form.querySelector('.sent-message');
    if (successDiv) {
        successDiv.textContent = message;
        successDiv.style.display = 'block';
        
        // Ocultar después de 5 segundos
        setTimeout(() => {
            successDiv.style.display = 'none';
        }, 5000);
    }
}

/**
 * Mostrar mensaje de error
 */
function showError(form, message) {
    hideMessages(form);
    const errorDiv = form.querySelector('.error-message');
    if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
        
        // Ocultar después de 5 segundos
        setTimeout(() => {
            errorDiv.style.display = 'none';
        }, 5000);
    }
}

/**
 * Ocultar todos los mensajes
 */
function hideMessages(form) {
    const messages = form.querySelectorAll('.sent-message, .error-message');
    messages.forEach(msg => msg.style.display = 'none');
}

/**
 * Crear enlaces de contacto directo (fallback)
 */
function createDirectContactLinks() {
    // WhatsApp link
    const whatsappLinks = document.querySelectorAll('.whatsapp, [href*="whatsapp"]');
    whatsappLinks.forEach(link => {
        link.href = 'https://wa.me/573181234567?text=Hola%20Asoafil%20SAS,%20me%20interesa%20información%20sobre%20sus%20servicios';
        link.target = '_blank';
    });
    
    // Email links
    const emailLinks = document.querySelectorAll('[href*="mailto"]');
    emailLinks.forEach(link => {
        link.href = 'mailto:info@asoafil.com?subject=Consulta%20-%20Asoafil%20SAS';
    });
}

/**
 * Inicializar cuando el DOM esté listo
 */
document.addEventListener('DOMContentLoaded', function() {
    // Vincular eventos de formularios
    const consultationForm = document.getElementById('consultation-form');
    if (consultationForm) {
        consultationForm.addEventListener('submit', handleConsultationForm);
    }
    
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Configurar enlaces de contacto directo
    createDirectContactLinks();
    
    console.log('📋 Sistema de formularios Asoafil SAS inicializado');
    console.log('💡 Datos guardados en:', localStorage.getItem('asoafil_consultations') ? 'Consultas encontradas' : 'Sin consultas aún');
});

// Función de utilidad para ver los datos guardados (para desarrollo)
window.asoafilData = {
    getConsultations: () => JSON.parse(localStorage.getItem('asoafil_consultations') || '[]'),
    getContacts: () => JSON.parse(localStorage.getItem('asoafil_contacts') || '[]'),
    clearData: () => {
        localStorage.removeItem('asoafil_consultations');
        localStorage.removeItem('asoafil_contacts');
        console.log('Datos limpiados');
    }
};