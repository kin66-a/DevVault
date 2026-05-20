const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const port = 3000


app.use(express.static('public'))


//Set EJS as the templating engine
app.set('view engine', 'ejs');
//setting expressLayouts
app.use(expressLayouts)


//handles localhost:3000/
app.get('/', (req, res) =>{
    res.render('index', {title: 'Welcome', message: 'Dynamic content with EJS and Express'})
})

//handles localhost:3000/notes
app.get('/notes', (req, res) =>{
    res.render('notes')
})

//handles localhost:3000/tasks
app.get('/tasks', (req, res) =>{
    res.render('tasks')
})

//handles localhost:3000/dashboard
app.get('/dashboard', (req, res) =>{
    res.render('dashboard')
})




app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
})

