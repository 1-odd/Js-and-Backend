// Arithmatic operator

var a = 10;
var b = 5;

var ans ;
ans = a +b;
ans = a-b;
ans = a*b;
ans = a/b;
ans = a%b;
ans = a**b; // power


// Assignment operators

let x = 1;
let y = 1;
  
console.log(x += y,x -= y ,x *= y,x /= y );   // x = x+y;



// Relational operator


//   < , >  , <=, >= , ==



// logical operator

 a = 10;
 b = 12;
if (a &&!b) {   
    console.log("Both are true");   
    } else if (!a || b){    
        console.log("One is false and other one is also not true ");    
        }else{
            console.log("None of the above condition satisfies.");
            };




console.log(10&&3);

console.log((10>2)&&(5<12));

console.log(10||3);


// Special Numbers in js 


// NaN is used when you dont have any possible number to return or print

console.log(undefined/null);  // it display NaN 
console.log(NaN == NaN);  // it is the only number that is not equal to itself


console.log(+0,-0,Infinity,-Infinity,NaN);




// Bitwise operator


console.log(5&7);

/*

              5-->   1 0 1
              7-->   1 1 1

            5&7 -->  1 0 1   --->  5

*/

console.log(6&9);

console.log(6|9);

console.log(6^9);

console.log(~6&9);





// Equality operator


console.log(1=='1');    // its automatically do type conversion that's why it show true
console.log(1==='1');  // its never do type conversion thats why it show false



