const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());

const port = 8000;

// const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('This is my second time of node, i am just practising')
});

const users = [
    { id: 0, name: 'Shabana', email: 'Shabana@gmail.com', phone: '01788888888' },
    { id: 1, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '01788888888' },
    { id: 2, name: 'Shrabonti', email: 'Shrabonti@gmail.com', phone: '01788888888' },
    { id: 3, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '01788888888' },
    { id: 4, name: 'Soniya', email: 'Soniya@gmail.com', phone: '01788888888' },
    { id: 5, name: 'Susmita', email: 'Susmita@gmail.com', phone: '01788888888' },
]
app.get('/users', (req, res) => {
    //Use query parameter
    const search = (req.query.search)
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(searchResult)
    }
    else {
        res.send(users)
    }
})

//app.method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body)
    res.send('inside post')
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

//Dynamic API
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/hobby', (req, res) => {
    res.send(['skateboard', 'fpv-drone', 'cycling'])
});
app.get('/hobby/skateboard', (req, res) => {
    res.send('Notun ekta skateboard kinai lagbe bhai')
})

app.listen(port, () => {
    console.log('Listening to port', port)
})