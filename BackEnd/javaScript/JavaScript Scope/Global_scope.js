/*
Those variable whic is define or declare outside the any function are called  global scope variable
*/

// Example 1 : Global Variable

    var name = "Ritik Raj"

    function greet(){
        console.log("Hello",name);
    }
    function fun(){
        console.log("Have fun ")
    }

    // calling function
    greet();
    fun();


// Example 2: Global Function greet();


function greet(){
    console.log("Hello",name);
    
    function fun(){
        console.log("Have fun ")
    }
  
}


// calling function
greet();
