const URL = require("../models/urlModel");
const generateSmallUrl = require("../utils/generateSmallUrl");

// generate small url
const makeSmallUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;
    console.log({ originalUrl });

    if (
      originalUrl === "" ||
      originalUrl === null ||
      originalUrl === undefined
    ) {
      return res.status(400).json({ error: "Please provide proper input" });
    }

    let url = await URL.findOne({ originalUrl });

    console.log({ url });

    if (!url) {
      const smallUrl = generateSmallUrl();
      url = new URL({ originalUrl, smallUrl });
      await url.save();
    }

    res.status(200).json({ smallUrl: "small.cyclic.app/" + url.smallUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// get small url
const getOriginalUrl = async (req, res) => {
  const { smallUrl } = req.params;
  console.log({ smallUrl });

  try {
    const url = await URL.findOne({ smallUrl });

    if (!url) {
      return res.status(404).json({ error: "URL not found" });
    }

    res.redirect("https://" + url.originalUrl);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { makeSmallUrl, getOriginalUrl };
