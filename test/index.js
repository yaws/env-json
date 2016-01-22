/**
 * Imports
 */

import test from 'tape'
import envJSON from '../src'

/**
 * Tests
 */

test('should load into env', (t) => {
  envJSON(__dirname + '/fixtures/.env.json')
  t.equal(process.env.FOO, 'bar')
  t.end()
})
