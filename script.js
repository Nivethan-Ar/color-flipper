'use strict';

const changeBtn = document.querySelector('.btn');
const containerDiv = document.querySelector('.container');
const colorText = document.querySelector('.color');
const pageHeadingText = document.querySelector('.page-heading');
let randomColor;
const colorFlip = function () {
	randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
	containerDiv.style.backgroundColor = randomColor;
	colorText.textContent = randomColor;
	colorText.style.color = randomColor;
	pageHeadingText.style.color = randomColor;
};
colorFlip();

changeBtn.addEventListener('click', colorFlip);
