const fetch = require('node-fetch');

fetch('https://api.prueba.com/data')
  .then(response => {
    if (response.ok) {
      // La solicitud fue exitosa
      return response.json(); // Obtener los datos de la respuesta en formato JSON
    } else {
      // La solicitud no fue exitosa
      throw new Error('Error: ' + response.status);
    }
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });


