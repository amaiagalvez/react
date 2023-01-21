export function cleanGameStorage() {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}

export function saveGameToStorage({ board, turn }) {
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}