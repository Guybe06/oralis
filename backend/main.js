const express = require("express");
const app = express();
const cors = require("cors");

const mainRouter = require("./router/router");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/", mainRouter);

const PORT = process.env.PORT || 9001;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'écoute sur le port ${PORT}`);
});