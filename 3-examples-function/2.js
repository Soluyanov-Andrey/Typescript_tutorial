/**
 *  Function Expression.О. Объявляем minus как функцию Expression
 *  {} экранирут, создают область видимости свою.
 *  Иначе typescript будет ругаться на наличие подобных переменных в другихи файлах.
 */
{
    var minus = function (a, b) {
        return a - b;
    };
    var min = minus(10, 5);
    console.log(min);
}
