'use strict';

const person = {
    name: 'Peter',
    age: 59,
    parents: {
        mom: 'Juli',
        dad: 'Mike'
    },
    say: function(text) {
        return `Yaay ${text}`
    }
}

// console.log(JSON.stringify(person));
// console.log(JSON.parse(JSON.stringify(person)));

const clone = JSON.parse(JSON.stringify(person));
clone.parents.mom = 'Anna'; // клонирование не включаем методы

// console.log(person)
// console.log(clone)

// Глубокое клонирование
// https://frontend-stuff.com/blog/deep-clone-in-js/

const deepClone = obj => {
    if (obj === null) return null;
    // Создаем поверхностный клона оригинала.
    let clone = Object.assign({}, obj);

    // Определяем, какие пары ключ-значение
    // необходимо глубоко клонировать.
    Object.keys(clone).forEach(
        key =>
            (clone[key] =
                typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key])
    );

    // Проверяем является ли obj массивом и не пустой ли он.
    return Array.isArray(obj) && obj.length
        // Если obj массив и он не пуст, тогда
        // указываем объекту clone длину исходного массива что бы
        // конвертировать clone в массив и вернуть его.
        ? (clone.length = obj.length) && Array.from(clone)
        // Если obj пустой массив,
        : Array.isArray(obj)
            // то возвращаем его
            ? Array.from(obj)
            // в других случаях obj это объект и мы возвращаем копию clone.
            : clone;
};


const clone2 = deepClone(person);

console.log(person)
console.log(clone2)