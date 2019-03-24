var x = 5; //  숫자형
var y = 'five' //  문자형
var isTrue = true; //  불린형
var empty = null; // null
var nothing; // undefined
var sym = Symbol('me'); //Symbol
var item = {
    price : 5000,
    count : 10
}; // 객체

var fruits = ['apples','orange', 'kiwi']; //  배열
var addFruite = function(fruit) {
    fruits.push(fruit);
} //  함수

addFruite('watermelon');
console.log(fruits);
console.dir(document.body);
function f() {return true;}
console.log(f);
console.dir(f);
console.dir(f);
console.dir(f);

console.count(f);
console.count(f);
console.count("a");

console.time('타이머');
for(var i=1; i < 100000; i++ ) z = 5;
console.timeEnd('타이머');