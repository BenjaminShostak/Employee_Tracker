const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const inquirer = require('./inquirer')

const app = express();
const PORT = process.env.PORT || 3001;
const app2 = inquirer()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);
app2.use(inquirer);
// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
