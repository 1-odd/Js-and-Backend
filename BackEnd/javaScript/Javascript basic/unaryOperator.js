// postfix incriment  ---> first assign the value thn incriment

let a = 10;
let y = a++;
console.log(a,y); // a --> 11; y --> 10;



// prefix incriment --->  opposite of postfix 


a =10;
y = ++a;
console.log(a,y);




// unary plus (+) -->
// it tries to  convert the type of a operand into a number if it is not a number. 
// it doesn't change the orginal value of it but insted it return a converted value.

let b = "12";
let x = +b;
console.log(typeof x);
console.log(x);



// unary minus(-) --> same as unary plus but it return negative value


b = "12";
x = -b;
console.log(typeof x);
console.log(x);

