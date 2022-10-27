const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req,res) => {
    res.send('server is running okay');
});

app.listen(port, ()=> {
    console.log('education news server', port);
});