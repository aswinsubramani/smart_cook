let briyaniTemps = { low: null, high: null, current: null };
let sambarTemps = { low: null, high: null, current: null };
let riceTemps = { low: null, high: null, current: null };

function showInputs(menuItem) {
    const inputsDiv = document.getElementById('inputs');
    const placeholderDiv = document.getElementById('placeholder');

    placeholderDiv.style.display = 'none';
    inputsDiv.style.display = 'block';

    let tempValues;
    if (menuItem === 'Briyani') {
        tempValues = briyaniTemps;
    } else if (menuItem === 'Sambar') {
        tempValues = sambarTemps;
    } else if (menuItem === 'Rice') {
        tempValues = riceTemps;
    }

    inputsDiv.innerHTML = `
        <h2>${menuItem}</h2>
        <label for="low-temp">Low Temperature:</label>
        <input type="number" id="low-temp" name="low-temp" value="${tempValues.low || ''}">
        <label for="high-temp">High Temperature:</label>
        <input type="number" id="high-temp" name="high-temp" value="${tempValues.high || ''}">
        <label for="current-temp">Current Temperature:</label>
        <input type="number" id="current-temp" name="current-temp" value="${tempValues.current || ''}">
        <button onclick="submitForm('${menuItem}')">Submit</button>
    `;
}

function submitForm(menuItem) {
    const lowTemp = document.getElementById('low-temp').value;
    const highTemp = document.getElementById('high-temp').value;
    const currentTemp = document.getElementById('current-temp').value;

    if (menuItem === 'Briyani') {
        briyaniTemps.low = lowTemp;
        briyaniTemps.high = highTemp;
        briyaniTemps.current = currentTemp;
    } else if (menuItem === 'Sambar') {
        sambarTemps.low = lowTemp;
        sambarTemps.high = highTemp;
        sambarTemps.current = currentTemp;
    } else if (menuItem === 'Rice') {
        riceTemps.low = lowTemp;
        riceTemps.high = highTemp;
        riceTemps.current = currentTemp;
    }

    alert(`Submitted values for ${menuItem}:\nLow Temperature: ${lowTemp}\nHigh Temperature: ${highTemp}\nCurrent Temperature: ${currentTemp}`);
}
