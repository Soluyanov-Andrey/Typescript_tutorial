/**
 * Type assertions.Утверждения типа.Кастинг.Мы обявили userType как any.Но потом понадобилось конкретизировать
 * и поработать как со строкой, это намеренье мы записали в виде утверждения <string>userType.
 */
let userType: any ='My string';

let b: number =(<string>userType).length;

console.log(b); // Вернет 9

/** Второй вариант как можно записать утверждение(кастинг)*/
let userType1: any ='My string';

let b1: number =(userType1 as string).length;

console.log(b1); // Вернет 9