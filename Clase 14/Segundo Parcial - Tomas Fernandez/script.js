document.addEventListener('DOMContentLoaded', function() {
    const tipoCalculo = document.getElementById('tipo-calculo');
    const camposSuperficie = document.getElementById('campos-superficie');
    const btnCalcular = document.getElementById('btn-calcular');
    const btnLimpiar = document.getElementById('btn-limpiar');
    
    const mensajeError = document.getElementById('mensaje-error');
    const mensajeResultado = document.getElementById('mensaje-resultado');
    const valorResultado = document.getElementById('valor-resultado');

    tipoCalculo.addEventListener('change', function() {
        if (this.value === 'superficie') {
            camposSuperficie.classList.remove('oculto');
        } else {
            camposSuperficie.classList.add('oculto');
        }
        ocultarMensajes();
    });

    btnCalcular.addEventListener('click', function() {
        ocultarMensajes();

        const tipo = tipoCalculo.value;
        
        const consumo = parseFloat(document.getElementById('consumo').value);
        const compensacion = parseFloat(document.getElementById('compensacion').value);
        const factor = parseFloat(document.getElementById('factor').value);
        const horas = parseFloat(document.getElementById('horas').value);
        const diasAnio = 365;

        if (isNaN(consumo) || consumo <= 0 || 
            isNaN(compensacion) || compensacion <= 0 || 
            isNaN(factor) || factor <= 0 || 
            isNaN(horas) || horas <= 0) {
            mostrarError("Por favor, ingresa valores válidos y mayores a cero en todos los campos.");
            return;
        }

        const compDecimal = compensacion / 100;
        const factDecimal = factor / 100;

        if (tipo === 'campo') {
            const potenciaCampo = (consumo * compDecimal * factDecimal) / (horas * diasAnio);
            mostrarResultado(`Potencia estimada: ${potenciaCampo.toFixed(3)} kW`);
            
        } else if (tipo === 'superficie') {
            const potenciaPanel = parseFloat(document.getElementById('potencia').value);
            const areaPanel = parseFloat(document.getElementById('area-panel').value);

            if (isNaN(potenciaPanel) || potenciaPanel <= 0 || 
                isNaN(areaPanel) || areaPanel <= 0) {
                mostrarError("Para calcular la superficie, completa la potencia y área por panel con valores mayores a cero.");
                return;
            }

            const superficieNecesaria = ((consumo * compDecimal * factDecimal) / (horas * diasAnio * potenciaPanel)) * areaPanel;
            mostrarResultado(`Superficie requerida: ${superficieNecesaria.toFixed(2)} m²`);
        }
    });

    btnLimpiar.addEventListener('click', function() {
        const inputs = document.querySelectorAll('input[type="number"]');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }
        ocultarMensajes();
        
        tipoCalculo.value = 'campo';
        camposSuperficie.classList.add('oculto');
    });

    function mostrarError(texto) {
        mensajeError.innerText = texto;
        mensajeError.classList.remove('oculto');
    }

    function mostrarResultado(texto) {
        valorResultado.innerText = texto;
        mensajeResultado.classList.remove('oculto');
    }

    function ocultarMensajes() {
        mensajeError.classList.add('oculto');
        mensajeResultado.classList.add('oculto');
    }
});