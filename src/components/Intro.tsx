import React from "react";
import styled from "styled-components";
import { Button } from "./Global/style/Button";
import Text from "./Global/style/Text";

const MainIntro = styled.div`
  margin: 10px 0;
`;

const Intro = () => {
  return (
    <MainIntro>
      <Text align="center" size="1.2rem">
        Hey Rupak,
      </Text>
      <Text margin="5px 0" align="center">
        Here are some list of your saving. There are 4 cleansheets that you have
        saved. Total of 150 commands are there. Start adding more..
      </Text>
      <Text align="center">
        <Button>Add Book</Button>
      </Text>
    </MainIntro>
  );
};

export default Intro;
