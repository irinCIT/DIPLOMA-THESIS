const express = require('express');
const Datastore = require('nedb');


const app = express();
app.listen(4000, () => console.log('listening at 4000'));
app.use(express.static('html'));
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore('database.db');
database.loadDatabase();

app.post('/api', (request, response) => {
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    response.json(data);
  });