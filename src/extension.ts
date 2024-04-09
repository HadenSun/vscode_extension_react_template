// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import path from 'path';
import {
	Message,
	COMMAND,
	MessageFromExtension
} from "./models/message.model";
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	var _panel:vscode.WebviewPanel|undefined;

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vscode-extension-react-template" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('vscode-extension-react-template.helloWorld', () => {
		// Create HTML
        const panel = vscode.window.createWebviewPanel(
			'vscode-extension-react-template',
			'Webview Demo',
			vscode.ViewColumn.One,
			{
				enableFindWidget: true,
				enableScripts: true,
				localResourceRoots: [
					vscode.Uri.joinPath(context.extensionUri, "out"),
					vscode.Uri.joinPath(context.extensionUri, "webview/build")
				],
				retainContextWhenHidden: true
			}
		);
		
		const lightIconPath = getFileUri(panel.webview, context.extensionPath, ["media", "icon-light.svg"]);
		const darkIconPath = getFileUri(panel.webview, context.extensionPath, ["media", "icon-dark.svg"]);
		
		panel.iconPath = {
			light: lightIconPath,
			dark: darkIconPath
		};

		const stylesUri = getUri(panel.webview, context.extensionUri, [
			"webview",
			"build",
			"static",
			"css",
			"main.css",
		]);

		const scriptUri = getUri(panel.webview, context.extensionUri, [
			"webview",
			"build",
			"static",
			"js",
			"main.js",
		]);

		const nonce = getNonce();
		
		panel.webview.html=/*html*/ `
			<!DOCTYPE html>
			<html lang="en">
				<head>
					<meta charset="utf-8">
					<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
					<meta name="theme-color" content="#000000">
					<meta http-equiv="Content-Security-Policy" content="default-src 'self' ; style-src 'unsafe-inline' ${panel.webview.cspSource}; script-src 'nonce-${nonce}';">
	
					<link rel="stylesheet" type="text/css" href="${stylesUri}">
					<title>Hello World</title>
				</head>
				<body>
					<noscript>You need to enable JavaScript to run this app.</noscript>
					<div id="root"></div>
					<script nonce="${nonce}" src="${scriptUri}"></script>
				</body>
			</html>
		`;

		// handle the message from webview
		panel.webview.onDidReceiveMessage(
			(message: Message) => {
				const command = message.command;

				switch (command) {
					case COMMAND.testMessageFromWebview:
						vscode.window.showInformationMessage(message.data.message);
						return;
				}
			}
		);

		_panel = panel;

	});

	context.subscriptions.push(disposable);

	context.subscriptions.push(vscode.commands.registerCommand('vscode_extension_react_template.sendMessage', () => {
		const message: MessageFromExtension = {
			command: COMMAND.testMessageFromExtension,
			data: {
				message: "The message from extension."
			}
		};
		_panel?.webview.postMessage(message);

	}));

}

// This method is called when your extension is deactivated
export function deactivate() {}

function getFileUri(webview: vscode.Webview, extensionPath: string, pathList: string[]) {
    return vscode.Uri.file(path.join(extensionPath, ...pathList).toString());
}

function getUri(webview: vscode.Webview, extensionUri: vscode.Uri, pathList: string[]) {
	return webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, ...pathList));
}

function getNonce() {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 32; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}