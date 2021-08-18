const express = require("express");
const path = require("path");
const app = express();

const rutaPublic = path.resolve(__dirname, "./public");
app.use(express.static(rutaPublic));

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});

app.get("/", (req, res) => {
  let ruta = path.resolve(__dirname, "./views/home.html");
  res.sendFile(ruta);
});

app.get("/register", (req, res) => {
  let ruta = path.resolve(__dirname, "./views/register.html");
  res.sendFile(ruta);
});

app.get("/login", (req, res) => {
  let ruta = path.resolve(__dirname, "./views/login.html");
  res.sendFile(ruta);
});
