/**
 * В примере указываем джинерик G. И в дальнейшем
 * в джинерик попадает string а потом number.
 */
{
    var testFunction = function (arg) {
        return arg;
    };
    var t = testFunction('str');
    var b = testFunction(1);
    console.log(t);
    console.log(b);
}
