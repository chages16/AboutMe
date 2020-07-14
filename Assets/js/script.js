//TEST VARIABLE FOR SEARCH (change movie name here)
var random = ["Assets/Images/Main.jpg", "Assets/Images/Main2.jpg", "Assets/Images/Main3.jpg", "Assets/Images/Main4.jpg", "Assets/Images/Main5.jpg"];
var testIndex = Math.floor(Math.random() * random.length);
console.log(testIndex)
var newImage = $("<img>").attr("class", "mainimage").attr("alt", "Portfoliopic").attr("src", random[testIndex]);
console.log(newImage);
$(".insertImage").append(newImage);
$(".floatLeft").append(moment().format('ddd, MMM D'));