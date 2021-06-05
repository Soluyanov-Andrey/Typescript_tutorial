/**
 * Создаем аргумент в веде массива с типом джинерик.Array<G>
 */
{
    const testFunction = function<G>(arg:Array<G>): Array<G>{
        console.log((arg.length));
        return arg;
    }
    testFunction([1,2,3]);

}
