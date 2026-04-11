function run(){
let canvas=document.getElementById('canvas');
let ctx=canvas.getContext('2d');

ctx.clearRect(0,0,400,200);

let x=0;
let frames=0;

function loop(){
ctx.clearRect(0,0,400,200);
ctx.fillStyle="#22c55e";
ctx.fillRect(x,80,30,30);
x+=2;
frames++;

if(x<400){
requestAnimationFrame(loop);
}else{
document.getElementById('result').innerHTML =
"Frames rendered: "+frames;
}
}

loop();
}
