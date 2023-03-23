const express = require("express");
const router = express.Router();
const axios = require("axios");

//first route en get pour test requete vers API

router.get("/getnews", async (req, res) => {
  const ApiKey = process.env.YOUR_API_KEY;

  try {
    //poiur le moment la requete fonctionne en dur avec l'ApiKey dans .env, il va falloir mettre en dynamique (search, sort, pages.....)
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=sciences&from=2023-02-22&sortBy=popularity&apiKey=${ApiKey}`
    );
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
