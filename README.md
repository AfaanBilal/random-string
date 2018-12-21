# @afaanbilal/random-string

> Generate random strings of any length with an optional prefix (non-crypto use only)

## Install

```bash
npm i -S @afaanbilal/random-string
```

## Usage

```js
var randomString = require('')

var str = randomString({
    length: 12 // Optional, default: 16
    prefix: 'ID_', // Optional, default: ''
    charset: '1234567890' // Optional, default: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' 
})
```

## License

[MIT](LICENSE.md)
