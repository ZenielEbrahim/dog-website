const path = require('path')

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const hbs = require('hbs')

const publicPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')



app.use(express.static(publicPath))


app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)
app.get('', (req,res) =>{
    res.render('index',{name:'Zeniel'})
})
app.get('/about', (req,res) =>{
    res.render('about')
})

app.get('/*', (req, res)=>{
    res.render('404')
})
app.listen(port, ()=>{
    console.log('app is up on port' + port)
})