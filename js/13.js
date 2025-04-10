var cant = document.querySelector("#cant");
var jumbo = document.querySelector("#jumbo");
var familiar = document.querySelector("#familiar");
var grande = document.querySelector("#grande");
var individual = document.querySelector("#individual");
var especial = document.querySelector("#especial");
var alit = document.querySelector("#alit");
var soda = document.querySelector("#soda");
var nuggets = document.querySelector("#nuggets");
var btnPagar = document.querySelector("#btnPagar");

let total = 0;

cant.oninput = () => { pizza(); }
jumbo.onclick = () => { pizza(); }
familiar.onclick = () => { pizza(); }
grande.onclick = () => { pizza(); }
individual.onclick = () => { pizza(); }
especial.onchange = () => { pizza(); }
alit.onclick = () => { pizza(); }
soda.onclick = () => { pizza(); }
nuggets.onclick = () => { pizza(); }

const pizza = () => {
    document.querySelector("#vca").innerText = cant.value;
    let c = parseFloat(cant.value);
    let cos = 0;

    // Tamaño de la pizza
    if (jumbo.checked) { cos = 300; }
    if (familiar.checked) { cos = 250; }
    if (grande.checked) { cos = 200; }
    if (individual.checked) { cos = 170; }

    // Especialidad
    let por = 0;
    switch (parseInt(especial.value)) {
        case 1:
            por = 50;
            break;
        case 2:
            por = 80;
            break;
        case 3:
            por = 110;
            break;
        case 4:
            por = 140;
            break;
        default:
            por = 0;
            break;
    }

    // Complementos
    total = c * (cos + por);
    if (alit.checked) { total += 150; }
    if (soda.checked) { total += 50; }
    if (nuggets.checked) { total += 100; }

    // Actualizar el total
    document.querySelector("#total").innerText = `TOTAL $ ${total.toFixed(2)} MXN`;
}

// Manejo del pago
const manejarPago = () => {
    Swal.fire({
        title: 'Ingrese la cantidad de dinero',
        input: 'number',
        inputLabel: `El total a pagar es: $${total.toFixed(2)} MXN`,
        inputPlaceholder: 'Ingrese el monto aquí',
        confirmButtonText: 'Aceptar',
        showCancelButton: true,
    }).then((result) => {
        if (result.isConfirmed) {
            let pago = parseFloat(result.value);

            if (isNaN(pago) || pago <= 0) {
                // Alertar si el monto ingresado es inválido
                Swal.fire({
                    icon: 'error',
                    title: 'Monto inválido',
                    text: 'Por favor, ingrese un monto válido.'
                }).then(() => manejarPago()); // Abrir de nuevo la ventana automáticamente
                return;
            }

            if (pago < total) {
                let faltante = total - pago;
                // Alertar si el pago es insuficiente y abrir de nuevo la ventana
                Swal.fire({
                    icon: 'warning',
                    title: 'Pago insuficiente',
                    text: `Faltan $${faltante.toFixed(2)} MXN para completar el pago.`
                }).then(() => manejarPago()); // Abrir de nuevo la ventana automáticamente
            } else {
                let cambio = pago - total;
                // Alertar si el pago es suficiente y calcular el cambio
                Swal.fire({
                    icon: 'success',
                    title: 'Pago completado',
                    text: `¡Gracias por su compra! Su cambio es $${cambio.toFixed(2)} MXN.`
                });
            }
        }
    });
}

// Conectar el botón "PAGAR" a la función de manejo de pago
btnPagar.onclick = () => {
    manejarPago();
}
