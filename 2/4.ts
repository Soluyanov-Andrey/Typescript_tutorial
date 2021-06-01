/**
 * В typescipt можно указывать объявления не только в качестве литералов но и выносить в отдельные
 * сущности используя type. Знак ? перед b говорит о том что переменная может быть а может нет.
 */

type C ={a: string, b?: number};
function payment({a,b}:C):void{
    console.log(a);
    console.log(b);
}
payment({a:'hello', b:48});