import { exec } from 'child_process';
import * as vscode from 'vscode';

export default class ElixirDocumentFormattingEditProvider
    implements vscode.DocumentFormattingEditProvider {
    provideDocumentFormattingEdits(
        document: vscode.TextDocument,
        _options: vscode.FormattingOptions,
        _token: vscode.CancellationToken
    ): vscode.ProviderResult<vscode.TextEdit[]> {
        return document.save().then(_fileSaved => {
            let workspaceFolder =
                vscode.workspace.getWorkspaceFolder(document.uri);

            if (!workspaceFolder) { return Promise.reject(); }

            let cwd = workspaceFolder.uri.fsPath;
            let fileName = vscode.workspace.asRelativePath(document.uri);

            return mixFormat(cwd, fileName);
        }).then(() => null, () => null);
    }
}

function mixFormat(cwd: string, fileName: string): Thenable<void> {
    return new Promise((resolve, reject) => {
        exec(`mix format ${fileName}`, { cwd }, (error, _stdout, _stderr) => {
            if (error) { return reject(error); }
            return resolve();
        });
    });
}
