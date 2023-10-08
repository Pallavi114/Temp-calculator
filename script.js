<!DOCTYPE html>
<html>
<head>
  <title>Temperature Converter</title>
</head>
<body>
  <h1>Temperature Converter</h1>
  <label for="celsius">Celsius:</label>
  <input type="number" id="celsius" placeholder="Enter Celsius">
  <br>
  <label for="fahrenheit">Fahrenheit:</label>
  <input type="number" id="fahrenheit" placeholder="Enter Fahrenheit">
  <br>
  <button onclick="convertTemperature()">Convert</button>
  <p id="result"></p>
  
  <script>
    function convertTemperature() {
      const celsiusInput = document.getElementById('celsius').value;
      const fahrenheitInput = document.getElementById('fahrenheit').value;
      const resultElement = document.getElementById('result');
      
      if (celsiusInput !== "") {
        const celsiusValue = parseFloat(celsiusInput);
        const convertedFahrenheit = (celsiusValue * 9/5) + 32;
        resultElement.innerHTML = `${celsiusValue} Celsius is ${convertedFahrenheit.toFixed(2)} Fahrenheit.`;
      } else if (fahrenheitInput !== "") {
        const fahrenheitValue = parseFloat(fahrenheitInput);
        const convertedCelsius = (fahrenheitValue - 32) * 5/9;
        resultElement.innerHTML = `${fahrenheitValue} Fahrenheit is ${convertedCelsius.toFixed(2)} Celsius.`;
      } else {
        resultElement.innerHTML = "Please enter a temperature value.";
      }
    }
  </script>
</body>
</html>
