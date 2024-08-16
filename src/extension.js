const vscode = require('vscode');
const translator =  require('./commands/translator')
const helloWorld =  require('./commands/helloWorld')

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('Congratulations, your extension "easy-spanish-translator" is now active!');

	const commands = [
		vscode.commands.registerCommand('easy-spanish-translator.easyspanishtranslator', translator),
		vscode.commands.registerCommand('easy-spanish-translator.helloWorld', helloWorld),
	]

	context.subscriptions.push(commands);
}


function deactivate() {}

module.exports = {
	activate,
	deactivate
}
