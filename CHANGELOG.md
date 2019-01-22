# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [0.3.0] - 2019-01-22

### Added
- Syntax highlighting for mix.lock files
- Auto-close `<%` in EEx files

### Fixed
- Missing nested curly capture in string interpolation
- Do not auto-close `'` in strings or comments
- Do not auto-close `"` in strings

## [0.2.0] - 2019-01-07

### Added
- Support for `reraise` keyword
- Support for binary and octal underscore separators
- EEx language grammar
- HTML (EEx) language grammar

### Fixed
- `fn` snippet using unsupported syntax

## [0.1.0] - 2018-09-07
Initial release

### Added
- Elixir language grammar
- Elixir code snippets
- Document formatting through `mix format`
