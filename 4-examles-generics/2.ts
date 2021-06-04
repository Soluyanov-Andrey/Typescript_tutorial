/**
 * В примере указываем джинерик G. И в дальнейшем
 * в джинерик попадает string а потом number.
 */
{
    const testFunction =function<G>(arg:G): G{
        return arg;
    }
    // <string> можно и не указывать typescript поймет что передаваемое значение есть строка, и подставит ее в дженери <G>
    const t: string = testFunction <string>('str');
    const b: number = testFunction <number>(1);
    console.log(t);
    console.log(b);
}

