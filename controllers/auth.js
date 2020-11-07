const express = require('express')
let db = require('../models')
const passport = require('../config/ppConfig.js')
const router = express.Router()


router.get('/login', (req,res)=>{
     res.render('auth/login')
})


router.post('/signup', (req, res)=>{
    db.user.findOrCreate({
        where: {email: req.body.email},
        defaults: {
            name: req.body.name,
            password: req.body.password
        }
    })
    .then(([createdUser, wasCreated])=>{
        if(wasCreated){
            console.log(`just created the following user:`, createdUser)
            // res.send('POST form data from signup.ejs, then redirect')
            passport.authenticate('local', {
                successRedirect: '/', // !-> FLASH <-!
                successFlash: 'Account created and logged in!'
            })(req, res) // why does this need to be an IIFE???
        } else { // !-> FLASH <-!
            req.flash('error', 'email already exists, try logging in') 
            // console.log('An account associated with that email address already exists! Did you mean to login?')
            res.redirect('/auth/login')
        }
    })
    .catch(err =>{ // !-> FLASH <-!
        req.flash('error', err.message) 
        res.redirect('/auth/signup')
    })
})



router.get('/signup', (req,res)=>{
    res.render('auth/signup')
})

router.get('/logout', (req, res)=>{
    req.logout()
    req.flash('success','You successufully logged out')
    res.redirect('/')
})


router.post('/login', passport.authenticate('local', {
    failureRedirect: '/auth/login',
    successRedirect: '/',
    failureFlash: 'Invalid username and/or password.',
    successFlash: 'You are now logged in.'
}))


module.exports = router













module.exports = router