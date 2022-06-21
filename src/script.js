const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const circlesArr = [
	["blue", 250, 210],
	["black", 350, 210],
	["red", 450, 210],
	["gold", 300, 250],
	["green", 400, 250],
];

let drawShape = (c, x, y, shape) => {
	ctx.beginPath();
	ctx.strokeStyle = c;
	ctx.lineWidth = 5;
	shape === "rect"
		? ctx.rect(x, y, 430, 200)
		: ctx.arc(x, y, 40, 0, 2 * Math.PI);
	ctx.stroke();
};

let drawLogo = () => {
	drawShape("lightgray", 140, 130, "rect");
	for (let i = 0; i < circlesArr.length; i++) {
		drawShape(circlesArr[i][0], circlesArr[i][1], circlesArr[i][2], "arc");
	}
};
