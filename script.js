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

const player = {
    turn: true,
    marks: 'X',
    mark_color: "red",
    one_row: one.textContent === "X" && four.textContent === "X" && seven.textContent === "X",
    two_row: two.textContent === "X" && five.textContent === "X" && eight.textContent === "X",
    three_row: three.textContent === "X" && six.textContent === "X" && nine.textContent === "X",
    one_column: one.textContent === "X" && two.textContent === "X" && three.textContent === "X",
    two_column: four.textContent === "X" && five.textContent === "X" && six.textContent === "X",
    three_column: seven.textContent === "X" && eight.textContent === "X" && nine.textContent === "X",
    one_zag: seven.textContent === "X" && five.textContent === "X" && three.textContent === "X",
    other_zag: nine.textContent === "X" && five.textContent === "X" && one.textContent === "X"
}
const bot = {
    turn: false,
    marks: 'O',
    mark_color: "blue",
    one_row: one.textContent === "O" && four.textContent === "O" && seven.textContent === "O",
    two_row: two.textContent === "O" && five.textContent === "O" && eight.textContent === "O",
    three_row: three.textContent === "O" && six.textContent === "O" && nine.textContent === "O",
    one_column: one.textContent === "O" && two.textContent === "O" && three.textContent === "O",
    two_column: four.textContent === "O" && five.textContent === "O" && six.textContent === "O",
    three_column: seven.textContent === "O" && eight.textContent === "O" && nine.textContent === "O",
    one_zag: seven.textContent === "O" && five.textContent === "O" && three.textContent === "O",
    other_zag: nine.textContent === "O" && five.textContent === "O" && one.textContent === "O"
}

board.addEventListener('click', ({ target }) => {
    if (target.id === "board") return;

    // Planning to do the bots part next day
    /*player.turn = !player.turn
    bot.turn = !bot.turn*/

    if (player.turn) {
        target.style.color = player.mark_color
        target.textContent = player.marks
        player.one_row = one.textContent === "X" && four.textContent === "X" && seven.textContent === "X"
        player.two_row = two.textContent === "X" && five.textContent === "X" && eight.textContent === "X"
        player.three_row = three.textContent === "X" && six.textContent === "X" && nine.textContent === "X"
        player.one_column = one.textContent === "X" && two.textContent === "X" && three.textContent === "X"
        player.two_column = four.textContent === "X" && five.textContent === "X" && six.textContent === "X"
        player.three_column = seven.textContent === "X" && eight.textContent === "X" && nine.textContent === "X"
        player.one_zag = seven.textContent === "X" && five.textContent === "X" && three.textContent === "X"
        player.other_zag = nine.textContent === "X" && five.textContent === "X" && one.textContent === "X"
        
        if (player.one_row || player.two_row || player.three_row || player.one_column || player.two_column || player.three_column || player.one_zag || player.other_zag) {
            outcome.textContent = "Player has won"
        }
    }
})