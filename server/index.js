const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//Configurando puerto
app.set("port",process.env.PORT || 3000);

app.listen(app.get("port"),()=>{
console.log("corriendo en puerto: "+ app.get("port") );
})

//configurando rutas
app.use(require("./routes"));

const empleado = require("./routes/empleado")
const actividades = require("./routes/actividades")

app.use("/empleado",empleado)
app.use("/actividades",actividades)
