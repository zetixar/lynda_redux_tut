import C from './constants'
import { allSkiDays, goal } from './initialState.json'

console.log(`
  Sky Day Counter
  =================
  The goal is ${goal} days
  Initially there are ${allSkiDays.length} ski days in state

  Constants (actions)
  =================
  ${Object.keys(C).join('\n     ')}
`)
