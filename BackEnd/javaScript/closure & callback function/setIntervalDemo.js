let id = setInterval(function(){
    console.log('do it again & again after every 3 second');
},3000);

setTimeout(function(){
    clearInterval(id) //clear the interval timer it will stop setInterval();
},20000);