import mongoose from "mongoose";
import IPokemonDTO from "../dtos/IPokemonsDTO";

const Pokemons = new mongoose.Schema<IPokemonDTO>(
  {
    name: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
    },
    image: {
      type: String,
    },
    generation: {
      type: String,
    },
    atk: {
      type: String,
    },
    def: {
      type: String,
    },
    sta: {
      type: String,
    },
    typeOne: {
      type: String,
    },
    typeTwo: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: { getters: true },
  }
);

Pokemons.virtual("url").get(function (this: IPokemonDTO) {
  const url = process.env.URL || "http://localhost:3333";
  return `${url}/files/${this.image}.svg`;
});

export default mongoose.model<IPokemonDTO>("Pokemons", Pokemons);
