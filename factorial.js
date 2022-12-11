// 3! = 1x2x3
// 4! = 1x2x3x4
// 5! = 1x2x3x4x5
// 10! = 1*2*3*4*5*6*7*8*9*10
var factorial = 1;
for (var i = 1; i <= 15; i++){
    factorial = factorial * i;
    console.log(i,factorial);
}

/*============= Function Factorial ==============*/
function fact(n){
    var factorial = 1;
    for (var i = 1; i <= n; i++){
        factorial = factorial * i;
    }
    return factorial;
}
var result = fact(5);
console.log(result);