/**
 * Переданные значения в rest мы определяем как кортедж [string, string, string]
 *
 */
{
    function test(argument) {
        var restArgument = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgument[_i - 1] = arguments[_i];
        }
        return argument + ' ' + restArgument.length;
    }
    var rez = test('d', 'v', 'd', 'hh');
    console.log(rez);
}
/**
 *
 * Если мы знаем что все будет являться строкой то можно записать и так ..restArgument: string[]
 */
{
    function test1(argument) {
        var restArgument = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgument[_i - 1] = arguments[_i];
        }
        return argument + ' ' + restArgument.length;
    }
    var rez1 = test1('d', 'v', 'd', 'hh');
    console.log(rez1);
}
