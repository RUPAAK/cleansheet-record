import React from "react";
import styled from "styled-components";
import Book from "../components/Book";
import Intro from "../components/Intro";

const BookDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  //   grid-template-rows: 50px 50px;
  grid-gap: 50px;

  @media only screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const MainContainer = styled.div`
  background: #fff;
  padding: 20px;
  min-height: 100vh;
  //   border: 1px solid grey;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;  `;

const data: {
  image: string;
  name: string;
  command?: number;
}[] = [
  {
    image:
      "https://imgs.search.brave.com/KFftn4s9DwMgClcdkOxxLfaBssYsm9dShk6yI_LVgFU/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5j/cDdUU29KNGg2UnJ2/ZlpQTlcyQU5RSGFF/SyZwaWQ9QXBp",
    name: "Javascript",
    command: 80,
  },
  {
    image:
      "https://imgs.search.brave.com/RGYqNBw2TKdapwseMbae4h2SGfExsuA2Vd53OmrdWTU/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC54/dkYtaE1UZFhuZVhC/Ylh2TE41eFN3SGFF/SyZwaWQ9QXBp",
    name: "Github",
    command: 30,
  },
  {
    image:
      "https://imgs.search.brave.com/zOHciT4tdIt-tmyle5w7BBbnYRJXTAXhQr5Doq2BShw/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5q/RE53cThYVVQ3OTRk/Y3UwaFRrTXJ3SGFF/SyZwaWQ9QXBp",
    name: "Kali Linux",
  },
  {
    image:
      "https://imgs.search.brave.com/Tv_5qR9JgvWchEo7XuwhELb_1sHQLWr1w9YhxGyVn0k/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5o/OW9UUnZ2MWtYQTRm/dzhzY0g4LXNnSGFF/SyZwaWQ9QXBp",
    name: "Python",
    command: 8,
  },
];

const Home = () => {
  return (
    <>
      <Intro />
      <MainContainer>
        <BookDiv>
          {data.map((each, index) => (
            <Book key={index} book={each} />
          ))}
        </BookDiv>
      </MainContainer>
    </>
  );
};

export default Home;
