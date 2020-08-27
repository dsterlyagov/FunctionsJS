/*Реализуем функцию autoReplace(needles, change, haystack), которая будет принимать массив строк, который
нужно поменять на строку change, внутри строки  haystack. Например вызов функции autoReplace(['салат', 'помидоры'],
'еда', 'свежие помидоры пошли в салат'
должна вернуть строку "свежие еда пошли в еда"
)
*
* */

function autoReplace(needles, change, haystack) {
    if(!needles ||!change|| !haystack){
        return false;
    }
    return haystack.replace(new RegExp(needles.join("|"), "gi"), change)


}

let arr = ['салат', 'помидоры'];
let str = 'свежие помидоры пошли в салат';

console.log(autoReplace(arr, 'еда', str));