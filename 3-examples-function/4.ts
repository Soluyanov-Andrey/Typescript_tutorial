/**
 * Если переменная объявленна как необезательная, как numb. То,
 * можно производить проверку на наличие посредствам javascript.
 */
{
    function myId(name: string, numb?: number) {
        if (numb)
            return numb + 'есть';
        else
            return numb + 'нет';
    }

    let a = myId('Semen',25);
    let b = myId('Stas',45);
    console.log(a);
    console.log(b);
}
