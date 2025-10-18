function calculateCarbon() {
    let transport = parseInt(document.getElementById("transport").value);
    let diet = parseInt(document.getElementById("diet").value);
    let energy = parseInt(document.getElementById("energy").value);

    let total = transport + diet + energy;

    document.getElementById("result").innerHTML =
        "Your estimated daily carbon footprint is <b>" + total + " kg CO₂</b>.";
}

window.onscroll = function() {
  const button = document.getElementById("BackToTop");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};

document.getElementById("BackToTop").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});