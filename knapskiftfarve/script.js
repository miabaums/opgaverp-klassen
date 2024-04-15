// Hent knappen som variabel ved hjælp af dens id
const colorButton = document.getElementById('colorButton');

// Tilføj en eventlistener til knappen, der lytter efter et klik
colorButton.addEventListener('click', function() {
  // Generer tilfældige RGB-værdier mellem 0 og 255
  const red = Math.floor(Math.random() * 256); // Rød
  const green = Math.floor(Math.random() * 256); // Grøn
  const blue = Math.floor(Math.random() * 256); // Blå

  // Sammensæt RGB-værdier til en CSS farvestreng
  const randomColor = `rgb(${red}, ${green}, ${blue})`;

  // Skift baggrundsfarven for knappen til den tilfældige farve
  colorButton.style.backgroundColor = randomColor;
});