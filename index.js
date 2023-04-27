const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

//pour récup des json en body (voir si utile ou pas)
app.use(express.json());
app.use(cors());

//route test: le serveur fonctionne!
app.get("/", (req, res) => {
  res.json({ message: "Hi" });
});

//ROUTE getnews-------------
const getnewsRoutes = require("./routes/news");
app.use(getnewsRoutes);
//--------------------------

app.all("*", (req, res) => {
  res.status(404).json({ message: "This routes doesn't exist" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Serveur started 😀");
});

//il va falloir créer des routes en get pour faire des requetes à l'API news (vir mobile ou web?)
