/**
 * Используя диструктуризацию [a,b], мы говорим что параметр a который находится на первой позиции
 * будет равен string, второй параметр будет равен number.
 */
function r([a,b]: [string, number]){
    console.log(a);
    console.log(b);
}
r(["Hello",45]);