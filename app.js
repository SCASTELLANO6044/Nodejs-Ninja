const express = require('express');

//express app
const app = express();

//register view engine
app.set('view engine','ejs');

//listen for request
app.listen(3000);

app.get('/',(req,res)=>{
    res.render('index');
    //res.sendFile('./views/index.html',{root: __dirname});
    //res.send('<h1>This is home page</h1>');
});

app.get('/about',(req,res)=>{
    res.render('about');
    //res.sendFile('./views/about.html',{root: __dirname});
    //res.send('<h1>This is home page</h1>');
});

app.get('/blogs/create',(req, res)=>{
    res.render('create')
})

/*
//redirects
app.get('/about-us',(req,res)=>{
    res.redirect('/about');
})
*/
//404
app.use((req,res)=>{
    res.status(404).render('404');
})