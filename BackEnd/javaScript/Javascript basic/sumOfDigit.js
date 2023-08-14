function sum(x){

    let sum = 0;

    while(x>0){
        let rem = x %10;
        sum += rem;
        x = Math.floor(x/10);
    }
    return sum;
}


console.log(sum(234));