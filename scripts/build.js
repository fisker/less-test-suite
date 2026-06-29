import assert from 'node:assert'
import fs from 'node:fs/promises'
import {outdent} from 'outdent'
import writePrettierFile from 'write-prettier-file'

async function* getFixtures() {
  const directory = new URL('../node_modules/@less/test-data/', import.meta.url)
  for await (let file of fs.glob('**/*.less', {cwd: directory})) {
    file = file.replaceAll('\\', '/')
    if (file.startsWith('tests-error/')) {
      continue
    }

    assert.ok(
      file.startsWith('tests-config/') ||
        file.startsWith('tests-unit/') ||
        file.startsWith('plugin/'),
      `Unexpected file '${file}'.`,
    )

    yield {
      name: file,
      input: await fs.readFile(new URL(file, directory), 'utf8'),
    }
  }
}

await writePrettierFile(
  new URL('../index.js', import.meta.url),
  outdent`
    // Generated file, do NOT edit

    export default ${JSON.stringify(await Array.fromAsync(getFixtures()), undefined, 2)}
  `,
)
