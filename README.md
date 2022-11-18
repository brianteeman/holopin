[![@vinitshahdeo's Holopin board](https://holopin.me/vinitshahdeo)](https://holopin.io/@vinitshahdeo)
# 🦖 holopin

**Holopin SDK for getting your badges programmatically in JavaScript/TypeScript.**

> [Holopin](https://www.holopin.io/) is a platform that allows you to **issue digital badges** that people love ━ this is for you if you love collecting badges. Here's my collection: [holopin.io/@vinitshahdeo](https://www.holopin.io/@vinitshahdeo)

## Installation

```bash
npm i holopin
```

## Usage

To use this, you need to provide your **Holopin** username. If you don't have one, [create your profile](https://www.holopin.io/) to get your username.

```javascript
const holopin = require("holopin");

// replace 'vinitshahdeo' with your username
holopin("vinitshahdeo")
  .then((badges) => console.log(badges))
  .catch(console.log);
```

You can also use it with Callback or Async/Await.
#### Using callback

```javascript
holopin("vinitshahdeo", (err, badges) => {
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
    let badges = await holopin("vinitshahdeo");
    console.log(badges);
  } catch (err) {
    // handle errors here
  }
})();
```

## Author

Vinit Shahdeo ❯ **[@vinitshahdeo](https://github.com/vinitshahdeo)**

[![Twitter Follow](https://img.shields.io/twitter/follow/Vinit_Shahdeo.svg?style=social)](https://twitter.com/Vinit_Shahdeo)
