var pull = require('pull-stream')
var raf = require('raf')

module.exports = pullRaf

function pullRaf () {
  return pull.asyncMap(function (pixels, cb) {
    raf(function () {
      cb(null, pixels)
    })
  })
}
