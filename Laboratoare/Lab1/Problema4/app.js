document.getElementById(elementId."calculate").addEventlistener(type 'click', getValue);
function    getValue(){
            if(isNaN(document.getElementById.value))
            {
                document.getElementById( elementId."FibonacciNumbers").innerHTML = "Not a number";
            }else {
                    var z = document.getElementById(elementId: "n").value;
                    getFibonacci(parseInt(z));
                    console.log(z);
                    console.log(typeof z);
            }
}
function    getFibonacci(n){
            var fibonacci = [];
            fibonacci[0]=1;
            fibonacci[1]=1;
            for(var i = 2; i <= n; i++){
            fibonacci[i] = fibonacci[i-1]+fibonacci[i-2];
            }
            printFibonacci(fibonacci);
            }

function    printFibonacci(fibonacci){
            for(var i = 0; i < fibonacci.length; i++)
            {
            console.log(fibonacci[i])};
            }