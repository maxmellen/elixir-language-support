# Elixir Language Support

Basic support for the Elixir programming language in VS Code.

## Features

This extension provides VS Code with syntax highlighting and snippets for the
Elixir programming language. It also integrates with `mix format` to provide
document formatting. This can be enabled on save by adding the following
snippet to your user or workspace's `settings.json` file:
```json
{
  // ...
  "[elixir]": {
    "editor.formatOnSave": true
  },
  // ...
}
```

## Motivation

There already exist two popular VS Code extensions for the Elixir programming
language:
- [ElixirLS: Elixir support and debugger][JakeBecker.elixir-ls]
- [vscode-elixir][mjmcloug.vscode-elixir]

These extensions are both more featureful than this one, providing for example
intelligent code completion. However, both have their quircks and default
settings that might appear oppinionated to some users. They also both provide
their own language grammars and snippets which are maintained seperately and
might not be up to date with each other.

This extension aims to provide bare-bones language support for the Elixir
programming language, taking as many settings as possible from upstream
sources. Its language grammar
and snippets, as well as some other settings are taken directly from
[Elixir.tmbundle][elixir-tmbundle]. One of the aims of this extension is to
stay up to date with upstream sources, forwarding issues and changes upstream, hoping that other extensions might build upon it.

## License

This extension is published under [the MIT license](LICENSE).

## Acknowledgements

The Elixir language grammar and snippets, as well as some other settings are
taken directly from [Elixir.tmbundle][elixir-tmbundle] which is released under
[the Apache License, Version 2.0](ACKNOWLEDGMENTS).

[elixir-tmbundle]: https://github.com/elixir-editors/elixir-tmbundle
[JakeBecker.elixir-ls]: https://marketplace.visualstudio.com/items?itemName=JakeBecker.elixir-ls
[mjmcloug.vscode-elixir]: https://marketplace.visualstudio.com/items?itemName=mjmcloug.vscode-elixir
