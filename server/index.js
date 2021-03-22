const express = require('express');

const app = express();

app.use(express.static(__dirname + '/../dist'));

const PORT = 3000;

app.use('*', (req,res) =>{
  res.sendFile(path.join(__dirname + '/../dist/index.html'));
});

app.listen(PORT, () => console.log('listening on port', PORT));
