/*=========== Reverse/Ulta Vabe lekha dekhano Show Js ===========*/
var statement = "Hellow! My Dear Brother";
var bangladesh = "Amar Sonar Bangla Ami Tomai Valobashi.";
function reverseString(str){
    var reverse = "";
    for(var i = 0; i < str.length; i++){
        var char = str[i];
        var reverse = char + reverse;
    }
    return reverse;
}
var result = reverseString(statement);
console.log(result);
console.log(bangladesh);
var result = reverseString(bangladesh);
console.log(result);