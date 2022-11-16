require('dotenv').config()
const express = require('express') //Importar el paquete express
const app = express()
const hbs= require('hbs')//solamente para trabajar a nivel de plantillas
const port = process.env.PORT //Definir el puerto

//servidor contenido estático
//Establecer el directorio donde se encuentran los
//archivos html
app.use( express.static('public') );

//motor de plantilla
hbs.registerPartials(__dirname + '/public/views/partials', function (err) {});
app.set('view engine', 'hbs');
app.set('views', __dirname + '/public/views');

app.get('/', (req,res) => {
    //res.send('Hola Mundo')
    res.render('registrarAbono', {
        
    })
})



app.listen(port, () => {
    console.log(`Escuchando por el puerto ${port}`)
})