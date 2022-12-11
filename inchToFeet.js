/*============= Defalut =========== */
var inch = 156;
console.log(inch);
/*============= Function With InchToFeet =========== */
function inchToFeet(inch){
    var feet = inch / 12;
    return feet;
}

var nanafeet = inchToFeet(156);
console.log(nanafeet); 
var nanifeet = inchToFeet(288);
console.log(nanifeet);

/*============== Array Er value Pass kore InchToFeet ============== */
var senior = [156,288,356];
var nanafeet = inchToFeet(senior[0]);
var nanifeet = inchToFeet(senior[2]);
console.log(nanifeet);