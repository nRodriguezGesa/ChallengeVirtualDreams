# ChallengeVirtualDreams
## Ejercicio 2
1.	¿Qué es un servidor HTTP? 
Es un software que realiza conexiones con clientes desde el lado del servidor, donde el cliente es el Browser. El servidor se encuentra “escuchando” peticiones que provienen de clientes, las procesa y emite una respuesta (bajo el protocolo HTTP) que sera enviada y renderizada por el navegador web.

2.	¿Qué son los verbos HTTP? Mencionar los más conocidos
Son un conjunto de métodos que indican acciones que se realizan sobre un recurso solicitado.
Los verbos HTTP más conocidos son: POST, GET, PUT, PATCH y DELETE (los cuales corresponden con CRUD)

3.	¿Qué es un request y un response en una comunicación HTTP? ¿Qué son los headers?
Request: Petición por parte del cliente para solicitarle al servidor que realice una acción
Response: Es la respuesta por parte del servidor ante una request del cliente
Headers: Información adicional que se incluye en una request o una response. Esta información contiene el contexto de lo que se envía o recibe indicando como se va a hacer.

4.	¿Qué es un queryString? (En el contexto de una url)
Es una parte del URL que se encarga de enviar pequeñas cantidades de información de una parte a otra (o de cliente a servidor). Pueden contener datos tales como queries, referencias a links, información sobre los elementos de una página web, etc.
Es la cadena de texto que se encuentra en la URL después el símbolo “?” y en forma de parámetros

5.	¿Qué es el responseCode? ¿Qué significado tiene los posibles valores devueltos?
Es un numero que indica lo que sucedió con una petición
Posibles valores:
•	1XX: Respuestas informativas. La petición fue recibida y se encuentra en proceso. Ejemplo: 101(continue)
•	2XX: Respuestas correctas. La petición se proceso correctamente. Ejemplo: 200(OK)
•	3XX: Respuestas de redirección (se necesitan realizar más acciones para concluir la petición). Ejemplo: 304(Not modified)
•	4XX: Respuestas de error por parte del cliente (la petición no se pudo procesar debido a un fallo en el cliente). Ejemplo: 404(Not Found)
•	5XX: Respuestas de error por parte del servidor (la petición no se pudo procesar debido a un fallo del servidor). Ejemplo: 502(Bad Gateway)

6.	¿Cómo se envía data en un Get y cómo en un POST? 
En un GET: Los datos se envían en forma de parámetros luego del símbolo“?” en una URL. El formato que se utiliza es nombre = valor, cada uno separado por el símbolo “&”. 
En un POST: El envió de datos se realiza con el mismo formato del GET, pero los parámetros se introducen en la solicitud HTTP para el servidor, de manera que esta oculto para el usuario.


7.	¿Qué verbo http utiliza el navegador cuando accedemos a una página?
Se utiliza el verbo GET ya que en la petición se solicitan los datos necesarios para mostrar determinada página.

8.	Explicar brevemente qué son las estructuras de datos JSON y XML dando ejemplo de estructuras posibles.
JSON (JavaScript Object Notation): Es un formato ligero, sencillo de leer, interpretar y redactar que permite el almacenamiento e intercambio de datos.
Ejemplo:
{
	"nombre": "Jonathan",
	"apellido": "Joestar",
	"aka": "Johnny"
}

XML (Extensible Markup Language): Es un formato de texto que se utiliza para almacenar e intercambiar datos, al igual que JSON. La diferencia con este último es que el xml tiene un formato mas estricto y que lleva más tiempo de procesamiento.
Ejemplo:
<nombre>Jonathan</nombre>
<apellido>Joestar</apellido>
<aka>Johnny</aka>

9.	Explicar brevemente el estándar SOAP
Es un protocolo establece como 2 objetos en proceso diferentes se comunican mediante el intercambio de datos, utilizando mensajes SOAP. Estos mensajes son documentos XML que tienen la siguiente estructura:
•	Envelope: Raíz de la estructura, identifica al mensaje como tal (por lo tanto, es obligatoria)
•	Header: Permite enviar información sobre como se debe procesar el mensaje
•	Body: Contiene información acerca de la llamada y la respuesta. Es obligatorio
•	Fault: Contiene información sobre errores producidos durante el procesamiento y envió del mensaje

10.	Explicar brevemente el estándar REST Full
Es una arquitectura web para conectar diversos sistemas basados en el protocolo HTTP. REST se compone de una lista de reglas que se deben cumplir en el diseño de la arquitectura de una API.
La ventaja que tiene REST por sobre SOAP, es que los servicios y aplicaciones que podemos crear pueden ser usadas por cualquier dispositivo que entienda HTTP. 
Además, se basa en la siguiente serie de diseños fundamentales:
•	Protocolo cliente/servidor sin estado: Cada mensaje HTTP contiene toda la información necesaria, por lo cual ni el cliente o el servidor necesitan recordar el estado de las comunicaciones
•	Un conjunto de operaciones bien definidas: Utiliza los verbos de HTTP
•	Una sintaxis universal: Cada recurso es direccionable únicamente a través de su URI
•	El uso de hipermedios: La representación de los datos de la aplicación es en formato XML o HTML. Lo que permite navegar de un recurso a otro siguiendo solamente enlaces


11.	¿Qué son los headers en un request? ¿Para qué se utiliza el key Content-type en un header?
Los headers en una request contienen información en formato de parámetros que envía el cliente al realizar una petición. El key Content-Type en un header es una propiedad que se utiliza para indicar el tipo de contenido o formato del dato que se esta enviando. Ejemplo: Content-Type: image/jpg

## Ejercicio 3 
Se encuentra en el path: /Ejercicio3/

## Ejercicio 4
Se encuentra en el path: /Ejercicio4/. Para correr el codigo js, primero se tiene que instalar por consola la dependencia con : 
	npm i request-promise
Por ultimo, ejercicio4.js se ejecuta con el comando: npm start en consola

## Ejercicio 5
Se encuentra en el path /Ejercicio5/. Se tienen que instalar las siguientes dependencias:
	npm request
	npm express
	npm body-parser
Por ultimo, con el comando npm start se ejecuta el script. Cuando se hace esto, el server se quedara a la "escucha" de requests hasta que se finalize la ejecucion de; script con la combinacion de teclas Ctrl + C

##Ejercicio 6
Se encuentra en el path /Ejercicio6/. 
Al abrir el archivo .html, este lleva a un navegador con un formulario simple donde se debe completar con los campos de nombre, apellido y dni.
Luego, cuando se presiona el boton "send", se enviara la informacion al servidor que se creo en el ejercicio anterior (debe estar prendido), se comprobara la estructura JSON y se enviara el POST a la URL pertinente.
