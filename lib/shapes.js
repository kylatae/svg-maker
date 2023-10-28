const colors = require('./colors.js');

function draw(s, h, sc){

//This sets up drawing a circle based on the desired pixel size of the image.
if (s === 'circle')
 return `<circle cx="${h*.75}" cy="${h*.5}" r="${h*.5}" fill="${color(sc)}" />`
//This sets up drawing a square based on the desired pixel size of the image.
else if (s === 'square')
return `<rect x="${h*.25}" y="0" width="${h}" height="${h}" fill="${color(sc)}"/>`
//This sets up drawing a triangle based on the desired pixel size of the image. 
else if (s === 'triangle')
return `<polygon points="0,${h} ${h*.75},0 ${h*1.5},${h}" style="fill:${color(sc)}" />`
}

function color(c){
//Checks to see if hexidecimal is being used
  const regex = new RegExp((/^#([A-Fa-f0-9]{6})$/));
  c = c.toLowerCase()
if (regex.test(c)){
  console.log ('new color')
  return c;
} else if (colors(c))
{
  console.log ('CSS Color')
  return c;
} else return '#776655'


}

function generateSVG(data){



//Text places the letters in the center of the image and scales font size to image size
console.log( `
<svg version="1.1" width="${data.height*1.5}" height="${data.height}" xmlns="http://www.w3.org/2000/svg">
  ${draw(data.shape, data.height, data.shapeColor)}
  <text x="${(data.height*.75)}" y="${(data.height*.65)}" font-size="${(data.height*.40)}" text-anchor="middle" fill="${color(data.charColor)}">${data.chars}</text>
</svg>`)
  


}


module.exports = generateSVG;