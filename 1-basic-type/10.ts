/**
 * never
 * Суть never в том что, эта функция никогда не будет выполнена.
 */
let foo: never = 123; // Error: Type number is not assignable to never

// Okay as the function's return type is `never`
let bar: never = (() => { throw new Error(`Throw my hands in the air like I just don't care`) })();