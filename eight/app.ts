// class 类(属性，方法)
class Person {
  public name: string;
  protected gender: string;
  private age: number = 27;
  
  constructor(name: string, gender: string, public username: string) {
    this.name = name
    this.gender = gender
    this.username = username
  }
  
  printAge(age: number) {
    this.age = age
    console.log(this.age)
  }
  
  setGender(gender: string) {
    this.gender = gender
    console.log(this.gender)
  }
}
const person = new Person('cjw', '男', 'cjiao')
console.log(person)

person.printAge(30)
person.setGender('女')
