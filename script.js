const calculateBtn = document.getElementById("calculateBtn");
const infosDiv = document.getElementById("infos");
const valueSpan = document.getElementById("value");
const descriptionSpan = document.getElementById("description");

calculateBtn.addEventListener("click", function() {
    const weightInput = document.getElementById("weight");
    const heightInput = document.getElementById("height");
    const weight = weightInput.value;
    const height = heightInput.value;

    if (weight === "" || height === "") {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    const bmi = calculateBMI(weight, height);
    displayResult(bmi);
});

function calculateBMI(weight, height) {
    const heightInMeters = parseFloat(height);
    return (weight / (heightInMeters * heightInMeters)).toFixed(2);
}

function displayResult(bmi) {
    infosDiv.style.display = "block";

    let description = "";
    let colorClass = "";

    if (bmi < 16.9) {
        description = "Cuidado! Estás muito abaixo do peso.";
        colorClass = "attention";
    } else if (bmi >= 17 && bmi <= 18.4) {
        description = "Estás abaixo do peso.";
        colorClass = "attention";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        description = "Estás no peso normal.";
        colorClass = "normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        description = "Estás acima do peso.";
        colorClass = "normal";
    } else if (bmi >= 30 && bmi <= 34.9) {
        description = "Cuidado! Estás com obesidade grau I";
        colorClass = "attention";
    } else if (bmi >= 35 && bmi <= 40) {
        description = "Cuidado! Estás com obesidade grau II";
        colorClass = "attention";
    } else {
        description = "Cuidado! Estás com obesidade grau III";
        colorClass = "attention";
    }

    valueSpan.textContent = bmi.replace(".", ",");
    valueSpan.classList.remove("normal", "attention");
    valueSpan.classList.add(colorClass);
    descriptionSpan.textContent = description;
}