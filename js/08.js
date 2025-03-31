// Selección de elementos
const filas = document.querySelector('#filas');
const columnas = document.querySelector('#columnas');
const color1 = document.querySelector('#color1');
const color2 = document.querySelector('#color2');
const texto = document.querySelector('#contenido');
const vFilas = document.querySelector('#vfilas');
const vColumnas = document.querySelector('#vcolumnas');
const tabla = document.querySelector('#soytabla');

// Función para crear la tabla
const creartabla = () => {
    // Limpiar la tabla antes de regenerarla
    tabla.innerHTML = "";

    // Obtener valores de los controles
    const f = parseInt(filas.value) || 1; // Valor predeterminado: 1 fila
    const c = parseInt(columnas.value) || 1; // Valor predeterminado: 1 columna
    const c1 = color1.value || "#ffffff"; // Color predeterminado: blanco
    const c2 = color2.value || "#000000"; // Color predeterminado: negro

    // Construcción del HTML de la tabla
    let tablaHTML = "";
    for (let i = 0; i < f; i++) {
        // Alterna los colores de las filas según el índice
        tablaHTML += (i % 2 === 0)
            ? `<tr style="background:${c1}">`
            : `<tr style="background:${c2}">`;

        for (let j = 0; j < c; j++) {
            tablaHTML += `<td>${texto.value || " "}</td>`;
        }
        tablaHTML += "</tr>";
    }

    // Inserta el HTML generado en la tabla
    tabla.innerHTML = tablaHTML;
};

// Eventos para actualizar dinámicamente
filas.oninput = () => {
    vFilas.innerHTML = filas.value; // Actualiza el valor visible
    creartabla(); // Genera la tabla
};

columnas.oninput = () => {
    vColumnas.innerHTML = columnas.value; // Actualiza el valor visible
    creartabla(); // Genera la tabla
};

color1.oninput = () => {
    creartabla(); // Actualiza la tabla cuando cambia el color 1
};

color2.oninput = () => {
    creartabla(); // Actualiza la tabla cuando cambia el color 2
};

texto.onkeyup = () => {
    creartabla(); // Actualiza la tabla cuando se ingresa texto
};
