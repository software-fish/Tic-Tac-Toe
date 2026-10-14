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

board.addEventListener('click', ({ target }) => {
    if (target.id === "board") return;

    player.turn = !player.turn
    bot.turn = !bot.turn

    if (player.turn) {
        
    }
})