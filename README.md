[![@vinitshahdeo's Holopin board](https://holopin.me/vinitshahdeo)](https://holopin.io/@vinitshahdeo)

# 🦖 holopin

**Holopin (unofficial) SDK for getting a list of your badges programmatically in JavaScript/TypeScript.**

[![npm-holopin](https://img.shields.io/npm/v/holopin?logo=npm)](https://www.npmjs.com/package/holopin) ![GitHub](https://img.shields.io/github/license/vinitshahdeo/holopin?logo=github)

> [Holopin](https://www.holopin.io/) is a platform that allows you to **create and collect digital badges** that people love ━ **this is for you if you love collecting badges**. Here's my collection: [holopin.io/@vinitshahdeo](https://www.holopin.io/@vinitshahdeo). Read "[Introducing Holopin: the digital badge platform for developers!](https://dev.to/elenalape/introducing-holopin-the-digital-badge-platform-for-developers-2hlk)" by [@elena_lape](https://twitter.com/elena_lape) to learn more.

## Installation

```bash
npm i holopin
```

## Usage

To use this, you need to provide your **Holopin** username. If you don't have one, [create your profile](https://www.holopin.io/) to get your username.

```javascript
const holopin = require('holopin');

// replace 'vinitshahdeo' with your username
holopin('vinitshahdeo')
  .then((badges) => console.log(badges))
  .catch(console.log);
```

This returns the list of badges. Below is response structure:

```javascript
{
  data: {
    count: 7,
    stickers: [
      // list of badges
    ]
  }
}
```
> Please refer to [sample.json](./data/sample.json) for the sample response.

Alternatively, you can also use it with Callback or Async/Await.

#### Using callback

```javascript
holopin('vinitshahdeo', (err, badges) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(badges);
});
```

#### Using Async/await

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

✨🦖✨🦖✨
