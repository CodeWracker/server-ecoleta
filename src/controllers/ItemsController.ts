import knex from "../database/connection";
import { Request, Response } from "express";

import dotenv from "dotenv";
export default class ItemsController {
  async index(request: Request, response: Response) {
    const api_path =
      process.env.NODE_FUNC === "expo"
        ? process.env.API_URL_EXPO
        : process.env.API_URL;

    const items = await knex("items").select("*");
    const serializedItems = items.map((item) => {
      return {
        title: item.titulo,
        id: item.id,
        image_url: `${api_path}/uploads/${item.image}`,
      };
    });
    return response.json(serializedItems);
  }
}
