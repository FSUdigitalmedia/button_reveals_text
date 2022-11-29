var drawText = false

function setup() {
  createCanvas(100, 100)
  let btn = createButton("Show/Hide Text")
  btn.mousePressed(showhide)
}

function draw() {
  background(125);

  if (drawText) text("here's the text", 10,50);

}

function showhide() {
  drawText = !drawText // set it to true if it was false, and vice versa
}