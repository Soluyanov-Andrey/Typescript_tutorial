{
    var testFunction = function (arg) {
        console.log(1);
    };
    var testFunction1 = function (arg) {
        return arg;
    };
    var testFunction2 = testFunction1;
    var a = testFunction2(1);
    var b = testFunction2('text');
}
