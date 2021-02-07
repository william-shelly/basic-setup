import { Message } from "./message.js"

let setup1 , basicSetupContainer, basicMessage, headlineH1Setup, headline, headlineH1;

basicSetupContainer = document.querySelector('#basic-container');
basicMessage = 'Hello World!';

headline = document.querySelector('#headline-h1');
headlineH1 = 'Hello JavaScript!';

setup1 = new Message
(basicSetupContainer, basicMessage);

headlineH1Setup = new Message
(headline, headlineH1);

document.addEventListener('DOMContentLoaded', function(){
    setup1.showMessage(basicSetupContainer, basicMessage);
    headlineH1Setup.showMessage(headline, headlineH1);
});
