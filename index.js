const express = require('express');
const app = express();
const port = 3000;

app.get('/', (res) => {
  res.send('Servidor Node com Docker funcionando!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
