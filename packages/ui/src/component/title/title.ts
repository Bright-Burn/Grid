import style from './title.module.css'

export function setupTitle(element: HTMLDivElement, text: string) {
  element.classList.add(style.title)
  element.innerHTML = text
}
