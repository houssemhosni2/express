const express = require('express')
const app = express()
const port = 3000

app.set('views', './views')
app.set('view engine', 'pug')
app.use(function (req, res, next) {
    let today = new Date();
    let time = today.getHours()
    let day = today.getDay()
    if(time>8 && time<17 && day>0 && day<6) next();
    else res.render('workingtime');
  });
app.get('/', (req, res) =>{
    res.render('home')
} )
app.get('/services', (req, res) =>{
    res.render('services')
} )
app.get('/contact', (req, res) =>{
    res.render('contact')
} )

app.listen(port, ()=> console.log(`server running on http://localhost:${port}`))