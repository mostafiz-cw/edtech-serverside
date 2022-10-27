const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const catagories = require('./categories.json');
const courses = require('./courses.json');



app.use(cors());

app.get('/', (req,res) => {
    res.send('server is running okay');
});

app.get('/categories', (req,res) => {
    res.send(catagories);
})

app.get('/courses/:id', (req,res) => {
    const id = req.params.id;
    console.log(id);
    const selectCourse = courses.find(n => n._id === id);
    res.send(selectCourse)
});

app.get('/catagory/:id', (req,res)=>{
    const id = req.params.id;
    const selectCatagory = courses.find(n => n.category_id ===id);
    res.send(selectCatagory);

});


app.get('/course', (req,res) => {
    res.send(courses);
})



app.listen(port, ()=> {
    console.log('education news server', port);
});