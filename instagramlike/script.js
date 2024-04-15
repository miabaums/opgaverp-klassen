// Henter ikon-elementet og div-elementet ind som variabler
const heartIcon = document.getElementById('heart');
const image = document.getElementById('image');

// Toggler så der skiftes mellem hjerteikonets fyldte og tomme tilstand. Far står for Font Awsome Regular og Fas står for Font Awesome Solid 
function toggleLike() {
  heartIcon.classList.toggle('far');
  heartIcon.classList.toggle('fas');
}

// Eventlisteneren "lytter" efter et dobbeltklik på billedet og aktiverer ovenstående funktion når der dobbeltklikkes 
image.addEventListener('dblclick', function() {
  toggleLike();
});

// Eventlisteneren "lytter" efter et enkelt klik på hjertet og aktiverer ovenstående funktion når der blot klikkes en enkelt gang 
heartIcon.addEventListener('click', function() {
    toggleLike();
  });