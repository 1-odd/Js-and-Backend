function fbcs(n){

    if(n==0){
        console.log(0);
        return;
    }
    if(n>= 1){
        console.log(0);
        console.log(1);
    }
    let last = 1;
    let second_last = 0;

    for(let i =2;i<=n;i++){
        let ans = last+second_last;
        console.log(ans);
        second_last = last;
        last = ans;
    }
     
}



fbcs(10);