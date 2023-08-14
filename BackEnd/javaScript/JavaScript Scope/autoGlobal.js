/*
it is a process that is happend during the execution phase.
when we declared a variable infromally (not having var/let/const) then during the parsing it got skip but
during the execution phase it ask to the scope manager do u know this variable and manager simply say no then
it goes outside the function & block and ask to manager again do u know it if manager know the variable
in global scope then assign the same scope to the variable but if manager say no again then autoglobal came
and assign the global scope to it.


but there a catch in it if we trying to use that variable before the assigning the scope to it then it will throw a 
refrence error to you.
Example :

            var name = "Ritik"; // global scope

function fun(){ // global scope to fun but function scope for inside entities of function

    var name = "Kumar"; // function scope
    age = 10;  // autoglobal during execution

    console.log(name); // skip during parsing execute during execution
    console.log(age);  // skip during parsing execute during execution


}
console.log(name);
console.log(age);  // refrence error here beacuse it execute before fun() that's why
fun();



*/

var name = "Ritik"; // global scope

function fun(){ // global scope to fun but function scope for inside entities of function

    var name = "Kumar"; // function scope
    age = 10;  // autoglobal during execution

    console.log(age);  // skip during parsing execute during execution
    console.log(name); // skip during parsing execute during execution
   


}
console.log(name);
fun();
console.log(age);