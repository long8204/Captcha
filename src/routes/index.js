const login = require('./login');
const register = require('./register');
const payment = require('./payment');
const captcha = require('./captcha')
const admin = require('./admin')
const product = require('./product')

function routes(app) {
  app.use('/login', login);
  app.use('/register', register);
  app.use('/payment', payment);
  app.use('/captcha', captcha);
  app.use('/product', product);
  app.use('/admin', admin);
}

module.exports = routes;