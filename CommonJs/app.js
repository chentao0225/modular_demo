let module1=require('./modules/module1');
let module2=require('./modules/module2');
let module3=require('./modules/module3');
let a=require('uniq');

module1.foo();
module1.bar();
module2();
module3.foo();
module3.bar();

let arr=[1,3,5,11,6,7,2,8,3,99,6];
console.log(a(arr));