# less-test-suite

[![Npm Version][package_version_badge]][package_link]
[![MIT License][license_badge]][license_link]
[![Coverage][coverage_badge]][coverage_link]

[coverage_badge]: https://img.shields.io/codecov/c/github/fisker/less-test-suite.svg?style=flat-square
[coverage_link]: https://app.codecov.io/gh/fisker/less-test-suite
[license_badge]: https://img.shields.io/npm/l/less-test-suite.svg?style=flat-square
[license_link]: https://github.com/fisker/less-test-suite/blob/main/license
[package_version_badge]: https://img.shields.io/npm/v/less-test-suite.svg?style=flat-square
[package_link]: https://www.npmjs.com/package/less-test-suite

> LESS Parsing Test Suite.

## Install

```bash
yarn add less-test-suite
```

## Usage

```js
import lessTestSuite from 'less-test-suite'

console.log(lessTestSuite)
// =>
// [
//   {
//      name: 'tests-unit/whitespace/whitespace.less',
//      input: ...,
//   },
//   ...,
// ]
```

## Acknowledgments

Test cases comes from [Less](https://github.com/less/less.js/tree/master/packages/test-data) project.
