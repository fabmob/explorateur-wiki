import React, { useContext } from "react";
import styled from "styled-components";

import { currentMonth } from "utils/months";
import ModalContext from "utils/ModalContext";

import Emoji from "components/base/Emoji";
import Tile from "components/misc/Tile";
import Year from "./result/Year";

const Title = styled.h2`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 2.5em;
  line-height: 1;
`;
const Flex = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;
const Local = styled.div`
  font-size: 1.2em;
  font-weight: 700;
  color: ${(props) => (props.local ? "#39d05c" : "#c81d25")};
  cursor: pointer;
`;
const Score = styled.div`
  font-style: normal;
  cursor: pointer;
`;
const Sup = styled.sup`
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 0;
`;
const ScoreNumber = styled.span`
  font-size: 1.2rem;
  font-weight: 900;
  color: ${(props) => (props.high ? "#c81d25" : "inherit")};
`;
const Text = styled.p`
  position: relative;
  margin: 1em 0 0;
  text-align: center;
`;
export default function Result(props) {
  return (
    <Tile>
      <Title>
        <span>{props.product.item}</span>
        <Emoji>🚲</Emoji>
      </Title>
    </Tile>
  );
}
