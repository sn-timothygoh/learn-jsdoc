/**
 * @module User
 */

const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
let User = require('../model/user.model')

const TOKEN_SECRET = 'uhsduh92hfhwes8hwbdguwrgho213rtrio'

/**
 * Function to register user in order user can login to create a post feed
 * @function createUser
 * @param {string} fname User's first name
 * @param {string} lname User's last name
 * @param {string} username User's login username
 * @param {string} password User's login password
 * @return {Object} Success
 * ```json
 * header: {
 *      auth-header: "json web token"
 * },
 * status: 200,
 * data: [
 * {
 *      "_id":{"$oid":"5e68e6404f907236b0cfdc1f"},
 *      "fname":"Timothy","lname":"Goh",
 *      "username":"tim",
 *      "pwd":"$2a$10$yCPFUMcPscB5jgxzy5r/kOmG3zqGOxOEiKJuYPm3Hp9HM7/QcUkU6",
 *      "createdAt":{"$date":{"$numberLong":"1583932992922"}},
 *      "updatedAt":{"$date":{"$numberLong":"1583932992922"}}
 * }]
 * ```
 */
router.route('/add').post(async (req, res) => {
  const user = new User({
    fname: req.body.fname,
    lname: req.body.lname,
    username: req.body.username,
    pwd: req.body.password,
  })
  try {
    const savedUser = await user.save()
    res.send({
      user: savedUser._id,
    })
  } catch (err) {
    console.log(err)
    res.sendStatus(400)
  }
})

/**
 * to authenticate the user and provide the right for user to create a post
 * @function login
 * @param {string} username User's login username, must be the same as registered
 * @param {string} password User's login password, must be the same as registered
 * @return {Object} Success
 * ```json
 * header: {
 *      auth-header: "json web token"
 * },
 * status: 200,
 * data: "login success"
 * ```
 * @return {Object} Fail
 * ```json
 * status: 400,
 * data: 'Fail to login'
 * ```
 */
router.route('/login').post(async (req, res) => {
  await User.findOne({ username: req.body.username }).then(user => {
    if (!user) {
      res.status(204)
    } else {
      console.log('user ' + user.username + ' is loggin in')
      bcrypt
        .compare(req.body.password, user.pwd)
        .then(match => (match ? res.sendStatus(200) : res.sendStatus(204)))

      const token = jwt.sign({ _id: user._id }, TOKEN_SECRET)
      res.header('auth-header', token)
      res.json({ success: true, message: 'Logged in' })
    }
  })
})
module.exports = router
