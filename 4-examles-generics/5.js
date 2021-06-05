/**
 * Создаем аргумент в веде массива с типом джинерик.Array<G>
 */
{
    var testFunction = function (arg) {
        console.log((arg.length));
        return arg;
    };
    testFunction([1, 2, 3]);
}
