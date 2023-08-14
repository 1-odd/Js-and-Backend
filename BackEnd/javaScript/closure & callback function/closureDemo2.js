function todo(task){
    console.log("todo Starting");
    setTimeout(function (){
       
        console.log(task , "completed");
    },3000);
    task = "work"
    console.log("todo ending");
}

console.log('start');
todo("assignment");
console.log('end');