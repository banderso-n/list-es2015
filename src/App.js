import ListComponent from './components/ListComponent';
import FormComponent from './components/FormComponent';

class App {

    constructor() {
        const listElement = document.querySelector('#js-list');
        this.list = new ListComponent(listElement);

        const formElement = document.querySelector('#js-form');
        this.form = new FormComponent(formElement);
    }

    start() {
        this.list.enable();
        this.form.enable();
    }
}

export default App;
