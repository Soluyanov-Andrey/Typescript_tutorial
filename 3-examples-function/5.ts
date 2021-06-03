/**
 * Переданные значения в rest мы определяем как кортедж [string, string, string]
 *
 */

{
    function test(argument: string, ...restArgument: [string, string, string]) {
        return argument + ' ' + restArgument.length;
    }

    let rez = test('d', 'v', 'd','hh');
    console.log(rez);
}

/**
 *
 * Если мы знаем что все будет являться строкой то можно записать и так ..restArgument: string[]
 */

{
    function test1(argument: string, ...restArgument: string[]) {
        return argument + ' ' + restArgument.length;
    }

    let rez1 = test1('d', 'v', 'd','hh');
    console.log(rez1);
}

