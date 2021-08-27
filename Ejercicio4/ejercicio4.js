const rp = require('request-promise');
const url = 'https://reclutamiento-14cf7.firebaseio.com/personas.json';

//Se indica la peticion que se va a realizar, url y el formato
rp({method : 'GET', uri: url , json:true})
//Se imprime por consola si 
.then(response =>{
    console.log(response);
}).catch(error =>{
    console.err(error)
});
