# @afaanbilal/random-string

> Generate random strings of any length with an optional prefix (non-crypto use only)

[![](https://img.shields.io/npm/v/@afaanbilal/random-string.svg?style=for-the-badge)](https://www.npmjs.com/package/@afaanbilal/random-string)  
[![](https://img.shields.io/bundlephobia/min/@afaanbilal/random-string.svg?style=for-the-badge)](https://www.npmjs.com/package/@afaanbilal/random-string)  
[![](https://img.shields.io/github/license/AfaanBilal/random-string.svg?style=for-the-badge)](LICENSE.md)

## Install

```bash
npm i -S @afaanbilal/random-string
```

## Usage

```js
var randomString = require('@afaanbilal/random-string')

var str = randomString()
// -> UEQ1QnzGOIDXDVOw

var str = randomString({
    length: 12, // Optional, default: 16
    prefix: 'ID_', // Optional, default: ''
    charset: '1234567890' // Optional, default: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' 
})
// -> ID_328174983571
```

## License

[MIT](LICENSE.md)
