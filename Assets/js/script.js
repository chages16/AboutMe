//TEST VARIABLE FOR SEARCH (change movie name here)
var random = ["assets/images/Main.jpg", "assets/images/Main2.jpg", "assets/images/Main3.jpg", "assets/images/Main4.jpg", "assets/images/Main5.jpg"];
var testIndex = Math.floor(Math.random() * random.length);
console.log(testIndex)
var newImage = $("<img>").attr("class", "mainimage").attr("alt", "Portfoliopic").attr("src", random[testIndex]);
console.log(newImage);
$(".insertImage").append(newImage);
