import React from "react"
import Figure from "./Figure"
import styled from "styled-components"

const StyledCard = styled.div`
  color: white;
  background-color: black;
  border: 1px solid white;
  border-radius: 21px;
  padding: 2rem;

  h2 {
    color: ${pr => pr.$color};
    font-style: bold;
    font-size: 2.0rem;
    margin: 0 0 1rem 0;
  }

  p {
    margin: 0 0 0.6rem 0;

    &::first-line {
      font-size: 1.5rem;
    }
  }
`
export default function Card({ title, text, image, author, date, media_type }) {
  console.log("m type: ", media_type)
  return (
    <StyledCard $color="white" className='card'>
      <h2>{title}</h2>
      <p>{text}</p>
      <Figure image={image} author={author} date={date} media_type={media_type}/>
    </StyledCard>
  );
}