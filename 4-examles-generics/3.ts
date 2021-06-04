/**
 * Данная функция не сможет быть откомпелирована, так как
 * typescropt при присудствии джинерика будет понимать, а что если в джинерик придет не <string>
 *   и тогда length у строки не будет.
 */
{
    const testFunction = function<G>(arg:G): G{
        console.log(arg.length);//Ошибка
        return arg;
    }
    // <string> можно и не указывать typescript поймет что передаваемое значение есть строка, и подставит ее в дженери <G>
    testFunction <number>(1);

}