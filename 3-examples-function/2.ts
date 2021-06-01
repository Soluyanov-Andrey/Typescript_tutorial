/**
 *  Function Expression.О. Объявляем minus как функцию Expression
 *  {} экранирут, создают область видимости свою.
 *  Иначе typescript будет ругаться на наличие подобных переменных в другихи файлах.
 */

{
    let minus = function (a: number, b: number): number {
        return a - b;
    }

    const min: number = minus(10, 5);

    console.log(min);
}