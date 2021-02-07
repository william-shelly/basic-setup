export class Message
 {

    constructor(container, message) {
        this.container = container;
        this.message = message;
    }

    showMessage(container, message) {
        // console.log(message);
        container.innerHTML = message;
    };
}
