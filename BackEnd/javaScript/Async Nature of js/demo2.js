function process(){
    console.log("Start of process")
    for(let i = 1;i<3;i++){
        setTimeout(function ex(){
            console.log('late execution')
        },3000);
        console.log('inside for loop')
    }
    console.log('outside for loop start')
    for(let j =0;j<100000000000;j++){
        // do some task
    }
    console.log('outside for loop & end of the process');

}
process();