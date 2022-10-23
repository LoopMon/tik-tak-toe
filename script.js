function checkAreas(area) {
    if (
        // X
        ((area[0].textContent === 'X') && (area[1].textContent === 'X') && (area[2].textContent === 'X')) ||
        ((area[3].textContent === 'X') && (area[4].textContent === 'X') && (area[5].textContent === 'X')) ||
        ((area[6].textContent === 'X') && (area[7].textContent === 'X') && (area[8].textContent === 'X')) ||
        ((area[0].textContent === 'X') && (area[3].textContent === 'X') && (area[6].textContent === 'X')) ||
        ((area[1].textContent === 'X') && (area[4].textContent === 'X') && (area[7].textContent === 'X')) ||
        ((area[2].textContent === 'X') && (area[5].textContent === 'X') && (area[8].textContent === 'X')) ||
        ((area[0].textContent === 'X') && (area[4].textContent === 'X') && (area[8].textContent === 'X')) ||
        ((area[2].textContent === 'X') && (area[4].textContent === 'X') && (area[6].textContent === 'X'))
    ) {
        alert("X wins!")
        count = 10
    }
    if (
        // O
        ((area[0].textContent === 'O') && (area[1].textContent === 'O') && (area[2].textContent === 'O')) ||
        ((area[3].textContent === 'O') && (area[4].textContent === 'O') && (area[5].textContent === 'O')) ||
        ((area[6].textContent === 'O') && (area[7].textContent === 'O') && (area[8].textContent === 'O')) ||
        ((area[0].textContent === 'O') && (area[3].textContent === 'O') && (area[6].textContent === 'O')) ||
        ((area[1].textContent === 'O') && (area[4].textContent === 'O') && (area[7].textContent === 'O')) ||
        ((area[2].textContent === 'O') && (area[5].textContent === 'O') && (area[8].textContent === 'O')) ||
        ((area[0].textContent === 'O') && (area[4].textContent === 'O') && (area[8].textContent === 'O')) ||
        ((area[2].textContent === 'O') && (area[4].textContent === 'O') && (area[6].textContent === 'O'))
    ) {        
        alert("O wins!")
        count = 10
    }
    if (count == 9) {
        alert("Velha")
    }
}

const game = document.querySelector(".game")
const areas = game.querySelectorAll(".areas")
const restart = document.querySelector(".controls button")
const turnInfo = document.querySelector(".infos .turn")
let count = 0

let turn = 0 // X
const players = ["X", "O"]

areas.forEach((element) => {
    element.addEventListener("click", () => {
        
        if (element.textContent.length == 0 && count < 9) {
            element.textContent = players[turn]
            count += 1
            if (turn === 0) {
                turn = 1
            } else {
                turn = 0
            }
            checkAreas(areas, count)
            turnInfo.textContent = `Vez de: ${players[turn]}`
        }
        

    })
})

restart.onclick = () => {
    areas.forEach((element) => {
        element.textContent = ""
        count = 0
        turn = 0
        turnInfo.textContent = "Vez de: X"
    })
}