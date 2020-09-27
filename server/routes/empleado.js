const express = require("express");
const pool = require("../../database");
const route = express.Router();

route.get("/",(req,res)=>{
    res.send("Hola empleado")
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

route.post("/post",(req,res)=>{
    console.log("Nombre: "+req.body.Nombre)
    console.log("Puesto:"+ req.body.Puesto)
    console.log("Edad"+req.body.Edad)
    const Nombre = req.body.Nombre
    const Puesto = req.body.Puesto
    const Edad = req.body.Edad

    const query = "insert into empleado (Nombre,Puesto,Edad)values(?,?,?)";
    pool.query(query,[Nombre,Puesto,Edad],(err,rows)=>{
        if(err){
            console.log("Error al guardar la data"+err);
            res.end
        }else
        res.json("ok")
    })
})

route.put("/update/:id",(req,res)=>{
    console.log("Nombre: "+req.body.Nombre)
    console.log("Puesto:"+ req.body.Puesto)
    console.log("Edad"+req.body.Edad)
    const Nombre = req.body.Nombre
    const Puesto = req.body.Puesto
    const Edad = req.body.Edad
    const idempleado = req.params.id

    const query = "update empleado set Nombre=?,Puesto=?,Edad=? where idempleado=? ";
    pool.query(query,[Nombre,Puesto,Edad,idempleado],(err,rows)=>{
        if(err){
            console.log("Error al guardar la data"+err);
            res.end
        }else
        res.json("ok")
    })
})

route.delete("/delete/:id",(req,res)=>{

    const idempleado = req.params.id

    const query = "delete from empleado  where idempleado=? ";
    pool.query(query,[idempleado],(err,rows)=>{
        if(err){
            console.log("Error al guardar la data"+err);
            res.end
        }else
        res.json("ok")
    })
})

module.exports=route;