import express from 'express';

const categories = ['Food', 'Gaming', 'Coding', 'Other'] // array of categories



const entries = [
    { category: 'Food', content: 'I ate some toast today' },
    { category: 'Coding', content: 'I wrote some code today' },
    { category: 'Other', content: 'I did something else today' },
    { category: 'Gaming', content: 'I played some games today' },
]

const app = express(); // create express app

app.use(express.json()); // use express middleware to parse JSON body

app.get('/', (_, res) => { // _ means we don't care about the first argument
    res.send({info: 'Journal API'}); // send back a json object
});

app.get('/categories', (_, res) => res.send(categories)); // send back a json object

app.get('/entries', (_, res) => res.send(entries)); // send back a json object

app.get('/entries/:id', (req, res) => { 
    const entry = entries[req.params.id - 1]; // get the entry from the entries array
    if (entry) {
        res.send(entry); // send back a json object

    } else {
        res.status(404).send({error: 'Entry not found'}); // send back a json object
    }

});

app.post('/entries', (req, res) => {
    console.log(req.body); // log the request body to the console
    // 1. get the category and content from the request body
    // 2. validate the category and content
    // 3. create a new entry object

    // 4. add the entry to the entries array
    entries.push(req.body)
    // 5. respond with 201 Created and the new entry
    // 6. if there is an error, respond with 400 Bad Request
    res.status(201).send(entries[entries.length - 1]); // send back a json object
});

app.listen(4001, () => { // port 4001
    console.log('Server is running on http://127.0.0.1:4001'); // log to console
});
