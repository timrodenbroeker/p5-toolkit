let img;
let bg,fg;
let mag;

function preload() {
    img = loadImage("./img/2.jpg");
}

let tilesX, tilesY;
var slide = document.getElementById('sliderTilesX');

function setup() {
    var canvas = createCanvas(1000,1000, WEBGL);
    canvas.parent('artboard');
    img.resize(width,height);

}

function draw() {

    selectColorTheme();

    if (img.width != width) {
        img.resize(width,height);
    }


    
    background(bg);
    noStroke();

    tilesX = document.getElementById('sliderTilesX').value;
    tilesY = document.getElementById('sliderTilesY').value;
    mag = document.getElementById('sliderMag').value;
    tileSizeMax = document.getElementById('tileSizeMax').value / 100;
    rotationY = map(document.getElementById('rotateY').value,0,100,-180,180);

    let tileW = width/tilesX;
    let tileH = height/tilesY;
    rectMode(CENTER);

    for (let x = 0; x < tilesX; x++) {
        for (let y = 0; y < tilesY; y++) {

            let min = (width/2) * mag/100;

            let posX = map(x,0,tilesX,-min,min);
            let posY = map(y,0,tilesY,-min,min);
            
            let px = parseInt(x*tileW);
            let py = parseInt(y*tileH);

            let c = img.get(px,py);
            let b = brightness(c);
            let s = map(b,0,255,tileSizeMax,0);

            fill(fg);
            
            push();
            rotateY(radians(rotationY));
            translate(posX,posY);
            rect(0,0,tileW * s,tileH*s);
            pop();

        }
    }
}

document.getElementById("save").addEventListener("click", function() {
    save("a.png");
}); 


function selectColorTheme() {
    let colorTheme = document.getElementById("colorTheme").value;
    if (colorTheme == "sea") {
        fg = color(0,0,0); bg = color(100,100,255);
    } else if (colorTheme == "forest") {
        fg = color(0,0,0); bg = color(100,255,100);
    } else if (colorTheme == "sky") {
        fg = color(0,0,0); bg = color(255,100,100);
    } else {
        fg = color(0,0,0); bg = color(220,220,220);
    }
}



function selectImage(a) {
    img = loadImage(a);
    
}