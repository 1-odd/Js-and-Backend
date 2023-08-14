var name = "Ritik";
function fun(){
    console.log(name); // it will print undefined because it have function scope but it doesn't have value yet
    // because value assign during the execution and during the parsing it assign a bucket that have value
    // undefined and assign the scope to that bucket that is function  scope
    var name = "Kumar";
    age = 20;
    console.log(name);   // Kumar
    console.log(age);// 20 
}
console.log(name); // Ritik
fun();
console.log(age); // 20