import styled from "styled-components"

export const WrapperContent = styled.div`
  background-color: #ffffff;
  max-width: 1200px;
  width: 95%;
  margin: 8rem auto 8rem;
  padding-inline: 2rem;
  padding-bottom: 2rem;
  border-radius: 10px;
  position: relative;
  h1{
    text-align: center;
    padding-block: 2rem 3rem;
  }

  @media(max-width: ${({theme}) => theme.medias.sm}){
    padding-inline: 1rem;
    h1{
      font-size: 1.8rem;
    }
    h2{
      font-size: 1.2rem
    }
  }
`