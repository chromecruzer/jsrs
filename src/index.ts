import { Hono } from 'hono'
import { fibonacci, sum, trialFinder } from '@bunvader/rustacean'  // my-module

const app = new Hono()

// JS functions
function fibonacci2(n: number): number {
  if (n <= 1) {
    return n;
  }
  return fibonacci2(n - 1) + fibonacci2(n - 2);
}

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

// rs endpoint
app.get('/rust-rs', async (c) => {
  let val = fibonacci(30)
  return c.json({ msg: `RUST -> ${val}` }, 200)
})

app.get('/bun-js', async (c) => {
  let val = fibonacci2(30)
  return c.json({ msg: `BUN -> ${val}` }, 200)
})

// rust fn()s
console.log(sum(2, 3))
console.log(trialFinder("Mukkan", 37))
//console.log(callMe())
export default app
