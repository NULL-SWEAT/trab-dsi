const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      consign = require('consign')
      cors = require('cors');

app.use(express.static('./static/'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

consign({ cwd: 'server' })
      .include('app/api')
      .then('app/routes')
      .into(app);

module.exports = app;
