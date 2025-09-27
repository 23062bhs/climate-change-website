function calculateCarbon() {
    let transport = parseInt(document.getElementById("transport").value);
    let diet = parseInt(document.getElementById("diet").value);
    let energy = parseInt(document.getElementById("energy").value);

    let total = transport + diet + energy;

    document.getElementById("result").innerHTML =
        "Your estimated daily carbon footprint is <b>" + total + " kg CO₂</b>.";
}