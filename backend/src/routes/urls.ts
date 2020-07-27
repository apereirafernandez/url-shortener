const express = require("express");
const router = express.Router();

import controllers from "../controllers/urls";

// @route POST /shorten
// @desc Create short URL

router.post("/shorten", controllers.shorten);

// @route GET /list
// @desc Get a list of shortened Urls

router.get("/list", controllers.list);

export default router;
