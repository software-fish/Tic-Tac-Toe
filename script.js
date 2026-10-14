const player = {
    turn: true,
    marks: 'X',
    mark_color: "red"
}
const bot = {
    turn: false,
    marks: 'O',
    mark_color: "blue"
}
let count = 0
const outcome = document.getElementById("outcome")
const board = document.getElementById("board")
const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
let one_row = one && four && seven
let two_row = two && five && eight
let three_row = three && six && nine
let one_column = one && two && three
let two_column = four && five && six
let three_column = seven && eight && nine
let one_zag = seven && five && three
let other_zag = nine && five && one

board.addEventListener('click', ({ target }) => {
    if (target.id === "board") return;

    player.turn = !player.turn
    bot.turn = !bot.turn

    if (player.turn) {

    }
})