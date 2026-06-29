import {expectType} from 'tsd'
import testCases from './index.js'

for (const testCase of testCases) {
  expectType<string>(testCase.name)
  expectType<string>(testCase.input)
}
