var player = document.getElementById("player");

document.addEventListener("keydown", function(event) {
	if (event.keyCode === 37) {
		moveLeft();
	} else if (event.keyCode === 39) {
		moveRight();
	}
});

function moveLeft() {
	var left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
	if (left > 0) {
		player.style.left = left - 10 + "px";
	}
}

function moveRight() {
	var left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
	if (left < 550) {
		player.style.left = left + 10 + "px";
	}
}