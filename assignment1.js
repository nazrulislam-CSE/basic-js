/* ===================== Javascript Program to Calculate Total Brick ================= */ 
function brickCalculator(floor){
    let totalBreak;
    if(floor <= 0){
        console.log("Sorry! Negative input not allowed");
        return;
    }
    if(floor <= 10){
        totalBrick = floor * 1500 * 1000;
    }else if(floor <= 20){
        totalBreak = ( 10 * 15 * 1000) + ((floor - 10) * 12 * 1000);
    }else{
        totalBreak = ( 10 * 15 * 1000) + (10 * 12 * 1000) + ((floor - 10) * 12 * 1000);
    }
    console.log("Total brick needed to build the building:" + totalBreak);
}
// ! Output Check 
brickCalculator();