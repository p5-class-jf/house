
function draw() {
    background('green')
    noStroke()
    // Wall
    fill('orange')
    rect(50, height/2, width -100, height * 0.4)
    // Roof
    fill('red')
    triangle(
        50, height/2,
        width - 50, height/2,
        width/2, height * 0.3
    )
}

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}