const express = require('express')
const app = express()
const port = 3000

app.post('/token', (req, res) => {
    const body = {
        token: "EXAMPLE_TOKEN"
    }
    res.send(JSON.stringify(body))
})

app.get('/newsfeed', (req, res) => {
    const data = {
        "page": 1,
        "data": [
            {
                "id": 1,
                "title": "Senator Tests Positive for COVID",
                "description": "This is shocking news.",
                "source": "https://www.wsj.com/articles/sen-bill-cassidy-tests-positive-for-covid-19-11597952306",
                "picture": "https://www.shutterstock.com/image-photo/coronavirus-2019ncov-novel-concept-resposible-asian-1625951248",
                "news_feed": {
                    "name": "Wall Street Journal"
                }
            },
            // ...
        ]
    }

    res.send(JSON.stringify(data))
})

app.post('/map', (req, res) => {
    const data = [
        {
            "id": "pin-1",
            "type": "pin",
            "latitude": 48.866,
            "longitude": 2.333,
            "color": "red",
            "title": "My pin",
            "description": "My pin description",
            "popup": {
                "name": "My pin",
                "address": "address of my pin",
                "zipcode": "75000",
                "city": "Paris",
                "country": "FR",
                "phone": "cellphone of my pin"
            }
        },
        {
            "id": "circle-1",
            "type": "circle",
            "latitude": 48.866,
            "longitude": 2.333,
            "radius": 1000,
            "color": "rgba(0,0,0,0.5)"
        },
        // ...
    ]

    res.send(JSON.stringify(data))
})

app.post('/track', (req, res) => {
    const data = {
        "success": true
    }

    res.send(JSON.stringify(data))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})