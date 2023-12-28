import {Grid} from "./grid";

const items: {id: number, values: string[]}[] = []

const letters = ['a', 'b', 'c', 'd', 'e']

for (let i = 0; i < 100000; i++) {
    let row = []
    for (let j = 0; j < 100; j++) {
        row.push(letters[(i + j) % letters.length])
    }
    items.push({id: i + 1, values: row})
}

let grid: Grid

document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.querySelectorAll('.root')[0]
    grid = new Grid(rootElement)
    grid.setItems(items)
})