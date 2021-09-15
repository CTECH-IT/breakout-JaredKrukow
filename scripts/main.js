let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let x = canvas.width/2;
let y = canvas.height-30;

let dx = 2;
let dy = -2;

let ballRadius = 10;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    // clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw the ball
    drawBall();
    
    // change the x and y values for the ball
    x += dx;
    y += dy;

    // check to see if we're gone off the edge of the board
    if (x > canvas.width || y < 0) {
        dx = -dx;
    }
    if(y > canvas.height || y < 0) {
        dy = -dy;
    }
    
}
setInterval(draw, 10);