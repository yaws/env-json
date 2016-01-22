
# env-json

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Load environment variables from .env.json.

## Installation

    $ npm install @yaws/env-json

## Usage
As early as possible, require and call env-json.

```js
require('@yaws/env-json')()
```

## API

### envJson(path)

- `path` - path to .env.json, defaults to './'

## License

MIT

[travis-image]: https://img.shields.io/travis/yaws/env-json.svg?style=flat-square
[travis-url]: https://travis-ci.org/yaws/env-json
[git-image]: https://img.shields.io/github/tag/yaws/env-json.svg
[git-url]: https://github.com/yaws/env-json
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@yaws/env-json.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@yaws/env-json
