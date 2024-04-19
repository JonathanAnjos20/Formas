function calculateCircleArea() {
    const radius = document.getElementById('radius').value;
    const area = Math.PI * Math.pow(radius, 2);
    document.getElementById('circleResult').innerText = `Área: ${area.toFixed(2)}`;
  }
  
  function calculateSquareArea() {
    const side = document.getElementById('sideSquare').value;
    const area = Math.pow(side, 2);
    document.getElementById('squareResult').innerText = `Área: ${area}`;
  }
  
  function calculateTriangleArea() {
    const side = document.getElementById('sideTriangle').value;
    const area = (Math.pow(side, 2) * Math.sqrt(3)) / 4;
    document.getElementById('triangleResult').innerText = `Área: ${area.toFixed(2)}`;
  }
  
  function calculateCuboidArea() {
    const length = document.getElementById('length').value;
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;
    const area = 2 * (length * width + width * height + height * length);
    document.getElementById('cuboidResult').innerText = `Área: ${area}`;
  }
  
  function calculateRhomboidArea() {
    const diagonal1 = document.getElementById('diagonal1').value;
    const diagonal2 = document.getElementById('diagonal2').value;
    const area = (diagonal1 * diagonal2) / 2;
    document.getElementById('rhomboidResult').innerText = `Área: ${area}`;
  }
  
  function calculateIrregularTrapezoidArea() {
    const base1 = document.getElementById('base1').value;
    const base2 = document.getElementById('base2').value;
    const heightTrapezoid = document.getElementById('heightTrapezoid').value;
    const area = (parseFloat(base1) + parseFloat(base2)) * parseFloat(heightTrapezoid) / 2;
    document.getElementById('irregularTrapezoidResult').innerText = `Área: ${area}`;
  }
  
  function calculateRegularPolygonArea() {
    const radiusPolygon = document.getElementById('radiusPolygon').value;
    const sides = document.getElementById('sides').value;
    const area = (sides * Math.pow(radiusPolygon, 2) * Math.sin(2 * Math.PI / sides)) / 2;
    document.getElementById('regularPolygonResult').innerText = `Área: ${area.toFixed(2)}`;
  }
  
  function calculateCubeArea() {
    const sideCube = document.getElementById('sideCube').value;
    const area = 6 * Math.pow(sideCube, 2);
    document.getElementById('cubeResult').innerText = `Área: ${area}`;
  }
  