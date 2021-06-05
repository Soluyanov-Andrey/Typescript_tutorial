/**
 * Гард это просто прверка на js.Если написать гард, тоесть праверку на js каким типом является переданный
 * аргумент то так typescript откампелирует.
 */
{
    const testFunction = function<G>(arg:G[]): G[]{
        const v = arg[1];
        // Оператор instanceof проверяет, принадлежит ли объект к определённому классу.
        if(v instanceof Number){
            //toFixed округляет
            console.log(v.toFixed())
        }
        return arg;
    }
    testFunction<number>([1,2,3]);
}