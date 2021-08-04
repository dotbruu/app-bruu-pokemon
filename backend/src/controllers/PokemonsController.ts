import { Request, Response } from "express";
import fs from "fs";
import excelToJson from "convert-excel-to-json";
import Pokemon from "../models/PokemonModel";
import IPokemonDTO from "../dtos/IPokemonsDTO";

class PokemonController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { limit, skip } = request.query;

    const pokemons = await Pokemon.find()
      .limit(Number(limit))
      .skip(Number(skip));

    const pokemonsAll = await Pokemon.find();
    return response.json({ data: pokemons, total: pokemonsAll.length });
  }

  public async search(request: Request, response: Response): Promise<Response> {
    const { limit, skip, term } = request.query;

    const termsToSearch = [
      String(term),
      String(term).toLocaleLowerCase(),
      String(term).charAt(0).toUpperCase() + String(term).slice(1),
    ];
    const pokemons = await Pokemon.find({
      name: { $in: termsToSearch },
    })
      .limit(Number(limit))
      .skip(Number(skip));

    const pokemonsAll = await Pokemon.find();
    return response.json({ data: pokemons, total: pokemonsAll.length });
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const fileExcel = request.file;

    if (!fileExcel) {
      throw new Error("Is required file xslx to parser data!");
    }
    const fileExcelParsedtoJson = excelToJson({
      source: fs.readFileSync(fileExcel.path),
    });
    const arrayExcelParsedToJson = Object.entries(
      fileExcelParsedtoJson
    )[0][1].slice(1);

    const registerData = await Promise.all(
      arrayExcelParsedToJson.map(async (item): Promise<IPokemonDTO> => {
        const pokemon = await Pokemon.create({
          name: item.B,
          number: item.C,
          image: item.D,
          generation: item.E,
          atk: item.O,
          def: item.P,
          sta: item.Q,
          typeOne: item.J,
          typeTwo: item.K,
        });
        return pokemon;
      })
    );

    fs.unlink(fileExcel.path, () => {});

    return response.json(registerData);
  }
}

export default PokemonController;
