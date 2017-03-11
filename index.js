const express = require('express');
const cors = require('cors');
const session = require('express-session');
const bodyParser = require('body-parser');
const config = require('./config');
const profileCtrl = require('./controllers/profileCtrl');
const userCtrl = require('./controllers/userCtrl');
const app = express();
var port = 8877;
var corsOptions = {
  origin: 'http://localhost:8877'
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(session({ secret: config.sessionSecret }));

app.post('/api/login', userCtrl.login);

app.listen(port, () =>{
  console.log(`listening on port ${port}`);
});
