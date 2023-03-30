const express = require("express");
const router = express.Router();
const axios = require("axios");

//first route en get pour test requete vers API
//route requete pour récupérer les news par pays

router.get("/getnews", async (req, res) => {
  const ApiKey = process.env.YOUR_API_KEY;

  try {
    //poiur le moment la requete fonctionne en dur avec l'ApiKey dans .env, il va falloir mettre en dynamique (search, sort, pages.....)
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=fr&pageSize=31&apiKey=${ApiKey}`
    );
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

//business--------------------------------------------------------------------------

router.get("/getnewsbusiness", async (req, res) => {
  const ApiKey = process.env.YOUR_API_KEY;

  try {
    //poiur le moment la requete fonctionne en dur avec l'ApiKey dans .env, il va falloir mettre en dynamique (search, sort, pages.....)
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=fr&category=business&pageSize=51&apiKey=${ApiKey}`
    );
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

//sports--------------------------------------------------------------------------

router.get("/getnewssport", async (req, res) => {
  const ApiKey = process.env.YOUR_API_KEY;

  try {
    //poiur le moment la requete fonctionne en dur avec l'ApiKey dans .env, il va falloir mettre en dynamique (search, sort, pages.....)
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=fr&category=sports&pageSize=51&apiKey=${ApiKey}`
    );
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

//sciences--------------------------------------------------------------------------

router.get("/getnewsscience", async (req, res) => {
  const ApiKey = process.env.YOUR_API_KEY;

  try {
    //poiur le moment la requete fonctionne en dur avec l'ApiKey dans .env, il va falloir mettre en dynamique (search, sort, pages.....)
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=fr&category=science&pageSize=51&apiKey=${ApiKey}`
    );
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

//divertissement--------------------------------------------------------------------------

router.get("/getnewsentertainment", async (req, res) => {
  const ApiKey = process.env.YOUR_API_KEY;

  try {
    //poiur le moment la requete fonctionne en dur avec l'ApiKey dans .env, il va falloir mettre en dynamique (search, sort, pages.....)
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=fr&category=entertainment&pageSize=51&apiKey=${ApiKey}`
    );
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

//santé--------------------------------------------------------------------------

router.get("/getnewshealth", async (req, res) => {
  const ApiKey = process.env.YOUR_API_KEY;

  try {
    //poiur le moment la requete fonctionne en dur avec l'ApiKey dans .env, il va falloir mettre en dynamique (search, sort, pages.....)
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=fr&category=health&pageSize=51&apiKey=${ApiKey}`
    );
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

//tech--------------------------------------------------------------------------

router.get("/getnewstech", async (req, res) => {
  const ApiKey = process.env.YOUR_API_KEY;

  try {
    //poiur le moment la requete fonctionne en dur avec l'ApiKey dans .env, il va falloir mettre en dynamique (search, sort, pages.....)
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=fr&category=technology&pageSize=51&apiKey=${ApiKey}`
    );
    console.log(response.data);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// router.get("/getnews", async (req, res) => {
//   const ApiKey = process.env.YOUR_API_KEY;

//   try {
//     //poiur le moment la requete fonctionne en dur avec l'ApiKey dans .env, il va falloir mettre en dynamique (search, sort, pages.....)
//     const response = await axios.get(
//       `https://newsapi.org/v2/everything?q=sciences&from=2023-02-22&sortBy=popularity&apiKey=${ApiKey}`
//     );
//     console.log(response.data);
//     res.status(200).json(response.data);
//   } catch (error) {
//     res.status(400).json(error.message);
//   }
// });

module.exports = router;
