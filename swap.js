/*=========== Swap Js ===========*/
var a = 5;
var b = 7;
console.log("before swap a =", a, "b =", b);

var temp = a;
a = b;
b = temp;
console.log("After swap: a =", a, "b =", b);
/*=========== X,Y Swap Js ===========*/
var x = 5;
var y = 7;
x = x + y;
y = x - y;
x = x - y;
console.log("After swap: x =", x, "y =", y );
/*=========== p,q array Swap Js ===========*/
var p = 5;
var q = 7;
[p,q] = [q,p];
console.log("After swap: p =", p, "q =", q );
