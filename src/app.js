const path = require('path');
const express = require('express');
const geocode =require('./utils/gecode');
const forecast = require('./utils/forecast');
const app = express();
const hbs = require('hbs');
const publicPath = path.join(__dirname+'/../public')
const viewsPath = path.join(__dirname+'/../templates/views')
const partialPath = path.join(__dirname+'/../templates/partial')
app.set('view engine','hbs')
app.set('views',viewsPath)
app.use(express.static(publicPath))
hbs.registerPartials(partialPath);
app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error: 'this address is not found'
        })
    }
    geocode(req.query.address,(error,{code,place}={})=>{
        if(error){
            return res.send({error})
        }
     forecast(code[1],code[0],place,(error2,data2)=>{
         if(error2){
            return res.send({error})
         }
         res.send({data2,place})
        
     })
    })
})
app.get('/products',(req,res)=>{
    if(!req.query.search){
    return res.send({error:'this product not found'})
    }
    console.log(req.query.search)
    res.send({
        products :[]
    })
})
app.get('/',(req,res)=>{
    res.render('index',{
     title: 'Weather-app',
     name : 'Mohamed Hesham'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title : 'About',
        name : 'Mohamed Hesham',
     aboutMe : 'about me'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title: 'Help',
     name : 'Mohamed Hesham',
     myName : 'this is some useful text'
    })
})
app.get('/help/*',(req,res)=>{
    res.render('notfound',{ help:'help article not found',
    name : 'Mohamed Hesham'})
})
app.get('*',(req,res)=>{
    res.render('notfound',{
        help: "this page is not found", 
        name : 'Mohamed Hesham'
    })
})
const port = process.env.PORT||3000;
app.listen(port,()=>{
    console.log(`listening on port ${port}`)

})