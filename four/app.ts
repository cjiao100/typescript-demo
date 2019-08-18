// 函数

// 返回值类型
function returnValue(): string {
  return 'hello';
}

console.log(returnValue());

// void
function sayHello(): void {
  console.log('hello !@');
}

sayHello();

// 参数返回值
function sumValue(value1: number, value2: any): number {
  return value1 + +value2;
}

console.log(sumValue(1, '6'));

// 函数类型
let myFunc: (a:number, b:any) => number;

// myFunc = sayHello;
// myFunc();
myFunc = sumValue;
console.log(myFunc(1, '6'));
