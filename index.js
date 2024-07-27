require ('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const githubData = {

    "login": "Sunny-Saurya",
    "id": 137380955,
    "node_id": "U_kgDOCDBEWw",
    "avatar_url": "https://avatars.githubusercontent.com/u/137380955?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Sunny-Saurya",
    "html_url": "https://github.com/Sunny-Saurya",
    "followers_url": "https://api.github.com/users/Sunny-Saurya/followers",
    "following_url": "https://api.github.com/users/Sunny-Saurya/following{/other_user}",
    "gists_url": "https://api.github.com/users/Sunny-Saurya/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Sunny-Saurya/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Sunny-Saurya/subscriptions",
    "organizations_url": "https://api.github.com/users/Sunny-Saurya/orgs",
    "repos_url": "https://api.github.com/users/Sunny-Saurya/repos",
    "events_url": "https://api.github.com/users/Sunny-Saurya/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Sunny-Saurya/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Sunny | Engineering Student | Computer Science Enthusiast",
    "company": null,
    "blog": "",
    "location": "Phagwara, Punjab",
    "email": null,
    "hireable": null,
    "bio": "👋 Hello! I'm Sunny, an engineering student at Lovely Professional University, Punjab, with a deep passion for computer science and technology. ",
    "twitter_username": "SunyPraaati1",
    "public_repos": 17,
    "public_gists": 1,
    "followers": 7,
    "following": 7,
    "created_at": "2023-06-22T06:41:16Z",
    "updated_at": "2024-06-23T14:06:38Z"
  
  }

app.get('/twitter',(req, res)  => {
    res.send('Twitter API')
})

app.get('/login',(req, res) => {
    res.send('<h1> Please login at sunnys.com </h1>')
})


app.get('/github', (req,res) => {
    // res.send(githubData)
    res.json(githubData);
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Welcome to My youtube Channel </h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})