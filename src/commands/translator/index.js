const vscode = require('vscode');

module.exports = async function () {
       
    const apiKey = vscode.workspace.getConfiguration('easyspanishtranslator').get('token');

    if(!apiKey) {
        vscode.window.showErrorMessage('apiKey is required, please see the instruction to get the Api ke.');
        return;
    }
    
    const editor = vscode.window.activeTextEditor;
    const selectedText = editor.selection;
    const textToTranslate = editor.document.getText(selectedText);


    const data = JSON.stringify([
        {
            "Text": textToTranslate
        }
    ]);
    
    var XMLHttpRequest = require('xhr2');
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
            const myObj = JSON.parse(this.responseText);
            editor.edit(builder => builder.replace(selectedText, myObj[0].translations[0].text))
            vscode.window.showInformationMessage("Translated!");
            return;
        }
    });
    
    xhr.open('POST', 'https://microsoft-translator-text-api3.p.rapidapi.com/translate?to=es&from=en&textType=plain');
    xhr.setRequestHeader('x-rapidapi-key', apiKey);
    xhr.setRequestHeader('x-rapidapi-host', 'microsoft-translator-text-api3.p.rapidapi.com');
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.send(data);
    
}