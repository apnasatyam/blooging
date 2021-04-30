const express = require("express")

const app = express();

const path = require("path");

const port = 801;
// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    
    const params = {}
    res.status(200).render('home.pug', params);
})
app.get('/', (req, res)=>{
    
    const params = {}
    res.status(200).render('contact.pug', params);
})
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});