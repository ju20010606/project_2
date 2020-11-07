const passport = require('passport')
const db = require('../models')
const LocalStrategy = require('passport-local')


passport.serializeUser((user, doneCallback)=>{
    console.log('serializing user...')
    doneCallback(null, user.id)
})

passport.deserializeUser((id, doneCallback)=>{
    db.user.findByPk(id)
    .then(foundUser=>{
        console.log('deserealizing user...')
        doneCallback(null, foundUser)
    })
    .catch(err=>{
        console.log('error deserializing user', err)
    })
})

const findAndLogInUser = (email, password, doneCallback) =>{
    db.user.findOne({where:{email: email}})
    .then (foundUser =>{
        if(!foundUser || !foundUser.validPassword(password)){
            return doneCallback(null, false)
        }else{
            return doneCallback(null, foundUser)
        }
    })
    .catch(err => doneCallback(err))
}

const fieldsToCheck = {
    usernameField: 'email',
    passwordField: 'password'
}

const strategy = new LocalStrategy(fieldsToCheck, findAndLogInUser)

passport.use(strategy)




module.exports = passport