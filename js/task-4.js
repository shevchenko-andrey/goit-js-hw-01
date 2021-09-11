array = [3, 8, 9, 20, "dfdd", "scjisjc"];
value = 20;
// Change code below this line
let result;
for (let object of array) {
  switch (object) {
    case value:
      result = true;
      break;

    default:
      result = false;
  }
}
console.log(result);
// Change code above this line
