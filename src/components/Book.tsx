import React, { FC } from "react";
import styled from "styled-components";
import Text from "./Global/style/Text";
import { Link } from "react-router-dom";

const MainBook = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0.4rem;
  border: 1px solid grey;
  height: auto;
  border-radius: 10px;
  background: #fff;
  transition: 0.3s;
  cursor: pointer;
  &: hover {
    transform: scale(1.08);
  }
  //   @media;
`;

const BookDiv = styled.div`
  position: relative;
  border-radius: 10px;
  background: red;
  overflow: hidden;
`;

const BookIcon = styled.img`
  height: 100%;
  max-width: 100%;
`;

const ContentDiv = styled.div`
  padding: 0.5rem 0;
`;

interface BookProps {
  book: {
    image: string;
    name: string;
    command?: number;
  };
}

const Book: FC<BookProps> = ({ book }) => {
  return (
    <MainBook>
      <BookDiv>
        <BookIcon src={book.image} />
        <Text
          size="1.5rem"
          color="#fff"
          style={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
          }}
        >
          {book.name}
        </Text>
      </BookDiv>
      <ContentDiv>
        <Text size="1.2rem" color="red">
          05/8/2022
        </Text>
        <Text size="0.9rem" color="grey" margin="5px 0">
          Github cleansheet for my future reference. Future me thank me.
        </Text>
        <Text style={{ float: "right" }}>
          <Link to="/">{book.command ? book.command : 15} commands ...</Link>
        </Text>
      </ContentDiv>
    </MainBook>
  );
};

export default Book;
