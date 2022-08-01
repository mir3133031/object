const user = {
    name: "Aziz", // string
    surname: 'Adams',
    age: 15, // number
    isMarried: true, // boolean
    girls: ['nargiza', 'malika', 'karina', 'aziza'],
    passport: {
        serries: 'AC',
        number: 213123213
    },

    fullName: () => {
        return user.name + ' ' + user.surname
    }
}
let wallet = {
    wallet: {
        cash: 19000,
        card: {
            password: 7777,
            cash: 13532
        }
    }
}
let ex = Object.assign(user, wallet)



let keys = [Object.keys(ex)]
keys = Object.keys(ex)


let values = []
values = Object.values(ex)


let all = []
all = keys.concat(values)



let types = {
    number: [],
    string: [],
    object: [],
    boolean: []
}
all.filter(item => {
    if (typeof (item) === `number`) {
        types.number.push(item)
    } else if (typeof (item) === `string`) {
        types.string.push(item)
    } else if (typeof (item) === `object`) {
        types.object.push(item)
    } else if (typeof (item) === `boolean`) {
        types.boolean.push(item)
    }


})
console.log(ex);
console.log(keys)
console.log(values)
console.log(all);
console.log(types);

// ТЗ
// Седенить два объекта в один новый
// достать все значения в один массив и все ключи тоже в один но отдельный массив
// соеденить два массива в один целый
// отфильтровать данные по их типам данных в соответствующие переменные