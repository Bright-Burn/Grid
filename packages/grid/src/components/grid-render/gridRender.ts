import style from './style.module.css'
import { GridOption } from './type'

const WIDTH = '100px'

const getRows = (gridOptions: GridOption) => {
  const { rowData, columnDefs } = gridOptions
  const table = document.createElement('div')
  table.classList.add(style.grid)
  rowData.forEach(row => {
    const rowElement = document.createElement('div')
    rowElement.classList.add(style.row)
    columnDefs.forEach(column => {
      const value = row[column.field]
      const cell = document.createElement('div')
      cell.classList.add(style.cel)
      cell.style.width = WIDTH
      cell.innerHTML = String(value)
      rowElement.append(cell)
    })
    table.appendChild(rowElement)
  })
  return table
}

export function createGrid(element: HTMLDivElement, gridOptions: GridOption) {
  element.appendChild(getRows(gridOptions))
}
