/**
 *
 */
{

    const testFunction = function <J>(arg: J): void {
        console.log(1);
    }

    const testFunction1 = function <T>(arg: T): T{
      return arg;
    }

    const testFunction2: <T>(arg: T)=> T = testFunction1;

    // Так выдаст ошибку.
    //const testFunction3: <T>(arg: T)=> T = testFunction;
    const a: number = <number>testFunction2(1);
    const b: string = <string>testFunction2('text');
}