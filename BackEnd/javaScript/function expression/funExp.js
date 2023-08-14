function fun(){
    console.log("fun called");

}

function gun(fn){
    console.log("Entering gun");
    fn(); //calling function from outside
    console.log("Exiting gun")
}

// gun(function (){
//     console.log("New function called")
// });

gun(fun);