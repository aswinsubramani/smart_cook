let briyaniTemps = { low: null, high: null };
let sambarTemps = { low: null, high: null };
let riceTemps = { low: null, high: null };
let curdTemps = { low: null, high: null };

function showInputs(menuItem) {
    const inputsDiv = document.getElementById('inputs');
    const placeholderDiv = document.getElementById('placeholder');

    placeholderDiv.style.display = 'none';
    inputsDiv.style.display = 'block';

    fetch(`/settings?dish=${menuItem}`)
        .then(response => response.text())
        .then(data => {
            const [low, high] = data.split(',');
            let tempValues = { low, high };

            if (menuItem === Dish1)
            {
                briyaniTemps = tempValues;
            } 
            else if (menuItem === Dish2) 
            {
                sambarTemps = tempValues;
            }
            else if (menuItem === Dish3) 
            {
                riceTemps = tempValues;
            }
            else if (menuItem === Dish4)
            {
                curdTemps = tempValues;
            }

            inputsDiv.innerHTML = `
                <h2>${menuItem}</h2>
                <label for="low-temp">Low Temperature:</label>
                <input type="number" id="low-temp" name="low-temp" value="${tempValues.low || ''}">
                <label for="high-temp">High Temperature:</label>
                <input type="number" id="high-temp" name="high-temp" value="${tempValues.high || ''}">
                <button onclick="submitForm('${menuItem}')">Submit</button>
            `;
        })
        .catch(error => console.error('Error:', error));
}

function submitForm(menuItem) 
{
    const lowTemp = document.getElementById('low-temp').value;
    const highTemp = document.getElementById('high-temp').value;

    // if (validateTemps(lowTemp, highTemp)) {
    //     fetch('/save', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         },
    //         body: `dish=${menuItem}&low=${lowTemp}&high=${highTemp}`
    //     })
    //     .then(response => response.text())
    //     .then(data => {
    //         alert(data);
    //     })
    //     .catch(error => console.error('Error:', error));
    // }
}

function validateTemps(low, high) {
    return true;
}

// function disconnectWiFi() {
//     fetch('/disconnect', {
//         method: 'POST'
//     })
//     .then(response => response.text())
//     .then(data => {
//         alert(data);
//         window.location.href = 'about:blank';
//     })
//     .catch(error => console.error('Error:', error));
// }