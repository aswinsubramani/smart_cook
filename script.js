const Dish1 = "Biryani";
const Dish2 = "Sambar";
const Dish3 = "Rice";
const Dish4 = "Curd";

function showInputs(menuItem) {
    const inputsDiv = document.getElementById('inputs');
    const placeholderDiv = document.getElementById('placeholder');

    placeholderDiv.style.display = 'none';
    inputsDiv.style.display = 'block';

    const inputBoxes = [];
    for (let i = 0; i < 10; i++) {
        inputBoxes.push(`
            <div class="input-set">
                <h2>${menuItem} ${i + 1}</h2>
                <label for="low-temp-${i}">Low Temperature:</label>
                <input type="number" id="low-temp-${i}" name="low-temp-${i}">
                <label for="high-temp-${i}">High Temperature:</label>
                <input type="number" id="high-temp-${i}" name="high-temp-${i}">
                <label for="timer-${i}">Timer:</label>
                <input type="number" id="timer-${i}" name="timer-${i}">
                <label for="status-${i}">Status:</label>
                <select id="status-${i}" name="status-${i}">
                    <option value="ON">ON</option>
                    <option value="OFF">OFF</option>
                </select>
                <hr>
            </div>
        `);
    }

    inputsDiv.innerHTML = inputBoxes.join('');
    inputsDiv.innerHTML += `<button onclick="submitForm('${menuItem}')">Submit</button>`;
}

function submitForm(menuItem) {
    const data = [];

    for (let i = 0; i < 10; i++) {
        const lowTemp = document.getElementById(`low-temp-${i}`).value;
        const highTemp = document.getElementById(`high-temp-${i}`).value;
        const timer = document.getElementById(`timer-${i}`).value;
        const status = document.getElementById(`status-${i}`).value;

        data.push({ lowTemp, highTemp, timer, status });
    }

    console.log(data);
}

function validateTemps(low, high) {
    return true;
}

function disconnectWiFi() {
    fetch('/disconnect', {
        method: 'POST'
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        window.location.href = 'about:blank';
    })
    .catch(error => console.error('Error:', error));
}
