//Funksjon som lukker og Ã¥pner ikonboksen nÃ¥r knappen trykkes pÃ¥.

const buttonIkonForklaring = document.getElementById('ikonForklaringButton');
let ikonForklaring = document.getElementById("ulIkonForklaring");

buttonIkonForklaring.addEventListener('click', function() {
  borteTittTitt(ikonForklaring)});


function borteTittTitt(ulBox) {
  if (ulBox.style.display == 'none') {
    ulBox.style.display = 'inline-block';
  } else {
    ulBox.style.display = 'none';
  }
}