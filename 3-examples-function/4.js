/**
 * Если переменная объявленна как необезательная, как numb. То,
 * можно производить проверку на наличие посредствам javascript.
 */
{
    function myId(name, numb) {
        if (numb)
            return numb + 'есть';
        else
            return numb + 'нет';
    }
    var a = myId('Semen', 25);
    var b = myId('Stas', 45);
    console.log(a);
    console.log(b);
}
