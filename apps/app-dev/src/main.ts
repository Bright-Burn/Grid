import { GridOption, createGrid } from '@grid/grid'
import './style.css'
// TODO: временное решение со стилями из packages
import '@grid/grid/dist/style.css'
import { setupCounter, setupTitle } from '@grid/ui'
import '@grid/ui/dist/style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div id="title"></div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <div id="grid"></div>
  </div>
`

const gridOptions: GridOption = {
  rowData: [
    { make: 'Tesla', model: 'Model Y', price: '64950', electric: 'yes' },
    { make: 'Ford', model: 'F-Series', price: '33850', electric: 'no' },
    { make: 'Toyota', model: 'Corolla', price: '29600', electric: 'no' },
  ],
  columnDefs: [{ field: 'make' }, { field: 'model' }, { field: 'price' }, { field: 'electric' }],
}

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
setupTitle(document.querySelector<HTMLDivElement>('#title')!, 'GRID start')
createGrid(document.querySelector<HTMLDivElement>('#grid')!, gridOptions)
