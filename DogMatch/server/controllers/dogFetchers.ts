import config from "../../config.js";
import { Request, Response } from "express";
import axios, { AxiosResponse } from "axios";
import { Client } from "@petfinder/petfinder-js";
import { Animal } from "@petfinder/petfinder-js/dist/api/animal.js";

const client = new Client({
  apiKey: config.API_KEY,
  secret: config.SECRET_KEY,
});

interface AnimalType {
  name: string;
  url: string;
  id: number;
}

const dogData = {
  showAnimals: async (req: Request, res: Response): Promise<void> => {
    const { animalType, searchBreed } = req.params;
    let page = 1;
    try {
      const apiResult = await client.animal.search({
        type: animalType,
        breed: searchBreed,
        page,
        limit: 100,
      });
      res.status(200).json(apiResult.data);
    } catch (err) {
      console.log(err);
      res.status(400).send();
    }
  },
  getAnimals: async (req: Request, res: Response): Promise<void> => {
    let page = 1;
    try {
      const apiResult = await client.animal.search({
        page,
        limit: 100,
      });
      res.status(200).json(apiResult.data);
    } catch (err) {
      console.log(err);
      res.status(400).send();
    }
  },
  getAnimalById: async (req: Request, res: Response): Promise<void> => {
    const searchId = req.params.id;
    const numId = Number(searchId);

    let page = 1;
    try {
      const apiResult = await client.animal.show(numId);
      res.status(200).json(apiResult.data);
    } catch (err) {
      console.log(err);
      res.status(400).send();
    }
  },
  getTypes: async (req: Request, res: Response): Promise<void> => {
    let page = 1;
    try {
      const apiResult = await client.animalData.types();
      res.status(200).json(apiResult.data);
    } catch (err) {
      console.log(err);
      res.status(400).send();
    }
  },
};

export default dogData;
