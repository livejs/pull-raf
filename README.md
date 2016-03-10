# pull-raf

[`raf`](https://www.npmjs.com/package/raf) as a [through](https://github.com/dominictarr/pull-stream-examples/blob/c7d58d9b136682833234eaebb88fd9c6dacf04c2/pull.js#L57-L78) [pull stream](https://github.com/dominictarr/pull-stream)

made to control the flow of pixel streams.

## install

with [`npm`](https://www.npmjs.com):

```shell
npm install --save pull-raf
```

## usage

### `raf = require('pull-raf')`

### `pull(source, raf(), sink)`

## source

```js
pull.asyncMap(function (pixels, cb) {
  raf(function () {
    cb(null, pixels)
  })
})
```
