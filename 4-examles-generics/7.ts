/**
 * Объявляем два дженерика <G, T>.
 */
{
    const test = function <G, T>(a: G, b: G,str: T): void{
        console.log(a);
        console.log(b);
    }

    const fun: <U, T>(a: U, b: U, str: T) => void = test;

    fun<number, string>(5,6, 'Test');
}