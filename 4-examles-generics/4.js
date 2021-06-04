/**
 * Гард это просто прверка на js.
 */
{
    var testFunction = function (arg) {
        var v = arg[1];
        if (v instanceof Number) {
            console.log(v.toFixed());
        }
        return arg;
    };
    testFunction([1, 2, 3]);
}
