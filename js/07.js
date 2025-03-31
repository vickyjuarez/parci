// Botones para cambiar interfaces
const btnCuadrado = document.getElementById('btncu');
const btnRectangulo = document.getElementById('btnre');
const btnTriangulo = document.getElementById('btntri');
const btnCirculo = document.getElementById('btnci');

// Interfaces
const squareInterface = document.getElementById('squareInterface');
const rectangleInterface = document.getElementById('rectangleInterface');
const triangleInterface = document.getElementById('triangleInterface');
const circleInterface = document.getElementById('circleInterface');

// Función para mostrar/ocultar interfaces
function switchInterface(activeInterface) {
    squareInterface.style.display = 'none';
    rectangleInterface.style.display = 'none';
    triangleInterface.style.display = 'none';
    circleInterface.style.display = 'none';
    activeInterface.style.display = 'flex';
}

// Evento de cambio de interfaces
btnCuadrado.addEventListener('click', () => switchInterface(squareInterface));
btnRectangulo.addEventListener('click', () => switchInterface(rectangleInterface));
btnTriangulo.addEventListener('click', () => switchInterface(triangleInterface));
btnCirculo.addEventListener('click', () => switchInterface(circleInterface));

// Lógica para cálculo del área de cada figura

// Cuadrado
const rangeSquare = document.getElementById('rangeSquare');
const valueSquare = document.getElementById('valueSquare');
const resultSquare = document.getElementById('resultSquare');

rangeSquare.oninput = () => {
    const side = parseInt(rangeSquare.value);
    valueSquare.textContent = side;
    resultSquare.textContent = `Área: ${side * side}`;
};

// Rectángulo
const rangeBase = document.getElementById('rangeBase');
const rangeHeight = document.getElementById('rangeHeight');
const valueBase = document.getElementById('valueBase');
const valueHeight = document.getElementById('valueHeight');
const resultRectangle = document.getElementById('resultRectangle');

rangeBase.oninput = calculateRectangleArea;
rangeHeight.oninput = calculateRectangleArea;

function calculateRectangleArea() {
    const base = parseInt(rangeBase.value);
    const height = parseInt(rangeHeight.value);
    valueBase.textContent = base;
    valueHeight.textContent = height;
    resultRectangle.textContent = `Área: ${base * height}`;
}

// Triángulo
const rangeBaseTriangle = document.getElementById('rangeBaseTriangle');
const rangeHeightTriangle = document.getElementById('rangeHeightTriangle');
const valueBaseTriangle = document.getElementById('valueBaseTriangle');
const valueHeightTriangle = document.getElementById('valueHeightTriangle');
const resultTriangle = document.getElementById('resultTriangle');

rangeBaseTriangle.oninput = calculateTriangleArea;
rangeHeightTriangle.oninput = calculateTriangleArea;

function calculateTriangleArea() {
    const base = parseInt(rangeBaseTriangle.value);
    const height = parseInt(rangeHeightTriangle.value);
    valueBaseTriangle.textContent = base;
    valueHeightTriangle.textContent = height;
    resultTriangle.textContent = `Área: ${(base * height) / 2}`;
}

// Círculo
const rangeRadius = document.getElementById('rangeRadius');
const valueRadius = document.getElementById('valueRadius');
const resultCircle = document.getElementById('resultCircle');

rangeRadius.oninput = () => {
    const radius = parseInt(rangeRadius.value);
    valueRadius.textContent = radius;
    const area = Math.PI * radius * radius;
    resultCircle.textContent = `Área: ${area.toFixed(2)}`; // Limitar a 2 decimales
};
// --- Lógica para Trapecio ---
const rangeBaseMajor = document.getElementById('rangeBaseMajor');
const valueBaseMajor = document.getElementById('valueBaseMajor');
const rangeBaseMinor = document.getElementById('rangeBaseMinor');
const valueBaseMinor = document.getElementById('valueBaseMinor');
const rangeHeightTrapezoid = document.getElementById('rangeHeightTrapezoid');
const valueHeightTrapezoid = document.getElementById('valueHeightTrapezoid');
const resultTrapezoid = document.getElementById('resultTrapezoid');

// Actualización dinámica de los valores seleccionados
rangeBaseMajor.addEventListener('input', () => {
    valueBaseMajor.textContent = rangeBaseMajor.value;
    updateTrapezoid();
});
rangeBaseMinor.addEventListener('input', () => {
    valueBaseMinor.textContent = rangeBaseMinor.value;
    updateTrapezoid();
});
rangeHeightTrapezoid.addEventListener('input', () => {
    valueHeightTrapezoid.textContent = rangeHeightTrapezoid.value; // Corrección realizada
    updateTrapezoid();
});

// Cálculo del área del trapecio
function updateTrapezoid() {
    const baseMajor = parseInt(rangeBaseMajor.value);
    const baseMinor = parseInt(rangeBaseMinor.value);
    const height = parseInt(rangeHeightTrapezoid.value);
    const area = ((baseMajor + baseMinor) * height) / 2;
    resultTrapezoid.textContent = `Área: ${area}`;
}


// --- Lógica para Hexágono ---
const rangeSideHexagon = document.getElementById('rangeSideHexagon');
const valueSideHexagon = document.getElementById('valueSideHexagon');
const resultHexagon = document.getElementById('resultHexagon');

// Actualización dinámica del valor del lado seleccionado
rangeSideHexagon.addEventListener('input', () => {
    valueSideHexagon.textContent = rangeSideHexagon.value;
    updateHexagon();
});

// Cálculo del área del hexágono
function updateHexagon() {
    const side = parseInt(rangeSideHexagon.value);
    const area = (3 * Math.sqrt(3) * Math.pow(side, 2)) / 2;
    resultHexagon.textContent = `Área: ${area.toFixed(2)}`;
}

// --- Lógica para alternar entre interfaces ---
const btntra = document.getElementById('btntra');
const btnhex = document.getElementById('btnhex');

btntra.addEventListener('click', () => {
    hideAllInterfaces();
    document.getElementById('trapezoidInterface').style.display = 'flex';
});

btnhex.addEventListener('click', () => {
    hideAllInterfaces();
    document.getElementById('hexagonInterface').style.display = 'flex';
});

function hideAllInterfaces() {
    document.getElementById('squareInterface').style.display = 'none';
    document.getElementById('rectangleInterface').style.display = 'none';
    document.getElementById('triangleInterface').style.display = 'none';
    document.getElementById('circleInterface').style.display = 'none';
    document.getElementById('trapezoidInterface').style.display = 'none';
    document.getElementById('hexagonInterface').style.display = 'none';
}
