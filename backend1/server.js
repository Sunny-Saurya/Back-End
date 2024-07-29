import express from 'express'
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Hello Everybody I am trying this my own.")
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "This is first joke",
            body: "Here is joke number one this is also a joke"
        },
        {
            id: 2,
            title: "This is first joke",
            body: "Here is joke number one this is also a joke"
        },
        {
            id: 11,
            title: "This is first joke",
            body: "Here is joke number one this is also a joke"
        },
        {
            id: 13,
            title: "This is first joke",
            body: "Here is joke number one this is also a joke"
        },
        {
            id: 6,
            title: "This is first joke",
            body: "Here is joke number one this is also a joke"
        },
        {
            id: 8,
            title: "This is first joke",
            body: "Here is joke number one this is also a joke"
        },
        {
            id: 19,
            title: "This is first joke",
            body: "Here is joke number one this is also a joke"
        },
        {
            id: 20,
            title: "This is first joke",
            body: "Here is joke number one this is also a joke"
        },
        {
            id: 123,
            title: "This is first joke",
            body: "Here is joke number one this is also a joke"
        },
        {
            id: 13,
            title: "This is first joke",
            body: "Here is joke number one this is also a joke"
        },
        {
            id: 0,
            title: "This is first joke",
            body: "Here is joke number one this is also a joke"
        },
    ]
    res.json(jokes)
})

app.listen(port, () => {
    console.log(`This server is running at ${port}`)
})