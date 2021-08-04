import React from "react";
import { Container, Circle, Content, Force, Line, Type } from "./styles";

interface IProps {
  name: string;
  avatar: string;
  attack: string;
  defence: string;
  typeOne?: string;
  typeTwo?: string;
}

const jumbotron: React.FC<IProps> = ({
  name,
  avatar,
  attack,
  defence,
  typeOne,
  typeTwo,
}) => {
  return (
    <Container>
      <Content>
        <h1>{name}</h1>
        <Line>
          {typeOne && <Type>{typeOne}</Type>}
          {typeTwo && <Type>{typeTwo}</Type>}
        </Line>

        <Line>
          <Force color="#AADBD3">ATK {attack}</Force>
          <Force color="#DE9EB1">DEF {defence}</Force>
        </Line>
      </Content>
      <Circle>
        <div>
          <img src={avatar} alt={name} />
        </div>
      </Circle>
    </Container>
  );
};

export default jumbotron;
