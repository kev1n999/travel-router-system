import { Router } from "express";

export const router = Router();

// test route
router.get("/", (req, res) => {
  return res.status(200).send("Hello World!");
});
