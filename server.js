import express from "express";

/* ---------------------- Instancia de servidor ----------------------*/
const app = express();

/* ---------------------- Middlewares ---------------------- */
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/* ---------------------- Rutas ----------------------*/
app.get('/', (req, res) => {
    res.send('Ruta Base')
})

app.get('*', (req, res) => {
    const {url, method } = req;
    res.send(`Ruta ${method} ${url} no está implementada`);
})

/* ---------------------- Servidor ----------------------*/

const PORT = 3000
const server = app.listen(PORT, () => {
    logger.info(`Servidor express escuchando en el puerto ${PORT}`);
})
server.on('error', error => logger.error(`Error en servidor: ${error}`))
