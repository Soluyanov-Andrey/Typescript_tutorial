/**
 *
 * Запретить использовать this на уровне typescript.
 * Если попытаться  выполнить this.n =n; будет ошибка.
 */
const run: (this: void, b: number) => void = function(b){
     // this.n =n;
    console.log(b);
}
run(1);