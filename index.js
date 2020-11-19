require('dotenv').config()
const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const session = require('express-session')
const passport = require('./config/ppConfig.js')
const flash = require('connect-flash')
const isLoggedIn = require('./middleware/isLoggedIn')
const db = require('./models')

app.use(express.urlencoded({extended: false}))
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use((req, res, next) => {
    // before every route, attach the flash messages and current user to res.locals
    res.locals.alerts = req.flash();
    res.locals.currentUser = req.user;
    next()
})


app.use('/auth', require('./controllers/auth.js'))
app.set('view engine', 'ejs')
app.use(ejsLayouts)

// app.use(express.static(__dirname + '/public'));

app.use(express.static(__dirname + '/public'));
app.listen(process.env.PORT, ()=>{
    console.log('You are listening to port 8000')

})

app.get('/', isLoggedIn,(req,res)=>{
   res.render('home.ejs')
})

app.get('/profile', isLoggedIn, (req, res)=>{
    res.render('profile')
})

app.get('/homework', isLoggedIn, (req, res)=>{
    db.homework.findOrCreate({
        where: {title: req.body.title},
        defaults: {
            description: req.body.description,
        }
    })
    .then(([createdUser, wasCreated])=>{
        console.log(createdUser)
    })
    .catch(err =>{ // !-> FLASH <-!
        req.flash('error', error.message) 
    })
  
    res.render('homework.ejs')
})