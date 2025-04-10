let timeout; // Variable para manejar el retraso

function updateHeight(value) {
  document.getElementById("height-value").textContent = value;
  calculateWithDelay();
}

function updateWeight(value) {
  document.getElementById("weight-value").textContent = value;
  calculateWithDelay();
}

function calculateWithDelay() {
  // Mostrar un GIF de carga mientras se espera
  const resultElement = document.getElementById("bmi-result");
  resultElement.innerHTML = "<img src='img/mine.gif' width='200px' height='200px' alt='Cargando...' class='m-auto'>";

  // Limpiar cualquier cálculo anterior
  clearTimeout(timeout);

  // Calcular el IMC después de un retraso de 500ms
  timeout = setTimeout(() => {
    calculateBMI();
  }, 500);
}

function calculateBMI() {
  const height = document.getElementById("height").value / 100; // Convertir a metros
  const weight = document.getElementById("weight").value;
  const bmi = (weight / (height * height)).toFixed(2);

  const resultElement = document.getElementById("bmi-result");

  // Determinar la clasificación del IMC y mostrar el resultado
  if (bmi < 18.5) {
    resultElement.innerHTML = `Tu IMC es ${bmi}: Bajo peso`;
    resultElement.style.color = "#FFCCCB"; // Rojo claro
  } else if (bmi < 24.9) {
    resultElement.innerHTML = `Tu IMC es ${bmi}: Peso normal`;
    resultElement.style.color = "#90EE90"; // Verde claro
  } else if (bmi < 29.9) {
    resultElement.innerHTML = `Tu IMC es ${bmi}: Sobrepeso`;
    resultElement.style.color = "#FFA07A"; // Naranja claro
  } else {
    resultElement.innerHTML = `Tu IMC es ${bmi}: Obesidad`;
    resultElement.style.color = "#F08080"; // Rojo fuerte
  }
}
