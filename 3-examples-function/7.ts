/**
 * Функцию можно объявить когда и имплементация и сегнатура находятся в одном месте.
 *  const fun =(a:number, b: number): number => a + b;
 *  а можно сигнатуру вынести в type
 */
{

    const fun =(a:number, b: number): number => a + b;


    type SType = (a:number, b: number) => number;
    const sum: SType = function(a, b){
        return a +b;
}
}
