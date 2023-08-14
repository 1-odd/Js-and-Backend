// visiblity of the variable or function is only inside the outer function

// Example 1 :

    function fun(){
        var a = "Hello";
       

        function test(){
            console.log(a); // This will print Hello because it's visible in this scope
        }
        test();
    }

    fun();