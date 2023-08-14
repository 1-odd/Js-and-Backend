
// using recurssion

function gcd(a,b){
    if ( b == 0 ) return a;
    else {
        var temp = a % b ;
        console.log("temp: " + temp); // for debugging purposes only!
        return gcd(b,temp);
        }

}


// using  loops & if else

function Gcd(a,b){

    let ans = 1;

    for(let i = 2;i<=Math.min(a,b);i++){
        if(a%i==0 && b%i==0){
            ans = i;
        }
    }
    return ans;
}




console.log(Gcd(24,28));