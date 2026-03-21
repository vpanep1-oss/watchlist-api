const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  
  const { netflix_token, disney_token } = req.query;
  
  const watchlists = [];
  
  // Mock data for now (real scraping in Step 4)
  watchlists.push({
    id: 1,
    title: "The Bear",
    service: "Hulu",
    season: "S02E01",
    poster: "https://image.tmdb.org/t/p/w500/abc123.jpg",
    deepLink: "rokudeep linking://hulu.com/watch/12345"
  });
  
  watchlists.push({
    id: 2,
    title: "Loki",
    service: "Disney+",
    season: "S02E01", 
    poster: "https://image.tmdb.org/t/p/w500/def456.jpg",
    deepLink: "rokudeep linking://disneyplus.com/watch/67890"
  });
  
  res.json(watchlists);
};
