/**
 * type k = (a: number, b: number) => number;
 * Это типовая сигнатура для функции. Это просто описания функции.
 * let fun = <k> указывает что функция должна быть объявлена с сигнатурой заданной в <k>
 */
{
    type k = (a: number, b: number) => number;

    let fun = <k>function fun(x, y): number {
        return x + y;
    }
    const b: number = fun(5,1);
}