/*============ Additional ===========*/
var a = 20;
var b = 30;

var total = a+b;
console.log(total);

/*============ Substraction ===========*/
var  a = 50;
var b = 30;
var total = a - b;
console.log(total);

/*============ Multiplation ===========*/
var  a = 9;
var b = 9;
var total = a * b;
console.log(total);

/*============ Division ===========*/
var  a = 100;
var b = 10;
var total = a / b;
console.log(total);

/*============ Modulas ===========*/
var  a = 100;
var b = 15;
var total = a % b;
console.log(total);
 
/* =============== String & Number typeof Function ===============*/
var name = "Nazrul Islam";
console.log(typeof name);
var num = 10230;
console.log(typeof num);

/* =============== Bollean Number ===============*/
var first_number = true;
console.log(first_number);
var second_number = false;
console.log(second_number);
var thrid_number = true;
console.log(typeof thrid_number);

/* =============== toLowercase, toUppercase, Index Off, Split  ===============*/
var promise = " I Promise I Will Work Hard to become a Programmer ";
console.log(promise.toLowerCase());
console.log(promise.toUpperCase());
console.log(promise.indexOf('Will'));
console.log(promise.split(' '));

/* =============== Parse Float Function =============== */
var number1 = 25;
var number2 = '15.5';
number2 = parseInt(number2);
console.log(number1 + number2);

/* =============== Tofixed Function =============== */
var number3 = 0.1;
var number4 = 0.2;
var total = number3 + number4;
console.log(total.toFixed(5));

/* =============== Math Function =============== */
var number = -5;
var absoluteNumber = Math.abs(number);
console.log(absoluteNumber);
var number = 5.545;
var result = Math.round(number);
console.log(result);
var number = 5.0611;
var result = Math.ceil(number);
console.log(result);
var number = 5.99999;
var result = Math.floor(number);
console.log(result);
var number = Math.random() * 100;
var result = Math.round(number);
console.log(result);


