const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const catagories = require('./categories.json');


app.use(cors());

app.get('/', (req,res) => {
    res.send('server is running okay');
});

app.get('/categories', (req,res) => {
    res.send(catagories);
})



app.listen(port, ()=> {
    console.log('education news server', port);
});