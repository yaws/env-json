/**
 * Imports
 */

import fs from 'fs'
import foreach from '@f/foreach-obj'

function load (path) {
  path = path || './'

  let env = JSON.parse(fs.readFileSync(path))

  foreach(setEnv, env)

  function setEnv (val, key) {
    process.env[key] = val
  }
}

export default load
