## About
Welcome to uptime-jtm

<br>

## Installation
```sh-session
npm install uptime-jtm@latest
```

## Example
```js
const { Uptime } = require("uptime-jtm");

let url = ["url"];

//about the duration, can be customized at will
Uptime({ isUrl: url, isDuration: 1000, log: true });
```