const express = require('express')
const app = express()

const port = 3000

// Users data
const usersList = [
  {
    id: 1,
    name: 'Phi Hao Tran',
    displayName: 'Nickie T',
  },
  {
    id: 2,
    name: 'Le Quynh Nhu Tran',
    displayName: 'Sarah T',
  },
]

// Get Method
app.get('/', (req, res) => {
  res.status(201).send('Hello World!')
})

app.get('/api/users', (req, res) => {
  console.log('Full usersList:', usersList)
  console.log('Array length:', usersList.length)
  res.json(usersList)
})

app.get('/api/users/:id', (req, res) => {
  const parsedId = parseInt(req.params.id)
  console.log(parsedId)

  const user = usersList.find((u) => u.id === parsedId)

  if (!user) {
    return res.status(404).send({ error: 'User not found' })
  }

  res.send(user)
})

app.listen(port, () => {
  console.log(`Your Backend is running at: http://localhost:${port}`)
})
