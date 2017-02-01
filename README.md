Example repo showcasing an issue with debugging in jest.

## Setting it up

Run `npm install` and then run `node debug ./node_modules/.bin/jest -i`

## What's the problem?

Look at the `Component.js` file. There are two `debugger` statements.

The one in the `render` method breaks, but the one in the `clickHandler` doesn't.

However, the code inside the `clickHandler` runs, because the `console.log` output is visible.

## What about node --inspect

There's a known issue with this where breakpoints don't break at all: https://github.com/facebook/jest/issues/1652

## What about the V8 inspector in Node 7?

In the particular project I'm having this issue in, I'm using sinon's `fakeServer` which has issues with jsdom on this version of Node. There's also a known issue about this: https://github.com/tmpvar/jsdom/issues/1706

In any case, whenever I tried to use this, the browser just disconnects and it doesn't really work, probably due to its still experimental nature.