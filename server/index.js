const app = require('./app/config'),
      http = require('http').Server(app);

const PORT = process.env.PORT || 8000;

http.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
