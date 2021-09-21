let characters = ["Тирион Ланнистер", "Станис Баратеон", "Теон Грейджой", "Эддард Старк", "Дайенерис Таргариен", "Джон Сноу"];

let firstElement = 'Тирион Ланнистер'
console.log(firstElement)

let lastElement = 'Джон Сноу'
console.log(lastElement)

characters.shift()
console.log(characters)

characters.push(firstElement)
console.log(characters)

characters.unshift('Король ночи')
console.log(characters)

delete characters[5]
console.log(characters)

characters.unshift(lastElement)
console.log(characters)

