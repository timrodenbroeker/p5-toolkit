function setup() {
    var canvas = createCanvas(900,900);
    canvas.parent('artboard');
}

function draw() {
    
    background(255,0,0);
    noStroke();
    
    
    noStroke();

    let gray = parseFloat(document.getElementById("gray").value);
    fill(gray);
    
    let diameter = document.getElementById("diameter").value * width / 100;
    circle(width/2,height/2,diameter);

    let headline = document.getElementById("headline");
    textSize(100);
    text(headline.value,20,20,width-40,height-40);

}

document.getElementById("save").addEventListener("click", function() {
    save("a.png");
}); 