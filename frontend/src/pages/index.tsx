import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "reactstrap";
import { Logo, Search } from "./styles";
import axios from "axios";

import Logotype from "../assets/logo.svg";
import SearchIcon from "../assets/search.svg";

import CardJumboTron from "../components/cards/jumbotron";

interface IPokemons {
  name: string;
  number: number;
  url: string;
  atk: string;
  def: string;
  typeOne: string;
  typeTwo: string;
}

function Home() {
  const [pokemons, setPokemons] = useState<IPokemons[]>([] as IPokemons[]);
  const limit = 4;
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [term, setTerm] = useState("");
  const [active, setActive] = useState(true);

  const getPokemons = useCallback(async () => {
    const pokemonsReceived = await axios.get(
      `http://localhost:3333?limit=${limit}&skip=${skip}`
    );
    setPokemons((prev) => [...prev, ...pokemonsReceived.data.data]);
    setTotal(pokemonsReceived.data.total);
  }, [pokemons, skip, total]);

  const submitSearch = useCallback(async () => {
    const pokemonsReceived = await axios.get(
      `http://localhost:3333/search?limit=${limit}&skip=${0}&term=${term}`
    );
    setPokemons([...pokemonsReceived.data.data]);
    setTotal(pokemonsReceived.data.total);
  }, [pokemons, skip, total, term]);

  useEffect(() => {
    getPokemons();
  }, []);

  useEffect(() => {
    const interSectionObserver = new IntersectionObserver((entries) => {
      if (active === true && entries.some((entry) => entry.isIntersecting)) {
        setSkip((prev) => prev + 8);
        getPokemons();
      }
    });

    const spinnerGrow = document.querySelector("#spinner-grow");
    if (spinnerGrow) {
      interSectionObserver.observe(spinnerGrow);
    }
    return () => interSectionObserver.disconnect();
  }, [skip, active]);

  return (
    <Container>
      <Row>
        <Col>
          <Logo>
            <img src={Logotype} alt="Pokemon" />
          </Logo>
          <Search>
            <input
              type="text"
              placeholder="Search..."
              value={term}
              onChange={(data) => setTerm(data.target.value)}
            />
            <button
              onClick={() => {
                setActive(active === true ? false : true);
                submitSearch();
              }}
            >
              <img src={SearchIcon} alt="Search" />
            </button>
          </Search>
        </Col>
      </Row>
      <Row>
        <Col className=".col-sm-8 .col-md-4 .offset-md-4">
          {pokemons.map((pokemon) => (
            <CardJumboTron
              name={pokemon.name}
              avatar={pokemon.url}
              attack={pokemon.atk}
              defence={pokemon.def}
              typeOne={pokemon.typeOne}
              typeTwo={pokemon.typeTwo}
            />
          ))}
        </Col>
      </Row>
      <Row>
        <Col className="auto">
          <div className="spinner-grow text-dark center" id="spinner-grow" />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
