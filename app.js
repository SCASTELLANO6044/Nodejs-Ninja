const express = require('express');

//express app
const app = express();

//register view engine
app.set('view engine','ejs');

//listen for request
app.listen(3000);

app.get('/',(req,res)=>{
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index', {title: 'Anastasiia', blogs});
    //res.sendFile('./views/index.html',{root: __dirname});
    //res.send('<h1>This is home page</h1>');
});

app.get('/about',(req,res)=>{
    res.render('about',{title: 'about'});
    //res.sendFile('./views/about.html',{root: __dirname});
    //res.send('<h1>This is home page</h1>');
});

app.get('/blogs/create',(req, res)=>{
    res.render('create',{title: 'create new blog'})
})

/*
//redirects
app.get('/about-us',(req,res)=>{
    res.redirect('/about');
})
*/
//404
app.use((req,res)=>{
    res.status(404).render('404',{title: 'page not found'});
})