//Hent af billede som variabel
const img = document.querySelector('.OnOff');

const changeSrc = () => { 
 //Indsæt if else statement, som tjekker om billedet er tændt eller slukket
 if (img.src.includes("lightbulb-2.png")){
    img.src = "lightbulb.png";
 } else { 
    img.src = "lightbulb-2.png"
 }
 };

img.addEventListener("click", changeSrc); //Ved klik på billedet skal billedet skiftes