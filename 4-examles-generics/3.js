/**
 * Данная функция
 */
{
    var testFunction = function (arg) {
        console.log(arg.length); //Ошибка
        return arg;
    };
    // <string> можно и не указывать typescript поймет что передаваемое значение есть строка, и подставит ее в дженери <G>
    testFunction(1);
}
