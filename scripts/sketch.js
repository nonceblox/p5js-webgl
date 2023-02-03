let nonce;
let rust;
let golang;
let bitcoin;
let polygon;
let node;
let react;
let solana;
let counter = 0;

function preload() {
    nonce = loadModel('../assets/cube_parts.obj',true);
    rust = loadModel('../assets/rust.obj',true);
    golang = loadModel('../assets/golang.obj',true);
    binance = loadModel('../assets/binance.obj',true);
    bitcoin = loadModel('../assets/bitcoin.obj',true);
    polygon = loadModel('../assets/polygon.obj',true);
    node = loadModel('../assets/node.obj',true);
    react = loadModel('../assets/react.obj',true);
    solana = loadModel('../assets/solana.obj',true);
}

function setup() {
    var canvas = createCanvas(window.innerWidth,window.innerHeight,WEBGL);
    canvas.parent('sketch3D')
    createEasyCam();
    document.oncontextmenu = ()=>false;
    ortho(-window.innerWidth/2, window.innerWidth/2, window.innerHeight/2, -window.innerHeight/2, -1000, 1000);
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

function displayObj(obj,position,orientation,color){
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
    if (ox===0){
        translate(0,20*Math.sin(counter+px+py),0);
        // rotateY(mouseX/1000)
        // rotateZ(mouseY/1000)
    } else {
        translate(0,0,-20*Math.sin(counter+px+py));
    }
    translate(px,py,pz);
    model(obj);
    pop();
}

function loadModels(){
    strokeWeight(0);

    // FRONT ROW
    displayObj(binance,[0,300,0],[Math.PI/2,0,0],[243, 186, 47]);
    displayObj(polygon,[-300,300,0],[Math.PI/2,0,0],[130,71,229]);
    displayObj(node,[300,300,0],[Math.PI/2,0,0],[60, 135, 58]);
    
    // MID ROW
    displayObj(nonce,[0,0,0],[0,0,0],[96, 89, 247]);
    displayObj(rust,[300,0,0],[Math.PI/2,0,0],[140, 109, 76]);
    displayObj(golang,[-300,0,0],[Math.PI/2,0,0],[41, 190, 175]);

    // BACK ROW
    displayObj(bitcoin,[0,-300,0],[Math.PI/2,0,0],[242, 169, 0]);
    displayObj(react,[-300,-300,0],[Math.PI/2,0,0],[124, 197, 217]);
    displayObj(solana,[300,-300,0],[Math.PI/2,0,0],[0, 255, 163]);
}

function draw(){
    background(255);
    // drawAxes(400);
    loadModels(counter);
    counter+=0.01;
}