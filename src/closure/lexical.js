const myGlobal = 0;

function myFunction(){
    const myNumber = 1;
    console.log(myGlobal);

    function parent(){ //funcion interna
        const inner = 2;
        console.log(myNumber, myGlobal);

        function child(){
            console.log(inner, myNumber, myGlobal);
        }

        return child();
    }

    return parent();
}

myFunction();


function alcancia(firstNumber = 0){
    return function sum(SecondNumber = 0){
        return firstNumber + SecondNumber;
    }
    return sum;
}

console.log(alcancia(90))