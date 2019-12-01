const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev }) // dev的值表示是否使用next中的开发模式

const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { id: req.params.id }
    console.log(queryParams)
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, err => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
