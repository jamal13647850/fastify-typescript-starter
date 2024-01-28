
require('app-module-path').addPath(__dirname)
if (process.env.NODE_ENV === 'production') {
    require('dotenv').config({ path: '.env.prod' })
  } else {
    require('dotenv').config() // loads .env file by default
  }

const App = require('./app');
new App();




