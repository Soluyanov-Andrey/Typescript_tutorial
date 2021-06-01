function root(_a) {
    var _b = _a === void 0 ? { z: 15 } : _a, z = _b.z, _c = _b.x, x = _c === void 0 ? "hello" : _c;
    console.log(z);
    console.log(x);
}
root(); // 15 hello
root({ z: 45 });
root({ z: 45, x: 'hhh' });
