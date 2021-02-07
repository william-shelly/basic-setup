import { BasicSetup } from "./basicSetup.js"

let basicSetup , basicSetupContainer, basicMessage;

basicSetup = new BasicSetup();

basicSetupContainer = document.querySelector('#basic-container');
basicMessage = 'basicSetup work!';

document.addEventListener('DOMContentLoaded', function(){
    basicSetup.showTest(basicSetupContainer, basicMessage);
});
