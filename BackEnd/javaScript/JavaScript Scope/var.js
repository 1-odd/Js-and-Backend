// Difference b/w var,let,const

/*
1. if var used inside a function then it having function scope means we cant acces that var. outside that function

2. else wherever we use it , it always treat as global scope variable

*/



{
    var x = 19;  // here, x will treat as global scope
    console.log(x); 
}
console.log(x); // no error



function fun(){
    var n = 10; // n will treat as function scope variable
    console.log(n);
}
fun();
console.log(n);  // not defined error