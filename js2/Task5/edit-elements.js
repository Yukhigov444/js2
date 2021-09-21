let characters = ["Рамси Болтон", "Тирион Ланнистер", "Станис Баратеон", "Теон Грейджой", "Эддард Старк",
    "Дайенерис Таргариен", "Джон Сноу"];

const king = "Король Ночи";
const stupid = "Бран Старк";

characters[0] = king
console.log(characters)

characters[1] = null
console.log(characters)

characters[2] = 'Станис кароль'
console.log(characters)

characters[3] = stupid
console.log(characters)

characters[4] = ['season', '01']
console.log(characters)

characters[5] = king + ' ' + stupid
console.log(characters)

characters[6] = king
console.log(characters)


// jsbin.com/?js,console
let test = ['a', 'b', 'c']
test[15] = 'z'
console.log(test.length)