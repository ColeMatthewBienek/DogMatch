import express, { Request, Response } from "express";
const app = express();
const router = express.Router();
import dogData from "../controllers/dogFetchers.js";

router.get("/animals/:animalType/:searchBreed", dogData.showAnimals);
router.get("/animal/:id", dogData.getAnimalById);
router.get("/animals", dogData.getAnimals);
router.get("/types", dogData.getTypes);

export default router;
