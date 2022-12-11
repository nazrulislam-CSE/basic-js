/*============= Default leapYear Check =============*/
const year = 3996;
    let remainder = year % 4;
    if(remainder == 0){
        console.log('Your Year Is a Leap Year.');
    }else{
        console.log('Your Year Is Not Leap Year');
    }
/*============= Function leapYear Check =============*/
function isLeapYear(year){
    let remainder = year % 4;
    if(remainder == 0){
       return true;
    }else{
      return false;
    }
}
const checkleapYear0 = isLeapYear(2020);
const checkleapYear1 = isLeapYear(2021);
const checkleapYear2 = isLeapYear(2022);
const checkleapYear3 = isLeapYear(2023);
const checkleapYear4 = isLeapYear(2024);
const checkleapYear5 = isLeapYear(2025);
console.log(checkleapYear0);
console.log(checkleapYear1);
console.log(checkleapYear2);
console.log(checkleapYear3);
console.log(checkleapYear4);
console.log(checkleapYear5);