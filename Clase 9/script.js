const validators = {
    nombreCompleto: (value) => {
        if (value.length <= 6) return "El nombre debe tener más de 6 letras.";
        if (!value.includes(' ')) return "Debe tener al menos un espacio entre medio.";
        return null;
    },
    email: (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Ingresá un email válido.";
        return null;
    },
    contrasena: (value) => {
        if (value.length < 8) return "Debe tener al menos 8 caracteres.";
        const hasLetras = /[a-zA-Z]/.test(value);
        const hasNumeros = /[0-9]/.test(value);
        if (!hasLetras || !hasNumeros) return "Debe estar formada por letras y números.";
        return null;
    },
    repetirContrasena: (value) => {
        const pass = document.getElementById('contrasena').value.trim();
        if (value !== pass) return "Las contraseñas no coinciden.";
        return null;
    },
    edad: (value) => {
        const num = Number(value);
        if (!Number.isInteger(num) || num < 18) return "Debe ser un número entero mayor o igual a 18.";
        return null;
    },
    telefono: (value) => {
        const phoneRegex = /^\d{7,}$/;
        if (!phoneRegex.test(value)) return "Número de al menos 7 dígitos (sin espacios, guiones ni paréntesis).";
        return null;
    },
    direccion: (value) => {
        if (value.length < 5) return "Debe tener al menos 5 caracteres.";
        const hasLetras = /[a-zA-Z]/.test(value);
        const hasNumeros = /[0-9]/.test(value);
        const hasEspacioMedio = value.trim().includes(' ');
        
        if (!hasLetras || !hasNumeros || !hasEspacioMedio) {
            return "Debe contener letras, números y un espacio en el medio.";
        }
        return null;
    },
    ciudad: (value) => {
        if (value.length < 3) return "Debe tener al menos 3 caracteres.";
        return null;
    },
    codigoPostal: (value) => {
        if (value.length < 3) return "Debe tener al menos 3 caracteres.";
        return null;
    },
    dni: (value) => {
        const dniRegex = /^\d{7,8}$/;
        if (!dniRegex.test(value)) return "Debe ser un número de 7 u 8 dígitos.";
        return null;
    }
};

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.getElementById(`error-${fieldId}`);
    field.classList.add('error');
    errorDiv.textContent = message;
    errorDiv.classList.add('show');
}

function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.getElementById(`error-${fieldId}`);
    field.classList.remove('error');
    errorDiv.textContent = '';
    errorDiv.classList.remove('show');
}

function validateField(fieldId) {
    const field = document.getElementById(fieldId);
    const value = field.value.trim();
    
    if (!value) {
        showError(fieldId, 'Este campo es obligatorio');
        return false;
    }

    const validator = validators[fieldId];
    if (validator) {
        const error = validator(value);
        if (error) {
            showError(fieldId, error);
            return false;
        } else {
            clearError(fieldId);
            return true;
        }
    }
    return true;
}

const fields = Object.keys(validators);

fields.forEach(fieldId => {
    const field = document.getElementById(fieldId);
    
    field.addEventListener('blur', () => {
        validateField(fieldId);
    });
    
    field.addEventListener('focus', () => {
        clearError(fieldId);
    });
});

const nombreField = document.getElementById('nombreCompleto');
const titleElement = document.getElementById('dynamicTitle');

function updateTitle() {
    const nombre = nombreField.value.trim();
    if (nombre) {
        titleElement.textContent = `HOLA ${nombre.toUpperCase()}`;
    } else {
        titleElement.textContent = 'HOLA';
    }
}

nombreField.addEventListener('keydown', updateTitle);
nombreField.addEventListener('focus', updateTitle);
nombreField.addEventListener('input', updateTitle); 

const modal = document.getElementById('modal');
const closeBtn = document.getElementsByClassName('close')[0];

closeBtn.onclick = function() { modal.style.display = 'none'; }
window.onclick = function(event) {
    if (event.target == modal) { modal.style.display = 'none'; }
}

document.getElementById('mainForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let hasErrors = false;
    const errors = [];
    
    fields.forEach(fieldId => {
        if (!validateField(fieldId)) {
            hasErrors = true;
            const field = document.getElementById(fieldId);
            const label = document.querySelector(`label[for="${fieldId}"]`).textContent;
            const errorMsg = document.getElementById(`error-${fieldId}`).textContent;
            errors.push(`${label}: ${errorMsg}`);
        }
    });

    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    if (hasErrors) {
        modalTitle.textContent = 'Errores en el Formulario';
        modalBody.innerHTML = `
            <div class="error-list">
                <h3>Por favor, corregí los siguientes errores:</h3>
                <ul>
                    ${errors.map(error => `<li>${error}</li>`).join('')}
                </ul>
            </div>
        `;
    } else {
        modalTitle.textContent = '¡Suscripción Exitosa!';
        const formData = new FormData(this);
        let dataHtml = '';
        
        for (let [key, value] of formData.entries()) {
            if(key !== 'repetirContrasena') {
                const label = document.querySelector(`label[for="${key}"]`).textContent;
                const displayValue = key === 'contrasena' ? '********' : value;
                dataHtml += `
                    <div class="data-item">
                        <div class="data-label">${label}:</div>
                        <div>${displayValue}</div>
                    </div>
                `;
            }
        }
        modalBody.innerHTML = dataHtml;
    }
    
    modal.style.display = 'block';
});