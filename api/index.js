const { VercelRequestEvent, VercelResponse } = require('@vercel/node');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  const watchlists = [
    {
      id: 1,
      title: "The Bear (Hulu)",
      service: "Hulu",
      poster: "https://image.tmdb.org/t/p/w500/vDGr1YgtsG.jpg",
      deepLink: "rokudeep linking://hulu.com/watch/8d7b8e4a-1234-1234-1234-123456789abc"
    },
    {
      id: 2,
      title: "Loki (Disney+)",
      service: "Disney+",
      poster: "https://image.tmdb.org/t/p/w500/kf4Xqe9Kq9VxpP98tR1XnfPM3.jpg",
      deepLink: "rokudeepLinking://disneyplus.com/watch/5e3b0a8b-1234-1234-1234-123456789abc"
    },
    {
      id: 3,
      title: "The Office (Netflix)",
      service: "Netflix",
      poster: "https://image.tmdb.org/t/p/w500/8aWfpLhWXhP2qsNbbfzqRR9p5l9.jpg",
      deepLink: "rokudeepLinking://netflix.com/watch/70136121"
    }
  ];
  
  res.json(watchlists);
};
