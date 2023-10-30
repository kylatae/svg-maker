class Shape {
  constructor(shape, height, shapeColor){
    this.shape = shape;
    this.height = height;
    this.shapeColor = shapeColor
  }
}

class Square extends Shape{
  constructor(shape, height, shapeColor){
    super(shape, height, shapeColor)
  }
  drawSquare(h, sc){
    return `<rect x="${h*.25}" y="0" width="${h}" height="${h}" fill="${sc}"/>`
  }
}

class Triangle extends Shape{
  constructor(shape, height, shapeColor){
    super(shape, height, shapeColor)
  }
  drawTriangle(h, sc){
    return `<polygon points="0,${h} ${h*.75},0 ${h*1.5},${h}" style="fill:${sc}" />`
  }
}

class Circle extends Shape{
  constructor(shape, height, shapeColor){
    super(shape, height, shapeColor)
  }
  drawCircle(h, sc){
    return `<circle cx="${h*.75}" cy="${h*.5}" r="${h*.5}" fill="${sc}" />`
  }
}

function draw(s, h, sc){
if (s === 'circle'){ 
  circle = new Circle(s, h, sc)
  return circle.drawCircle(circle.height, circle.shapeColor)}
else if (s === 'square'){
  square = new Square(s, h, sc)
  return square.drawSquare(square.height, square.shapeColor)}
else if (s === 'triangle'){
  triangle = new Triangle(s, h, sc)
  return triangle.drawTriangle(triangle.height, triangle.shapeColor)}
}

function generateSVG(data){
//Text places the letters in the center of the image and scales font size to image size
return `
<svg version="1.1" width="${data.height*1.5}" height="${data.height}" xmlns="http://www.w3.org/2000/svg">
  ${draw(data.shape, data.height, data.shapeColor)}
  <text x="${(data.height*.75)}" y="${(data.height*.65)}" font-size="${(data.height*.40)}" text-anchor="middle" fill="${data.charColor}">${data.chars}</text>
</svg>`
}

module.exports = generateSVG;

///////////////////////////////////////////////////FEEDBACK NOTES ON ASSIGNMENT/////////////////////////////////////////////////////////////////

//Yes i realize that technically I could have given circle a radius property unique to that but considering I had already made the calculations to very neatly draw shapes and logos this seemed like a characteristic that was simply not needed. Just as much as I could have utilized every single variable of height, width, x, y, cx, cy, fill, polygonpoints etc etc it is not needed when all these numbers can be obtained from manipulating height which is the best way to go about making a scaleable image in any case. Changing one distance to manipulate everything else so it all scales up and down equally.

// I want it to be known that before I realized I "NEEDED" classes this project was VERY easily finished with a FRACTION of the amount of code and for an actual assignment this is a very pointless assignment to force CLASS structure into. There is absolultely no reason a one off file creation of an SVG requires the structure and uses of Classes in any way shape or form. If it was to create full pictures using a database of shapes and actually needed to hold informaiton across multiple items of the same shapes with placement, size, and color being the only difference then sure you would have me sold that this was a worth while assignment. For a Single Shape linked to a Single 1-3 chara range (and in the default of the assignment not even being able to change its size) what purpose does this serve to be a practical example? The Mini Project with having stores that stock items etc would have been a MUCH better assignment to utilize this type of information on. That actually gives purpose to classes and extending them.... This ... Has been the only assignment I feel I'm absoultely forced to use a structure that makes no sense. And if I'm forced to do something this unpractical its not really teaching anyone when it should be used.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function draw(s, h, sc){
//   if (s === 'circle')
//    return `<circle cx="${h*.75}" cy="${h*.5}" r="${h*.5}" fill="${sc}" />`
//   else if (s === 'square')
//   return `<rect x="${h*.25}" y="0" width="${h}" height="${h}" fill="${sc}"/>`
//   else if (s === 'triangle')
//   return `<polygon points="0,${h} ${h*.75},0 ${h*1.5},${h}" style="fill:${sc}" />`}
// function generateSVG(data){return `
//   <svg version="1.1" width="${data.height*1.5}" height="${data.height}" xmlns="http://www.w3.org/2000/svg">
//     ${draw(data.shape, data.height, data.shapeColor)}
//     <text x="${(data.height*.75)}" y="${(data.height*.65)}" font-size="${(data.height*.40)}" text-anchor="middle" fill="${data.charColor}">${data.chars}</text>
//   </svg>`}
// module.exports = generateSVG;