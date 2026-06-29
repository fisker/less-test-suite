import assert from 'node:assert/strict'
import test from 'node:test'
import testCases from './index.js'

test('main', () => {
  assert.ok(Array.isArray(testCases) && testCases.length > 1)
  for (const testCase of testCases) {
    assert.equal(typeof testCase.name, 'string')
    assert.equal(typeof testCase.input, 'string')
  }
})
