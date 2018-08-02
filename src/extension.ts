'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import ElixirDocumentFormattingEditProvider
    from './ElixirDocumentFormattingEditProvider';

const ELIXIR_MODE: vscode.DocumentSelector = [
    { language: 'elixir', scheme: 'file' },
    { language: 'elixir', scheme: 'untitled' }
];

// this method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
    let outputChannel =
        vscode.window.createOutputChannel('Elixir Language Support');

    let elixirDocumentFormattingEditProvider =
        new ElixirDocumentFormattingEditProvider(outputChannel);

    let elixirDocumentFormattingEditProviderDisposable =
        vscode.languages.registerDocumentFormattingEditProvider(
            ELIXIR_MODE, elixirDocumentFormattingEditProvider);

    context.subscriptions.push(elixirDocumentFormattingEditProviderDisposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}
