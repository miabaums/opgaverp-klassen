// Henter de tre variabler, sun, moon og p-teksten
const sunIcon = document.getElementById('sun');
const moonIcon = document.getElementById('moon');
const modeIndicator = document.getElementById('mode-indicator');

// Funktion til at ændre tilstand til mørk mode, når eventlisteneren har opfanget et klik på månen
function darkMode() {
    // Hvis bodyen IKKE er mørk, bliver den mørk når der klikkes på månen 
  if (!document.body.classList.contains('dark')) {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
    // Ændrer teksten så den passer til tilstanden
    modeIndicator.textContent = 'Du har nu aktiveret mørk tilstand på hjemmesiden';
    // Hvis mørk tilstand er aktiv skal sol-ikonet ikke være fyldt
    sunIcon.classList.remove('fas');
    sunIcon.classList.add('far');
    // Hvis mørk tilstand er aktiv skal måne-ikonet være fyldt
    moonIcon.classList.remove('far');
    moonIcon.classList.add('fas');
    // Gemmer brugerens valg af tilstand i localStorage så den beholder samme tilstand på trods af refresh af siden
    localStorage.setItem('mode', 'dark');
  }
}

// Funktion til at ændre tilstand til lys mode, når eventlisteneren har opfanget et klik på solen
function lightMode() {
    // Hvis bodyen IKKE er lys, bliver den lys når der klikkes på solen 
  if (!document.body.classList.contains('light')) {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
    // Ændrer teksten så den passer til tilstanden
    modeIndicator.textContent = 'Du har nu aktiveret lys tilstand på hjemmesiden';
    // Hvis lys tilstand er aktiv skal måne-ikonet ikke være fyldt
    moonIcon.classList.remove('fas');
    moonIcon.classList.add('far');
     // Hvis lys tilstand er aktiv skal sol-ikonet være fyldt
    sunIcon.classList.remove('far');
    sunIcon.classList.add('fas');
    // Gemmer brugerens valg af tilstand i localStorage så den beholder samme tilstand på trods af refresh af siden
    localStorage.setItem('mode', 'light');
  }
}

// Tjekker om der er gemt en tidligere valgt tilstand i localStorage
const savedMode = localStorage.getItem('mode');
if (savedMode === 'dark') {
  darkMode(); // Hvis tidligere valgt tilstand er mørk mode, aktiverer vi det
} else {
  lightMode(); // Ellers aktiverer vi lys tilstand
}

// Eventlisteners, der lytter efter klik på de to ikon-elementer og som aktiverer funktionerne ved klik.
sunIcon.addEventListener('click', function() {
  lightMode(); // Når der klikkes på solikonet, aktiveres lys tilstand
});

moonIcon.addEventListener('click', function() {
  darkMode(); // Når der klikkes på måneikonet, aktiveres mørk tilstand
});

