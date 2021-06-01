/**
 * Проверяем принимаемый объект в аргументах функции на соотведствие типов.
 * Создаем тим mySchema, с параметрами number и string необезательным.
 * объевляем функцию root в которой объевляем две переменных z и x по типу mySchema.
 * Средствами typescript делаем переменную по умолчанию x ="hello"
 * средствами js объевляем {z: 15} по умолчанию
 */
type mySchema = {z: number, x?: string};
function root({z ,x ="hello" } :mySchema ={z: 15}): void{
   console.log(z);
   console.log(x);
}
root(); // 15 hello
root({z: 45}); // 45
root({z: 45, x:'test'});// 45 test
