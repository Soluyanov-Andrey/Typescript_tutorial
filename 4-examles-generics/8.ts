/**
 * просто другой вариант обяъвления дженерика.
 */
{
    const testFunction = function <T>(arg: T): T{
        return arg;
    }
    const test: {<T>(arg: T): T} = testFunction;
    test(1)
}