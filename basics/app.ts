type Combinable = number | string;
type ResultType = "as-number" | "as-text";

function combine(input1: Combinable, input2: Combinable, resultConversion: ResultType){
  let result;
  if(typeof input1 === "number" && typeof input2 === 'number' && resultConversion === "as-number") {
    result = +input1 + +input2; // math operation
  } else {
    result = input1.toString() + input2.toString(); // string concatenations
  }
  return result;
}

const combineAges = combine(10, 30, "as-number");
console.log(combineAges); // 40

const combineName = combine("Hello ", "World!", 'as-text');
console.log(combineName); //Hello World!