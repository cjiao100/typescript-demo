// object && type

/* 对象 */
let dataObj: { name: string; age: number } = {
  name: 'Henry',
  age: 31
};

// 复杂对象类型
let complex: { data: number[]; myFunc: (item: number) => number[] } = {
  data: [1, 2, 3, 4, 5],
  myFunc: function(item: number): number[] {
    return this.data;
  }
};

console.log(complex.myFunc(20));

/* type生成类型 */
type MyType = { data: number[]; myFunc: (item: number) => number[] };

let complex2: MyType = {
  data: [1, 2, 3, 4, 5],
  myFunc(item: number): number[] {
    return this.data;
  }
};

console.log(complex.myFunc(20));
