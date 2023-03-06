let conference;
let chair;
let avatar;
let counter = 0;
let chairColor = [64,64,64];
let sceneOffset = [0,0,1000];

function preload() {
    chair = loadModel('../assets/chair.obj',true);
    conference = loadModel('../assets/conferencetable.obj',true);
}

function setup() {
    var canvas = createCanvas(window.innerWidth,window.innerHeight,WEBGL);
    canvas.parent('sketch3D')
    createEasyCam();
    document.oncontextmenu = ()=>false;
    counter = 0;
}

function drawAxes(n){
    strokeWeight(5);
    stroke(255,0,0)
    line(0,0,0,n,0,0)
    stroke(0,255,0)
    line(0,0,0,0,n,0)
    stroke(0,0,255)
    line(0,0,0,0,0,n)
}

function displayObj(obj,position,orientation,color,_scale){
    const [px,py,pz] = position;
    const [ox,oy,oz] = orientation;
    const [cx,cy,cz] = color;
    push();
    ambientLight(cx,cy,cz);
    ambientMaterial(255,255,255);
    directionalLight(cx,cy,cz,px,py,pz-100);
    rotateX(ox);
    rotateY(oy);
    rotateZ(oz);
    translate(px,py,pz);
    scale(_scale)
    model(obj);
    pop();
}

function loadModels(){
    strokeWeight(0);

    // CHAIRS
    displayObj(chair,[0,200,0],[Math.PI/2,0,0],chairColor,1);
    displayObj(chair,[300,200,0],[Math.PI/2,0,0],chairColor,1);
    displayObj(chair,[-300,200,0],[Math.PI/2,0,0],chairColor,1);
    displayObj(chair,[0,200,0],[Math.PI/2,0,Math.PI],chairColor,1);
    displayObj(chair,[300,200,0],[Math.PI/2,0,Math.PI],chairColor,1);
    displayObj(chair,[-300,200,0],[Math.PI/2,0,Math.PI],chairColor,1);

    // CONFERENCE
    displayObj(conference,[0,0,0],[Math.PI/2,0,0],[161, 98, 7],4);
}

function draw(){
    
    background(255);
    drawAxes(400);
    loadModels();
}