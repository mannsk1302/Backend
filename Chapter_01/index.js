require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

const githubData = {
    "login": "mannsk1302",
    "id": 138506116,
    "node_id": "U_kgDOCEFvhA",
    "avatar_url": "https://avatars.githubusercontent.com/u/138506116?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mannsk1302",
    "html_url": "https://github.com/mannsk1302",
    "followers_url": "https://api.github.com/users/mannsk1302/followers",
    "following_url": "https://api.github.com/users/mannsk1302/following{/other_user}",
    "gists_url": "https://api.github.com/users/mannsk1302/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mannsk1302/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mannsk1302/subscriptions",
    "organizations_url": "https://api.github.com/users/mannsk1302/orgs",
    "repos_url": "https://api.github.com/users/mannsk1302/repos",
    "events_url": "https://api.github.com/users/mannsk1302/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mannsk1302/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Mann Gwal",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 6,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-07-03T14:54:19Z",
    "updated_at": "2025-08-01T18:46:00Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/twitter', (req, res) => {
    res.send('manndotcom')
});

app.get('/login', (req, res) => {
    res.send('<h1>Please login at chai aur code</h1>')
});

app.get('/youtube', (req, res) => {
    res.send('<h2>Chai aur Code</h2>')
});

app.get('/github', (req, res) => {
    res.json(githubData);
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}!`)
});