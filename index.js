const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')

// Middleware 
app.use(cors())
app.use(express.json())

const users = [
    {
        id: 1, name: "Sab", email: "Sab@gmail.com"
    },
    {
        id: 2, name: "Pop", email: "Pop@gmail.com"
    },
    {
        id: 3, name: "Pur", email: "Pur@gmail.com"
    },
]

app.get('/', (req, res) => {
    res.send("This is backendServer.")
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.post('/users', (req, res) => {
    console.log("Post api hitting")
    console.log(req.body)

    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser)
    res.send(newUser)
})


app.listen(port, () => {
    console.log(`Server is running on Port: ${port}`)
})