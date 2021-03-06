const bcrypt = require('bcryptjs')
const cryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')
const { OAuth2Client } = require('google-auth-library')
const fetch = require('node-fetch')
const cfg = require('../services/config')
const User = require('../models/user')
const mailer = require('../services/nodemailer')

const createToken = (...data) => {
  const payload = { ...data }
  return jwt.sign(payload, cfg.getValue('secret'), { expiresIn: '24h' })
}

const client = new OAuth2Client(
  '392424671686-scb4q7rli42r1slmvrv0bp1ufhp3cch4.apps.googleusercontent.com'
)

class AuthController {
  async register(req, res) {
    const { login, password } = req.body

    if (!login.trim() || !login.includes('@')) {
      return res.status(400).send('Enter email!')
    }

    if (!password.trim()) {
      return res.status(400).send('Enter password!')
    }

    const user = await User.findByName(login)

    if (user.rowCount) {
      return res.status(400).send('Account with this login is registered!')
    }

    const hashPswd = bcrypt.hashSync(password, 5)
    await User.saveUser(login, hashPswd, false)

    const codedID = cryptoJS.AES.encrypt(
      login,
      cfg.getValue('secret')
    ).toString()
    const message = {
      to: login,
      subject: 'Congratulations! You are successfully registered!',
      html: `
      <h2>You are successfully registered! </h2>
      <span>Please, confirm this email:</span>
      <a href="${cfg.getValue('checkLink') + codedID}">click</a>
      `,
    }

    mailer(message)
    res.send('You are successfully registered! Please, verify your email!')
  }

  async login(req, res) {
    const { login, password } = req.body
    const userList = await User.findByName(login)

    if (!userList.rowCount) {
      return res
        .status(400)
        .send(`Account with login ${login} is not registered!`)
    }

    const user = userList.rows[0]

    if (!user.isverify) {
      return res.status(400).send('Please, verify your email!')
    }

    const validPswd = bcrypt.compareSync(password, user.password)
    if (!validPswd) {
      return res.status(400).send('Incorrect password!')
    }

    const token = createToken(user.id)
    res.send(`Your token: ${token}`)
  }

  async check(req, res) {
    const bytes = cryptoJS.AES.decrypt(req.params[0], cfg.getValue('secret'))
    const login = bytes.toString(cryptoJS.enc.Utf8)

    const userList = await User.findByName(login)

    if (!userList.rowCount) {
      return res.status(400).send(`Error!`)
    }

    const user = userList.rows[0]

    if (user.isverify) {
      return res.status(400).send('This account is already verified!')
    }

    await User.verify(user.id)
    res.send('You have successfully verified your account!')
  }

  async googlelogin(req, res) {
    const { tokenId } = req.body
    const response = await client.verifyIdToken({
      idToken: tokenId,
      audience:
        '392424671686-scb4q7rli42r1slmvrv0bp1ufhp3cch4.apps.googleusercontent.com',
    })

    const { email_verified, email } = response.payload
    if (email_verified) {
      const user = await User.findByName(email)

      if (user.rowCount) {
        const token = createToken(user.rows[0].id)
        res.send(`Your token: ${token}`)
      } else {
        const hashPswd = bcrypt.hashSync(tokenId, 5)
        await User.saveUser(login, hashPswd, true)

        const newUser = await User.findByName(email)
        const token = createToken(newUser.rows[0].id)
        res.send(`Your token: ${token}`)
      }
    }
  }

  async facebooklogin(req, res) {
    const { accessToken, userID } = req.body

    let urlGraphFB = `https://graph.facebook.com/v2.11/${userID}/?fields=id,email&access_token=${accessToken}`

    const response = await fetch(urlGraphFB, {
      method: 'GET',
    }).then((resp) => resp.json())

    const { email } = response

    const user = await User.findByName(email)

    if (user.rowCount) {
      const token = createToken(user.rows[0].id)
      res.send(`Your token: ${token}`)
    } else {
      const hashPswd = bcrypt.hashSync(tokenId, 5)
      await User.saveUser(login, hashPswd, true)

      const newUser = await User.findByName(email)
      const token = createToken(newUser.rows[0].id)
      res.send(`Your token: ${token}`)
    }
  }
}

module.exports = new AuthController()
