/*
it is nothing just a process to execute the code of javascript

it happens in two stages -: 

1. Parsing --:
                    In the parsing we just check the given variable/function is formally declared or not 
                    if it is formally declared and it come to scope manager first time then scope manager
                    will create a bucket for that variable and assign a scope to it.
                    
                    if it is not any bracket and function then give it to global scope.
                    if it is inside a function the give it function scope.
            Note:   values are not assign to the variable during parsing


2. Execution --:    

                    After all the variable parsed , it check the varaible get a scope or not if variable having a 
                    scope then assign the value to it . and execute the line.
*/