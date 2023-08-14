let id1 = setTimeout(function (){
    console.log("Task1 completed");
},20000);

let id2 = setTimeout(function (){
    console.log("Task2 completed");
    clearTimeout(id1); //it stop the execution of task one
},3000);