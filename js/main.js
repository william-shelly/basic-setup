import { BasicSetup } from "./basicSetup.js"

let setup1 , basicSetupContainer, basicMessage, headlineH1Setup, headlineContainerH1, headlineH1;

basicSetupContainer = document.querySelector('#basic-container');
basicMessage = 'Hello World!';

headlineContainerH1 = document.querySelector('#headline-h1');
headlineH1 = 'Hello JavaScript!';

setup1 = new BasicSetup(basicSetupContainer, basicMessage);

headlineH1Setup = new BasicSetup(headlineContainerH1, headlineH1);

document.addEventListener('DOMContentLoaded', function(){
    setup1.showTest(basicSetupContainer, basicMessage);
    headlineH1Setup.showTest(headlineContainerH1, headlineH1);
});
