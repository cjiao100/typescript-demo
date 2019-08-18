// union type、检查类型、null、undefined、never

/* union type */
let unionType: number | string | boolean = 12;
unionType = '12';
unionType = true;

/* 检查类型 */
let checkType = 10;
if (typeof checkType == 'number') {
  console.log('number');
}

/* null & undefined */
let myNull = null;

/* never */
// 是任意类型的子类型，也可以赋值给任意类型
let x: never;
// x = 12 // 不能将其他类型转为never类型

// never的使用场景 抛异常
function error(message: string): never {
  throw new Error(message);
}

// never的使用场景 无法执行到终点
function loop(): never {
  while (true) {}
}

let y: number;
y = (() => {
  throw new Error('message');
})();
