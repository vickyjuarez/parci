// Captura elementos
const slider = document.getElementById('slider');
const cantidadSlider = document.getElementById('cantidad-slider');
const convertirBtn = document.getElementById('convertir');
const resultado = document.getElementById('resultado');
const origenSelect = document.getElementById('divisa-origen');
const destinoSelect = document.getElementById('divisa-destino');

// Actualiza el valor del slider dinámicamente
slider.addEventListener('input', () => {
  cantidadSlider.textContent = slider.value;
});

// Tasas de cambio
const tasasCambio = {
  USD: { MXN: 20.49, COP: 4388.68, EUR: 0.92 },
  EUR: { MXN: 22.39, COP: 4791.80, USD: 1 / 0.92 },
  MXN: { COP: 213.87, USD: 1 / 20.49, EUR: 1 / 22.39 },

};

// Función para realizar la conversión
convertirBtn.addEventListener('click', () => {
  const cantidad = parseFloat(slider.value);
  const divisaOrigen = origenSelect.value;
  const divisaDestino = destinoSelect.value;

  // Validar conversión
  if (divisaOrigen === divisaDestino) {
    resultado.textContent = `Resultado: ${cantidad} ${divisaOrigen} = ${cantidad} ${divisaDestino}`;
    return;
  }

  // Realizar la conversión usando tasas de cambio
  const tasa = tasasCambio[divisaOrigen][divisaDestino];
  const cantidadConvertida = (cantidad * tasa).toFixed(2);

  // Mostrar resultado
  resultado.textContent = `Resultado: ${cantidad} ${divisaOrigen} = ${cantidadConvertida} ${divisaDestino}`;
});
