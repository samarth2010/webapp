song=0;
function setup() 
{
canvas=createCanvas(600,500);
canvas.position(470,200);
vi=createCapture(VIDEO);
vi.hide();
psnt = ml5.poseNet(vi,modalloaded);
psnt.on('pose',gotposes);
}
function draw() {
image(vi,0,0,700,600);
fill("#FF6347");
stroke("#FF6347");
circle(rightwristx,rightwristy,30);
circle(leftwristx,leftwristy,30);

}
