const generateSmallUrl = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let shortUrl = "";
  for (let i = 0; i < 6; i++) {
    shortUrl += characters[Math.floor(Math.random() * characters.length)];
  }
  return shortUrl;
};

module.exports = generateSmallUrl;
