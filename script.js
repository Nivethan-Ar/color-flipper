'use strict';

const changeBtn = document.querySelector('.btn');
const containerDiv = document.querySelector('.container');
const colorText = document.querySelector('.color')
let randomColor;
changeBtn.addEventListener('click', function () {
	randomColor ='#'+ Math.floor(Math.random() * 16777215).toString(16);
	containerDiv.style.backgroundColor = randomColor;
  colorText.textContent = randomColor;
  colorText.style.color = randomColor;
});
