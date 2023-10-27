document.addEventListener("DOMContentLoaded", function() {
	const changeColorButton = document.getElementById("changeColorButton");
	const colors = ["#FF50F2", "#E9CBFF", "#FF004F", "#FFA800", "#B195D2"];
	let currentColorIndex = 0;

	changeColorButton.addEventListener("click", function() {
		document.body.style.backgroundColor = colors[currentColorIndex];
		currentColorIndex = (currentColorIndex + 1) % colors.length;
	});
});

document.addEventListener("DOMContentLoaded", function() {
	const changeWishesButton = document.getElementById("changeWishesButton");
	const wishes = [
		"May your day be as bright as your smile!",
		"Wishing you all the happiness in the world!",
		"Another year older, but still fabulous!",
		"May god make this your best year yet!"
	];
	let currentWishIndex = 0;

	const birthdayWishesElement = document.querySelector(".birthday-content p");

	changeWishesButton.addEventListener("click", function() {
		currentWishIndex = (currentWishIndex + 1) % wishes.length;
		birthdayWishesElement.textContent = wishes[currentWishIndex];
	});
});
