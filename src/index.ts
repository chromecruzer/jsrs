import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { fibonacci, sum } from '@bunvader/rustacean'  // my-module
import { fibonacci2 } from './jsmod'


const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

// rs endpoint
app.get('/rust-rs', async (c) => {
  let val = fibonacci(30)
  return c.json({ msg: `RUST -> ${val}` }, 200)
})

app.get('/node-js', async (c) => {
  let val = fibonacci2(30)
  return c.json({ msg: `NODE -> ${val}` }, 200)
})

// rust fn()s
console.log(sum(2, 3))

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
