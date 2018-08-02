import { execFile } from 'child_process';
import * as vscode from 'vscode';

export default class ElixirDocumentFormattingEditProvider
    implements vscode.DocumentFormattingEditProvider {
    private outputChannel: vscode.OutputChannel;

    constructor(outputChannel: vscode.OutputChannel) {
        this.outputChannel = outputChannel;
    }

    provideDocumentFormattingEdits(
        document: vscode.TextDocument,
        _options: vscode.FormattingOptions,
        _token: vscode.CancellationToken
    ): vscode.ProviderResult<vscode.TextEdit[]> {
        let workspaceFolder = vscode.workspace.getWorkspaceFolder(document.uri);
        let workspaceFolderPath = workspaceFolder && workspaceFolder.uri.fsPath;
        let documentText = document.getText();

        return execMixFormat(documentText, workspaceFolderPath)
            .then(
                formattedText => [replaceFullDocumentText(document, formattedText)],
                mixFormatError => {
                    this.outputChannel.append(mixFormatError);
                    return null;
                }
            );
    }
}

function execMixFormat(inputText: string, workingDirectory?: string): Thenable<string> {
    return new Promise((resolve, reject) => {
        let mixFormatProcess =
            execFile('mix', ['format', '-'], { cwd: workingDirectory },
                (error, formattedText, mixFormatError) => {
                    if (error) { return reject(mixFormatError); }
                    return resolve(formattedText);
                });

        mixFormatProcess.stdin.write(inputText);
        mixFormatProcess.stdin.end();
    });
}

function replaceFullDocumentText(document: vscode.TextDocument, newText: string): vscode.TextEdit {
    let firstLine = document.lineAt(0);
    let lastLine = document.lineAt(document.lineCount - 1);
    let fullRange = new vscode.Range(firstLine.range.start, lastLine.range.end);
    return vscode.TextEdit.replace(fullRange, newText);
}
