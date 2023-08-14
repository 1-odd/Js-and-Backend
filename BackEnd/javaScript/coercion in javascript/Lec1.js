console.log(1 - "1")  // 1-1 = 0
// "1" - "1" = 0

console.log("1" + 2 + "3" + NaN); // 123  // it use toString Abstract Operation and convert all the values into string
// if any one value is string and u r performing plus opration


console.log(true -1);  // true convert into a number 1 --> 1-1 = 0
console.log(true +1) ; // 1+1=2


console.log("2" + "4" - 2); // "2" + 4-2 --> "2" + 2 ---> "2" + "2" = "22"

console.log(undefined - "2"); // undefined convert into NaN for minus
console.log(undefined + "2");  // undefined convert into string for plus if 2nd operand is a string

  console.log(NaN + "2") // NaN convert into string
  console.log(NaN + 4) // NaN


  console.log(NaN - "2") // NaN
  console.log(NaN + 3) // NaN


  console.log(null + "2") // null2
  console.log(null + 3) // null convert into +0 --> null + 3 = 3

  console.log(null - "2") // +0 - 2 = -2
  console.log(null - 2) // +0 - 2 = -2



  console.log(false + false )   // 0+0 =0



 
 