function setup() {
    var canvas = createCanvas(900,900);
    canvas.parent('artboard');
}

function draw() {
    
    background(255,0,0);
    noStroke();
    
    let diameter = document.getElementById("diameter").value * width / 100;
    let gray = parseFloat(document.getElementById("gray").value);

    noStroke();
    fill(gray);

    circle(width/2,height/2,diameter);

}