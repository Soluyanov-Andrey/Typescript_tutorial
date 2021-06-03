/**
 * Функцию можно объявить когда и имплементация и сегнатура находятся в одном месте.
 *  const fun =(a:number, b: number): number => a + b;
 *  а можно сигнатуру вынести в type
 */
{
    var fun = function (a, b) { return a + b; };
    var sum = function (a, b) {
        return a + b;
    };
}
