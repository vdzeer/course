const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cfg = require('../services/config');
const User = require('../models/user');
const mailer = require('../services/nodemailer');


const createToken = id => {
  const payload = {id};
  return jwt.sign(payload, cfg.getValue('secret'), {expiresIn: '24h'});
}

class AuthController {
  async register(req, res) {
    const {login, password} = req.body;

    if (!login.trim() || !login.includes('@')) {
      return res.status(400).send('Enter email!');
    }

    if(!password.trim()) {
      return res.status(400).send('Enter password!');
    }

    const user = await User.findByName(login);

    if (user.rowCount) {
      return res.status(400).send('Account with this login is registered!');
    }

    const hashPswd = bcrypt.hashSync(password, 5);
    await User.saveUser(login, hashPswd);


    const message = {
      to: login,
      subject: 'Congratulations! You are successfully registered!',
      html: `
      <h2>You are successfully registered! </h2>
      <span>Please, confirm this email:</span>
      <a href="http://localhost:3000/auth/check/${login}">click</a>
      `
    }

    mailer(message);
    res.send('You are successfully registered! Please, verify your email!');
  }

  async login(req, res) {
    const {login, password} = req.body;
    const userList = await User.findByName(login);

    if (!userList.rowCount) {
      return res.status(400).send(`Account with login ${login} is not registered!`);
    }

    const user = userList.rows[0];

    if (!user.isverify) {
      return res.status(400).send('Please, verify your email!');
    }

    const validPswd = bcrypt.compareSync(password, user.password);
    if (!validPswd) {
      return res.status(400).send('Incorrect password!');
    }

    const token = createToken(user.id);
    res.send(`Your token: ${token}`);
  }

  async check(req, res) {
    const login = req.params.email;
    const userList = await User.findByName(login);

    if (!userList.rowCount) {
      return res.status(400).send(`Error!`);
    }

    const user = userList.rows[0];

    if (user.isverify) {
      return res.status(400).send(`This account is verified!`);
    }

    await User.verify(user.id);
    res.send('You have successfully verified your account!');
  }
}

module.exports = new AuthController();