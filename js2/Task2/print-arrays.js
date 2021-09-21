//Пустой массив
let arr = []
console.log(arr[0])
//Массив с тремя числовыми элементами
let arr2 = [1, 2, 3]
console.log(arr2[0] + arr2[2])
//Массив с тремя строковыми элементами
let array = ['lorem', 'ipsum', '123']
console.log('lorem' + 'ipsum' + '123');
//Массив с тремя строковыми и с тремя числовыми элементами
let array2 = ['lorem', 'ipsum', '7534', 12, 33, 44]
console.log(`1 элемент массива - [${array2[0]}], а последний элемент [${array2[array2.length-1]}] `)
//Массив с именами всех твоих одногруппников
let nameGrupp = ['nasir', 'ali', 'ruslan', 'magomed', 'magomed2', 'ali2', 'mansur', 'jambulat', 'said-ali', 'zelim', 'khamzat', 'alimhan', 'vaha', 'musa']
console.log(`Пятый элемент массива - [${nameGrupp[4]}] и послудний элемент массива выше[${arr2[arr2.length-1]}]`)
//Массив, в котором есть число, строка, null, undefined, true и false
let arr3 = [22, 'lorem', null, undefined, true, false]
console.log(arr3[0])
console.log(arr3[1])
console.log(arr3[2])
console.log(arr3[3])
console.log(arr3[4])
console.log(arr3[5])

//Массив, внутри которого три пустых массива
let endArr = [[],[],[]]
console.log(endArr.length)

//Массив, внутри которого два массива, а внутри каждого вложенного массива любые три числа
let end = [[22, 35, 43], [65, 33, 22]]
console.log(end[0][1] * end[1][2])
