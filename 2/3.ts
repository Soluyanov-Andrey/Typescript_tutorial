/**
 * Производим диструктуризацию по заданым типам.
 */
const obj ={
    b: 15,
    a:'string',
    f: false
};
let {a,b,f}:{b: number, a: string,f: boolean} =obj;
console.log(a);
console.log(b);
console.log(f);
