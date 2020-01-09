//Question 1
var PetArray = ["cat", "cow", "dog"];
//Question 2
console.log(PetArray[1]);
//Question 3
PetArray.push("sheep");
//Question 4
console.log(PetArray.length);
//Question 5
var catObject = {
    name: "Hades",
    colour: "Brown",
    age: 5
}
//Question 6
console.log(catObject.age);
//Question 7
var catArray = [
  {
      name: "Hades",
      colour: "Brown",
      age: 5
  }
];
//Quesion 8
for (var i = 0; i < catArray.length; i++) {
    console.log(catArray[i].name);
    console.log(catArray[i].colour);
    console.log(catArray[i].age);
};
//Question 9
function logToConsole(consoleMessage){
  console.log(consoleMessage);
}
//Question 10
logToConsole("donkey");
