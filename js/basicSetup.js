export class BasicSetup {

    constructor(container, message) {
        this.container = container;
        this.message = message;
    }

    showTest(container, message) {
        // console.log(message);
        container.innerHTML = message;
    };
}
