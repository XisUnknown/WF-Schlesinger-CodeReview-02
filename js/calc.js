function calculateInsurance() {
    var name = document.getElementById("name").value;
    var age = Number(document.getElementById("age").value);
    var country = document.getElementById("country").value;
    var horsepower = Number(document.getElementById("horsepower").value);
    var insurance = 0;
    var result = document.getElementById("result");
    switch (country) {
        case "Austria":
            insurance = horsepower * 100 / age + 50;
            break;
        case "Hungary":
            insurance = horsepower * 120 / age + 100;
            break;
        case "Greece":
            insurance = horsepower * 150 / (age + 3) + 50;
            break;
    }
    result.innerHTML = name + ", your insurance costs: " + Math.round(insurance * 100) / 100 + "€.";
}