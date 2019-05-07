/**
 * Created by apple on 2019/5/7.
 */
let isGood: boolean = true;
// 1. number boolean string array
let list1: number[] = [1, 2, 3];
// let list2: Array<number> = [1, 2. 's']

// 2.tuple 元祖 核心在于开始的类型和顺序
let x: [string, number]
x = ['1', 2]
// 无法编译通过
// x = ['1', 2, 3]
// 3.enum
enum Color {
    Red = 1,
    Yellow = 3,
    Blue = 4
}

let c: Color = Color.Blue;
// 4.any
let notSure: any = 4;
notSure = 'maybe a string';
notSure = false;

let list: any[] = [1, 's', false];
list[1] = 0;
//5. void
function warningUser(): void {
    console.log('waring!!')
}

let unusable: void = undefined

//6.null,undefined(为所有类型的子类型)
let u: null = null
let u1: null = undefined

//7.never 不能结束和返回的
function error(message: string): never {
    throw new Error(message);
}
//8.object declare关键字：只声明不实现
declare function create(o: object | null): void;

create({prop: 0});
create(null);
// create('1') error

//9. 类型转换（断言）
let someValue: any = 'this is a string';
// 两种方式
// 1.<>
// let strLength: number = (<string>someValue).length;

// 2.as
let strLength: number = (someValue as string).length;