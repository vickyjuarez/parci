// Selección de elementos
var ancho = document.getElementById("ancho");
var alto = document.getElementById("alto");
var color1 = document.getElementById("colorfondo1");
var color2 = document.getElementById("colorfondo2");
var radius = document.getElementById("radius");
var borde = document.getElementById("borde");
var colorBorde = document.getElementById("colorBorde");
var figura = document.getElementById("figura");

// Asignación de eventos dinámicos
ancho.oninput = () => { crearfigura(); };
alto.oninput = () => { crearfigura(); };
color1.oninput = () => { crearfigura(); }; // Cambiado de onchange a oninput para actualizaciones instantáneas
color2.oninput = () => { crearfigura(); }; // Cambiado de onchange a oninput para actualizaciones instantáneas
radius.oninput = () => { crearfigura(); };
borde.oninput = () => { crearfigura(); };
colorBorde.oninput = () => { crearfigura(); };

// Función para generar la figura dinámica
const crearfigura = () => {
    // Obtener valores de los inputs
    let anchofigura = parseInt(ancho.value) || 0; // Valores seguros con fallback
    let altofigura = parseInt(alto.value) || 0;
    let rad = parseInt(radius.value) || 0;
    let b = parseInt(borde.value) || 0;
    let colorfondo1 = color1.value || "#ffffff"; // Valores predeterminados en caso de vacío
    let colorfondo2 = color2.value || "#000000";
    let colorB = colorBorde.value || "#000000";

    // Actualizar valores mostrados en pantalla
    document.getElementById("vancho").innerHTML = anchofigura + "px";
    document.getElementById("valto").innerHTML = altofigura + "px";
    document.getElementById("vradius").innerHTML = rad + "%";
    document.getElementById("vborde").innerHTML = b + "px";

    // Aplicar estilos a la figura
    figura.style.width = anchofigura + "px";
    figura.style.height = altofigura + "px";
    figura.style.background = `radial-gradient(circle, ${colorfondo1} 0%, ${colorfondo2} 100%)`;
    figura.style.borderRadius = rad + "%";
    figura.style.borderWidth = b + "px";
    figura.style.borderStyle = "solid";
    figura.style.borderColor = colorB;
};
