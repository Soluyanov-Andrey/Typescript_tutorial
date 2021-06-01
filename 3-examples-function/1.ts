/**
 * Объевляем функцию и задаем типы. Задавая константу min, мы также указываем тип.
 * Хотя функция указывает что вернется number, но лучше еще проверять и при вызове.
 */
function minus(a:number, b:number): number{
    return a - b;
}
const min: number = minus(10,5);

console.log(min);