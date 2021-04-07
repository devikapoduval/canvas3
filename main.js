var mouseEvent="";
var last_position_of_X,last_position_of_Y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="black";
width_of_line=5;

canvas.addEventListener("mousedown",my_mousedown)

function my_mousedown(e){
    color=document.getElementById("colour").value;
width_of_line=document.getElementById("width_of_line").value;

    mouseEvent="mouseDown"
}

canvas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(e){
    mouseEvent="mouseLeave"
}

canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(e){
    mouseEvent="mouseUp"
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mouseX=e.clientX-canvas.offsetLeft;
    current_position_of_mouseY=e.clientY-canvas.offsetTop;
if (mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;

       console.log("last position of x and y coordinates= ");
        console.log("x=" +last_position_of_X+ "y="+last_position_of_Y);
        ctx.moveTo(last_position_of_X,last_position_of_Y);

        console.log("current position of x and y coordinates= ");
        console.log("x=" +current_position_of_mouseX+ "y="+current_position_of_mouseY);
        ctx.lineTo(current_position_of_mouseX,current_position_of_mouseY);
        ctx.stroke();
}
last_position_of_X=current_position_of_mouseX;
last_position_of_Y=current_position_of_mouseY;
}

function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}