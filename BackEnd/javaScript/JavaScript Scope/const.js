// it is a block scope just like let but it doesn't allow reassignment or redefined the values of variable 

{

    const x = 10;
    console.log(x);
    x = 14;    // error reassignment for const is not possible
    console.log(x);
}


console.log(x); // error not defined 