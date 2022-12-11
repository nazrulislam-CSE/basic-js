var n = 97;
for(i = 2; i < n; i++){
    console.log(i, n%i);
    if(n % i == 0){
        console.log("Not A Prime Number");
        break;
    }
}
console.log("Your Number Is a Prime Number");
/* ============== Function Prime Number ============== */
function isPrime(n){
    for(i = 2; i < n; i++){
        console.log(i, n%i);
        if(n % i == 0){
            return "Not A Prime Number";
        }
    }
   return "Your Number Is a Prime Number";
}

var result = isPrime(128);
console.log(result);
