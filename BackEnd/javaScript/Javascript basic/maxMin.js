var a  = 10;
var b =  10;
var c =  2;


// for maximum

if(a>b){
    if(a>c){
        console.log("A is the greatest");
    }else{
        console.log("C is greater than A and B.");
    }
}else{
    if(b>c){
        console.log("B is the greatest!");
    }else{
        console.log("c is greatest")
    }
}

// for minimum


if(a<b){
    if(a<c){
        console.log("A is the smallest number among three numbers.")
    }else{
        console.log("C is smaller then both of them!")
    }
}else{
    if(b<c){    
        console.log("B is the least value in this set of values.")
        }else {
            console.log ("C is smallest ")
            }
}