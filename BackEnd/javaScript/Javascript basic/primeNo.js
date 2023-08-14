// findout the prime no between 5 to 100

var flag ;
function isPrime(x){
for(let i= 2;i<=x-1;i++){
    if(x % i ==0){
       // flag = false ;
        return false;
        break;
    }

}
return  true;
}


for(let i = 5;i<50;i++){
    flag = isPrime(i);
    if(flag == true){
        console.log(i, "is a prime");

    }else{
        console.log(i,"not a prime");
    }
    

}