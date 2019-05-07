/**
 * Created by apple on 2019/5/7.
 */
var isGood = true;
// 1. number boolean string array
var list1 = [1, 2, 3];
// let list2: Array<number> = [1, 2. 's']
// 2.tuple 元祖 核心在于开始的类型和顺序
var x;
x = ['1', 2];
// 无法编译通过
// x = ['1', 2, 3]
// 3.enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Yellow"] = 3] = "Yellow";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
// 4.any
var notSure = 4;
notSure = 'maybe a string';
notSure = false;
var list = [1, 's', false];
list[1] = 0;
//5. void
function warningUser() {
    console.log('waring!!');
}
var unusable = undefined;
//6.null,undefined(为所有类型的子类型)
var u = null;
var u1 = undefined;
//7.never 不能结束和返回的
function error(message) {
    throw new Error(message);
}
create({ prop: 0 });
create(null);
// create('1') error
//9. 类型转换（断言）
var someValue = 'this is a string';
console.log(someValue.length);
