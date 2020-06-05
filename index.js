const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
  response.send('Bienvenue sur Express');
});
app.get('/api/movie', (request, response) => {
  response.send('Recuperation de tous les films');
  });
app.get('/api/movie/:id', (request, response) => {
  response.json({id : request.param.id});
  });
app.get("/api/employee?name=?", (request, response) => {
    response.status(404).send(`Impossible de récupérer l'employé ${request.query.name}`);
  });
  app.get("/api/employee/", (request, response) => {
    response.status(304).send(``);
  });


app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});
