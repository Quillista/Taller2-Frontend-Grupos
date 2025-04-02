/*console.log("Hola clase front")


const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('¡Hola desde Express!');

});

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));*/




const express = require("express");
const sequelize = require("./db");
const taskRoutes = require("./routes/tasks");
const app = express();

app.use(express.json());
app.use("/tasks", taskRoutes);

sequelize.sync().then(() => {
    console.log("Base de datos sincronizada");
    app.listen(3000, () => console.log("Servidor en http://localhost:3000"));
});