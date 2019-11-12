const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session'); // 1: npm i express-session

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

const server = express();

// 2: configure the sessions and cookies
const sessionConfiguration = {
  name: 'bugger', //default name is sid
  secret: process.env.COOKIE_SECRET || 'is it secret? is it safe?', //secret is the encryption
  cookie: {
    maxAge: 1000 * 60 * 60, // valid for 1 hour (in milliseconds)
    secure: process.env.NODE_ENV === 'development' ? false : false, // if develpment..false .. anything else.. true
    httpOnly: true, // prevent client javascript code form accessing the cookie
  },
  resave: false, // save sessions even when they have not changed
  saveUninitialized: true //read about it on the docs to respect GDPR
}

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfiguration)); // 3: use the session middleware globally

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  res.json({ api: 'up', session: req.session });
});

module.exports = server;
