// Hent knap som variabel
const btn = document.getElementById('btn');

// Lav en funktion med navnet "alertKnap" med en alertbesked inden i
function alertKnap() {
  alert("BØH!!!");
}

// Eventlistener på knappen
btn.addEventListener('click', alertKnap);