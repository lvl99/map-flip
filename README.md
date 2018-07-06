# Map Flip

Flip a Map's keys and values around (for fun and profit!):

```
  import mapFlip from "map-flip";

  const exampleMap = new Map([
    [0, "First"],
    [1, "Second"],
    [2, "Third"]
  ]);

  const exampleFlipped = mapFlip(testMap);

  /*
    exampleFlipped: Map = [
      ["First", 0],
      ["Second", 1],
      ["Third", 2],
    ]
  */
```

If you remember an old server-side scripting language called PHP, they had a function called `array_flip` which
was pretty cool. This function does something similar but for maps.

## Install

Use `npm` or `yarn` — whichever your preference:
```sh
  npm i map-flip
  yarn add map-flip
```

Require or import into your file:
```javascript
  // ES5
  // no transpilation required
  var mapFlip = require("map-flip/es5")

  // ES6
  // transpilation is required!
  import mapFlip from "map-flip"
  const mapFlip = require("map-flip")
```

## Contribute

Feel free if there's anything else to add.

Install developer dependencies:
```sh
  yarn
```

Test:
```sh
  yarn test
```

Build:
```sh
  yarn build
```

## License

Copyright (c) 2018, Matt Scheurich.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.