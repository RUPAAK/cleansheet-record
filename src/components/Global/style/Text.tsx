import styled from "styled-components";

interface TextProps {
  color?: string;
  size?: string;
  align?: "center" | "left" | "right" | "justify";
  margin?: string;
}

const Text = styled.p<TextProps>`
  font-size: ${(p) => (p.size ? p.size : "1rem")};
  color: ${(p) => (p.color ? p.color : "black")};
  text-align: ${(p) => (p.align ? p.align : "left")};
  margin: ${(p) => (p.margin ? p.margin : "0px")};
`;

export default Text;
