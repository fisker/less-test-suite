type TestCase = {
  readonly name: string,
  readonly input: string,
}

declare const Suite: readonly (TestCase)[]

export default Suite
