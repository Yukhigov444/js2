//1. Метод push(), unshift(), shift()
let arr = []
arr.push('item')
console.log(arr)

//2.
let arr2 = []
arr2.push('lorem', 'ipsum', 'white')
console.log(arr2)

//3.
let arr3 = [true, false]
arr3.unshift(null)
console.log(arr3)

//4.
let arr4 = [[], []]
arr4[1].push(true, true, true)
console.log(arr4)

//5.
let arr5 = ['html', 'css',]
arr5.unshift('git')
arr5.push('JavaScript')
console.log(arr5)

//6.
arr5[4] = 'figma'
console.log(arr5)




let stack = ["html", "css", "bem", "js"];

// A) добавь в конец массива значение "react" (используй .push())
stack.push('react')
// B) выведи весь массив в консоль
console.log(stack)

// C) добавь в конец массива значение "redux" (используй способ с [])
stack[5] = 'redux'
// D) выведи весь массив в консоль
console.log(stack)

// E) добавь в начало массива значение "git"
stack.unshift('git')
// F) выведи весь массив в консоль
console.log(stack)
/*
 *  G) выведи в консоль строку "сначала мы изучим git, а в конце изучим redux".
 *  Слова "git" и "redux" должны браться из массива, а не печататься от руки.
 * (вспоминай про кавычки ``)
 */
console.log(`Сначала мы изучим - [${stack[0]}] а в конце изучим - [${stack[stack.length-1]}] `)

// H) добавь в конец массива сразу два элемента: "mysql" и "mongodb".
stack.push('mysql', 'mongodb')
// I) выведи в консоль длину массива
console.log(stack)





