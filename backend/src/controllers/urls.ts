const validUrl = require("valid-url");
const { customAlphabet } = require("nanoid");
import config from "../config/config";
const Url = require("../models/Url");

//@route POST /shorten

const shorten = async (req: any, res: any) => {
  const { longUrl } = req.body;
  const baseUrl = config.baseUrl;

  // Check base url

  if (!validUrl.isUri(baseUrl)) {
    return res.status(400).json("Invalid base url");
  }

  // Create url code

  const nanoid = customAlphabet("0123456789abcdefghijklmnopqrstuvwxyz", 8);
  const urlCode = nanoid();
  // Check long url
  if (validUrl.isWebUri(longUrl)) {
    try {
      let url = await Url.findOne({ longUrl });

      if (url) {
        res.json(url);
      } else {
        const shortUrl = baseUrl + "/" + urlCode;

        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date(),
        });

        await url.save();

        res.json(url);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json("Server error");
    }
  } else {
    res.status(401).json("Invalid long Url");
  }
};

// @route GET /list

const list = async (req: any, res: any) => {
  const shortUrl = {
    name: req.body.shortUrl,
  };

  try {
    const urls = await Url.find({});

    return res.status(200).json(urls);
  } catch (err) {
    console.error(err);
    res.status(500).json("Server error");
  }
};

export default {
  shorten,
  list,
};
