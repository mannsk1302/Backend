// const express = require("express");
import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'I told my computer I needed a break, and now it won’t stop sending me KitKat ads.'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'I told my computer I needed a break, and now it won’t stop sending me KitKat ads.'
        },
        {
            id: 3,
            title: 'Third joke',
            content: 'I told my computer I needed a break, and now it won’t stop sending me KitKat ads.'
        },
        {
            id: 4,
            title: 'Fourth joke',
            content: 'I told my computer I needed a break, and now it won’t stop sending me KitKat ads.'
        },
        {
            id: 5,
            title: 'Fifth joke',
            content: 'I told my computer I needed a break, and now it won’t stop sending me KitKat ads.'
        }
    ];
    res.send(jokes)
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App listening on port ${port} at http://localhost:${port}!`)
});