export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json([
    {
      id: 1,
      title: "The Bear (Hulu)",
      service: "Hulu",
      poster: "https://image.tmdb.org/t/p/w500/vDGr1YgtsG.jpg",
      deepLink: "rokudeepLinking://hulu.com/watch/123"
    },
    {
      id: 2,
      title: "Loki (Disney+)",
      service: "Disney+",
      poster: "https://image.tmdb.org/t/p/w500/kf4Xqe9Kq9VxpP98tR1XnfPM3.jpg",
      deepLink: "rokudeepLinking://disneyplus.com/watch/456"
    },
    {
      id: 3,
      title: "The Office (Netflix)",
      service: "Netflix",
      poster: "https://image.tmdb.org/t/p/w500/8aWfpLhWXhP2qsNbbfzqRR9p5l9.jpg",
      deepLink: "rokudeepLinking://netflix.com/watch/70136121"
    }
  ]);
}
