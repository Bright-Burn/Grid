export class CheckboxUI {
    create() {
        const checkboxElement = document.createElement('input');
        checkboxElement.type = 'checkbox';
        checkboxElement.classList.add('checkbox');
        return checkboxElement;
    }
}
