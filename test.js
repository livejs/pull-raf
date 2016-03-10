var test = require('tape')
var pull = require('pull-stream')

var pullRaf = require('./')

test('passes through', function (t) {
  t.plan(1)

  pull(
    pull.values([true]),
    pullRaf(),
    pull.drain(function (data) {
      t.ok(data)
    })
  )
})
