import express from "express";
import cors from "cors";
import enviarEmail from "../controller/email";
import dotenv from "dotenv";

const app = express();

dotenv();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.post('/contact', enviarEmail);

const PORT = 4000;


app.listen(PORT, ()=>{
    console.log(`Conexión exitosa en el puerto ${PORT}`);
})