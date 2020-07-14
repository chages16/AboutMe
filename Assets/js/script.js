//TEST VARIABLE FOR SEARCH (change movie name here)
var random = ["Assets/Images/main.jpg", "Assets/Images/main2.jpg", "Assets/Images/main3.jpg", "Assets/Images/main4.jpg", "Assets/Images/main5.jpg"];
var testIndex = Math.floor(Math.random() * random.length);
console.log(testIndex)
var newImage = $("<img>").attr("class", "mainimage").attr("alt", "Portfoliopic").attr("src", random[testIndex]);
console.log(newImage);
$(".insertImage").append(newImage);
$(".floatLeft").append(moment().format('ddd, MMM D'));