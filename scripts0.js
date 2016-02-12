document.getElementById('redSlider').addEventListener('input', function () {

  // var valueRed = document.getElementById('redSlider').value;


  // console.log("hey ");

  document.body.style.backgroundColor = getRGBvalue();
  // var slider = document.getElementById('redSlider');
  // var value = redSlider.value;
});

document.getElementById('greenSlider').addEventListener('input', function () {
// var valueGreen = document.getElementById('greenSlider').value;
  // document.body.style.backgroundColor = 'rgb(' + 0 + ',' + 255 + ',' + 0 + ')';
  // var slider = document.getElementById('greenSlider');
  // var value = greenSlider.value;
  document.body.style.backgroundColor = getRGBvalue();
});

document.getElementById('blueSlider').addEventListener('input', function () {
// var valueBlue = document.getElementById('redSlider').value;
  // document.body.style.backgroundColor = 'rgb(' + 0 + ',' + 0 + ',' + 255 + ')';
  // var slider = document.getElementById('blueSlider');
  // var value = blueSlider.value;
  //
  // value = document.getElementById(blueSlider);
  // value.innerText = blueSlider.value;
  // slider.document.body.syle.backgroundColor;
  document.body.style.backgroundColor = getRGBvalue();

});

 //
 //
 //
 // document.body.style.backgroundColor =  'rgb(' + redSlider.value + ',' greenSlider.value + ',' blueSlider.value + ')';


function getRGBvalue () {
  var valueRed = document.getElementById('redSlider').value; 
  var valueGreen = document.getElementById('greenSlider').value; 
  var valueBlue = document.getElementById('blueSlider').value; 

  return  'rgb(' + valueRed + ',' + valueGreen + ',' + valueBlue + ')';   
}