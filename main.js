$("canvas").clickFireworks({
    id: 'fireworks',
    appendTo: 'body',
    zIndex: 1000
})


let drawCircle = function (x, y, radius) {
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2, false);
    context.closePath();
    context.stroke();
}

let drawWindow = function(context) {
    context.clearRect(0,0,canvas.width,canvas.height);
}

canvas = document.getElementById("canvas")
context = canvas.getContext('2d');

document.addEventListener('mousemove', function(event) {
    xMouse = event.clientX;
    yMouse = event.clientY;
});	


function animate() {
    requestAnimationFrame(animate)
    drawWindow(context);
    
    drawCircle(xMouse, yMouse, 20);
}

animate()

