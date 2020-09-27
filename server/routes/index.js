const express = require("express");
const pool = require("../../database");
const route = express.Router();

route.get("/",(req,res)=>{
    res.send("Hola Devteam")
} );

route.get("/get",(req,res)=>{

    pool.query("select *from empleado",(err,rows)=>{
        if(err){
            console.log("Error al cargar datos"+err);
            res.end
        }else
        res.json(rows);
        console.log("Datos seleccionados")
    })
})

route.get("/get/:id",async(req,res)=>{

    const idempleado = req.params.id
    const query = await "SELECT nombre from empleado where  idempleado=?";
    pool.query(query,[idempleado],(err,rows)=>{
        if(err){
            console.log("Error al cargar la data"+err);
            res.end
        }
        res.json(rows)
    })
})

module.exports=route;