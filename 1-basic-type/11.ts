/**
 * Type assertions.Утверждения типа.Мы обявили userType как any.Но потом понадобилось конкретизировать
 * и поработать как со строкой, это намеренье мы записали в виде утверждения <string>userType.
 */
let userType: any ='My string';

let b: number =(<string>userType).length;
console.log(b); // Вернет 9