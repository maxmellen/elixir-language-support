# Elixir Language Support

## Why another Elixir extension?

Before anything, I want to acknowledge the existence of two great Elixir extensions for VS Code:

- [vscode-elixir](https://marketplace.visualstudio.com/items?itemName=mjmcloug.vscode-elixir) by Mat McLoughlin
- [ElixirLS: Elixir support and debugger](https://marketplace.visualstudio.com/items?itemName=JakeBecker.elixir-ls) by Jake Becker

These respectively hook into [ElixirSense](https://github.com/msaraiva/elixir_sense) and [Elixir Language Server (ElixirLS)](https://github.com/JakeBecker/elixir-ls) to provide language _intelligence_ to VS Code.

I am really happy these projects exist, and I think they contribute a great deal to the Elixir community. They do however present some quirks but I am sure most users will be delighted with the _intelligence_ they provide.

I, myself, am content with _dumber_ language support, and simply letting VS Code do the rest (such as fuzzy completion).

In other words, if you would like to use an _intelligent_ Elixir extension, both extenstions mentioned above are actively maintained and should fit your needs. If you however wish to use something _dumber_, maybe this extension is the one for you.

## Features

This project uses the grammars, snippets and indentation rules from the [Atom Elixir package](https://github.com/elixir-editors/language-elixir) and lets VS Code handle the rest (i.e. fuzzy completion).

## License

This extension is licensed under the MIT License.

See [LICENSE](LICENSE).

## Third Party Notices

See [NOTICE](NOTICE).
