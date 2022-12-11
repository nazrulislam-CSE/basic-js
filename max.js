var business = 450;
var minister = 650;
var sochib = 750;
/*======== Apply Math Function With 3 Number */
var max = Math.max(business,minister,sochib);
console.log(max);

/*======== Apply If Condition With 3 Number */
if(business > minister){
    if(business > sochib){
        console.log("Business is bigger"); 
    }else{
        console.log("Sochib is bigger"); 
    }
    console.log("Business is bigger");
}else{
    if(minister > sochib){
        console.log("Minister is bigger");
    }else{
        console.log("Sochib is bigger");
    }
    console.log("Minister is bigger");
}