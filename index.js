const express = require("express"); 
const app = express(); 

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.get('/suma', (req, res) => {

    let status = 200;
    let response = "";
    
    if(!req.query.num1 || !req.query.num2){ 
        status = 400;
        response = "Error al recibir los datos";
    }else{


        response = parseInt(req.query.num1) + parseInt(req.query.num2);

    }
    
    res.status(status).json({
        Num1: req.query.num1,
        Num2: req.query.num2,
        Resultado: response
    });
    });

app.get('/resta', (req, res) => {

    let status = 200;
    let response = "";
    
    if(!req.query.num1 || !req.query.num2){ 
        status = 400;
        response = "Error al recibir los datos";
    }else{


        response = parseInt(req.query.num1) - parseInt(req.query.num2);

    }
    res.status(status).json({
        Resultado: response
    });
    });

app.get('/multiplicacion', (req, res) => {

    let status = 200;
    let response = "";
    
    if(!req.query.num1 || !req.query.num2){ 
        status = 400;
        response = "Error al recibir los datos";
    }else{


        response = parseInt(req.query.num1) * parseInt(req.query.num2);

    }
    res.status(status).json({
        Resultado: response
    });
    });    

app.get('/division', (req, res) => {

    let status = 200;
    let response = "";
    
    if(!req.query.num1 || !req.query.num2){ 
        status = 400;
        response = "Error al recibir los datos";
    }else{


        response = parseInt(req.query.num1) / parseInt(req.query.num2);

    }
    res.status(status).json({
        Resultado: response
    });
    });

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});