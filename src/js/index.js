// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

//- Crea un botón en tu página HTML y añade un evento de click que muestre en la consola el texto del botón al hacer click.

const buttonElement = document.getElementById('button');

const textButtonElement = buttonElement.textContent;
const textClick = () => {
  console.log(textButtonElement);
};

buttonElement.addEventListener('click', textClick);

//- Crea un h1 con el texto "Soy un título ", al ponerte con el ratón encima del h1, deberá cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título"

const titleElement = document.getElementById('title');
const titleText = () => {
  titleElement.textContent = 'Quita de encima!!!';
};
const ogText = () => {
  titleElement.textContent = 'No soy un título';
};
titleElement.addEventListener('mouseenter', titleText);
titleElement.addEventListener('mouseleave', ogText);

//- Agrega un evento de cambio de tamaño de ventana y te muestre por consola el tamaño de la ventana.

//- Crea un p con el texto "esperando entrada de teclado" al pulsar cualquier tecla deberá poner qué tecla has pulsado.

const textElement = document.getElementById('text');
const pressKey = event => {
  textElement.textContent = event.key;
  console.log('hola');
};
window.addEventListener('keydown', pressKey);

//- Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el texto previus y next respectívamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera si pulsas next y cuando estés en la primera podrás volver a la última dandole a previous.
const subtitleElement = document.getElementById('subtitle');
const previousButtonElement = document.getElementById('previous');
const nextButtonElement = document.getElementById('next');
const fiveWordsArray = ['hola', 'me', 'llamo', 'Camila', 'jaja'];

let wordCounter = 0;

// const previousWord = () => {
//   if (wordCounter <= 0) {
//     wordCounter = fiveWordsArray.length - 1;
//   } else {
//     wordCounter--;
//   }
//   subtitleElement.textContent = fiveWordsArray[wordCounter];
// };
// const nextWord = () => {
//   if (wordCounter >= fiveWordsArray.length - 1) {
//     wordCounter = 0;
//   } else {
//     wordCounter++;
//   }
//   subtitleElement.textContent = fiveWordsArray[wordCounter];
// };

subtitleElement.textContent = fiveWordsArray[wordCounter];
const previousWordDisabled = () => {
  wordCounter--;
  nextButtonElement.disabled = false;
  if (wordCounter === 0) {
    previousButtonElement.disabled = true;
  }
  subtitleElement.textContent = fiveWordsArray[wordCounter];
};

const nextWordDisabled = () => {
  wordCounter++;
  previousButtonElement.disabled = false;
  if (wordCounter === fiveWordsArray.length - 1) {
    nextButtonElement.disabled = true;
  }
  subtitleElement.textContent = fiveWordsArray[wordCounter];
};

previousButtonElement.addEventListener('click', previousWordDisabled);
nextButtonElement.addEventListener('click', nextWordDisabled);

//- Repite el mismo ejercicio pero esta vez desactiva el botón previous si estás en el primer elemento y el botón next si estás en el último

//- Crea un input range con un label, al mover el input range deberá escribir en el label el valor del input range.

const labelElement = document.getElementById('label');
const rangeElement = document.getElementById('range');

const valueRange = event => {
  labelElement.textContent = rangeElement.value;
};
rangeElement.addEventListener('input', valueRange);

//- Crea una lista de 4 checkbox con el texto que quieras y un botón, al pulsar el botón deberá decirte cuantos checkbox están marcados y cual es su texto.

const checkButtonElement = document.getElementById('check-button');
const checkboxInfoElement = document.getElementById('check-info');

const getCheckboxInfo = () => {
  const inputsElements = document.querySelectorAll('input:checked');
  let resultText = `están marcados ${inputsElements.length} inputs.`;
  checkboxInfoElement.textContent = resultText;

  inputsElements.forEach((input, index) => {
    resultText += input.value;
    if (index < inputsElements.length - 1) {
      resultText += ', ';
    } else {
      resultText += '.';
    }
  });
};
checkButtonElement.addEventListener('click', getCheckboxInfo);
