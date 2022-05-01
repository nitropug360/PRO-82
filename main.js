canvas=document.getElementById("mycanvas");
ctx= canvas.getContext("2d");
var mouseevent= 'empty';

canvas.addEventListener('mousedown' , my_mousedown);
function my_mousedown(e)
{
  mouseevent="mouseDown"
}
canvas.addEventListener('mouseup' , my_mouseup);
function my_mouseup(e)
{
  mouseevent="mouseUp"
}
canvas.addEventListener('mouseleave' , my_mouseleave);
function my_mouseleave(e)
{
  mouseevent="mouseLeave"
}

canvas.addEventListener('mousemove' , my_mousemove);
function my_mousemove(e){
var  currant_x= e.clientX - canvas.offsetLeft;
var  currant_y= e.clientY - canvas.offsetTop;
   if(mouseevent == "mouseDown"){
     console.log("currant position of x and y coordinates = ");
     console.log("x = " + currant_x + "y= " + currant_y);
     ctx.beginPath();
     ctx.strokeStlye= "blue";
     ctx.lineWidth= 2;
     ctx.arc(currant_x, currant_y, 10, 0, 2*Math.PI);
     ctx.stroke();
   }
}