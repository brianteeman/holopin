# holopin

Holopin SDK for getting your badges programmatically in JavaScript/TypeScript.

## Usage

### Install

```
npm i holopin
```

### API

```javascript
const holopin = require('holopin');

holopin('vinitshahdeo')
    .then((badges) => console.log(badges))
    .catch(console.log);
```

```
```
Using callback

```javascript

holopin('vinitshahdeo', (err, badges) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(badges);
})

```

Using Async/await

```javascript
(async () => {
  try {
    let badges = await holopin('vinitshahdeo');
    console.log(badges);
  } catch (err) {
    // handle errors here
  }
})();
```

## Author

Vinit Shahdeo ❯ **[@vinitshahdeo](https://github.com/vinitshahdeo)**

[![Twitter Follow](https://img.shields.io/twitter/follow/Vinit_Shahdeo.svg?style=social)](https://twitter.com/Vinit_Shahdeo)

