document.addEventListener('DOMContentLoaded', function() {
    const dimensionSelect = document.getElementById('dimension');
    const azContainer = document.getElementById('az-container');
    const bzContainer = document.getElementById('bz-container');
    const calcularBtn = document.getElementById('calcularBtn');
    
    const resultadoContenedor = document.getElementById('resultado-contenedor');
    const resultadoValor = document.getElementById('resultado-valor');
    const mensajeError = document.getElementById('mensaje-error');

    dimensionSelect.addEventListener('change', function() {
        if (this.value === '3') {
            azContainer.classList.remove('oculto');
            bzContainer.classList.remove('oculto');
        } else {
            azContainer.classList.add('oculto');
            bzContainer.classList.add('oculto');

            document.getElementById('az').value = '';
            document.getElementById('bz').value = '';
        }
    });

    calcularBtn.addEventListener('click', function() {
        mensajeError.classList.add('oculto');
        mensajeError.innerText = '';
        resultadoContenedor.classList.add('oculto');

        const dim = parseInt(dimensionSelect.value);

        const ax = parseFloat(document.getElementById('ax').value);
        const ay = parseFloat(document.getElementById('ay').value);
        const bx = parseFloat(document.getElementById('bx').value);
        const by = parseFloat(document.getElementById('by').value);
        
        let az = 0, bz = 0;
        if (dim === 3) {
            az = parseFloat(document.getElementById('az').value);
            bz = parseFloat(document.getElementById('bz').value);
        }

        let arregloValores = dim === 3 ? [ax, ay, az, bx, by, bz] : [ax, ay, bx, by];
        
        for (let i = 0; i < arregloValores.length; i++) {
            let valorActual = arregloValores[i];

            if (isNaN(valorActual) || valorActual <= 0) {
                mensajeError.innerText = "Error: Todos los campos deben contener números mayores a cero. No se permiten letras ni valores vacíos.";
                mensajeError.classList.remove('oculto');
                return;
            }
        }

        let distancia = 0;
        
        if (dim === 2) {
            distancia = Math.sqrt(Math.pow(bx - ax, 2) + Math.pow(by - ay, 2));
        } else {
            distancia = Math.sqrt(Math.pow(bx - ax, 2) + Math.pow(by - ay, 2) + Math.pow(bz - az, 2));
        }

        resultadoValor.innerText = distancia.toFixed(15); 
        resultadoContenedor.classList.remove('oculto');
    });
});