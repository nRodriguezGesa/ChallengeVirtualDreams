const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');
const { response } = require('express');
const url = 'https://reclutamiento-14cf7.firebaseio.com/personas.json'

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/',(req,res) =>{
    console.log('POST');

let paramQ = Object.values(req.body).length;
   if (paramQ <= 3 && isJson(req.body.nombre, req.body.apellido, req.body.dni)) {
        request.post(url,
            {
                json: {
                    "nombre": req.body.nombre || "-",
                    "apellido": req.body.apellido,
                    "dni": req.body.dni
                }
            }, err => {
                if (err)
                    //Hubo error al postear
                    res.send('Status Code: 500');
                else
                    //Peticion exitosa 
                    //console.log(req);
                    res.send('Status Code: 201');
            }
        )
    }
    else {
        //Hubo error en los datos enviados por el cliente
        res.send('Status Code: 400');
    }
});


app.listen(3000, () => {
    console.log('Servidor listo, escuchando en puerto 3000...')
})
function isJson (nombre,apellido,dni){
    console.log(nombre);
    console.log(apellido);
    console.log(dni);
    if(dni && apellido){
        let regx = new RegExp("^[A-Za-z]+$");
        if(!regx.test(apellido) || (nombre && !regx.test(nombre))){
            console.log('No es string');
            return false;
        }

        let dniString = dni.toString();
        if(dniString.length > 10){
            console.log('Tiene mas de 10 caracteres');
            return false;
        }
        console.log('JSON correcto')
        return true;
    }
    else{
        console.log('Tiene menos de 2 parametros');
        return false;
    }
        
}
