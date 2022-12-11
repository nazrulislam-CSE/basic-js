var friendsAge = [15,17,14,16];
var friendsName = ['Sagor','Masud','Nasim','Saklyan'];

var sonaliAge = [2];
console.log(friendsAge);

var position = friendsAge.indexOf(21);
console.log(position);

/* ============ array length ============ */
console.log(friendsAge.length);
/* ============ Laste add korar jonno push ============ */
friendsAge.push(20);
console.log(friendsAge);
/* ============ Laste remove korar jonno pop ============ */
friendsAge.pop();
console.log(friendsAge);
/* ============ Just Array Name  Show =============*/
console.log(friendsName);
/* ============ First Remove korar jonno Shift ============ */
friendsName.shift();
console.log(friendsName);
/* ============ First add korar jonno unshift ============ */
friendsName.unshift('Bassu','Rahul');
console.log(friendsName);
/* ============ Slice Function  ============ */
var teaLine = ['Salam','Kalam','Korim','Jalim','Rashedul'];
var part = teaLine.slice(2,4);
console.log(part);


