// 数组、元组、枚举

/* 数组 */
let names: Array<string> = ['henry', 'bucky'];
let numbers: number[] = [1, 2, 3];
let anyArray: any[] = ['hi', 1, false];

/* 元组 */
let colors: [string, number] = ['hello', 99];

/* 枚举 */
enum Color {
  Black,
  Yellow,
  Red
}

let myColor: Color = Color.Black;
console.log(myColor);
