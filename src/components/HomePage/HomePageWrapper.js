import styled from "styled-components"

export const HomePageWrapper = styled.div`
  background-color: ${({theme}) => theme.$blockColors.$primary};

  #nav {
    height: 10%;
    margin: 0 auto;
    padding: 1rem 0;
  }

  .content {
    width: fit-content;
    margin: 10rem auto;
    h1 {
      
      font-size: 3rem;
      color: ${({theme}) => theme.$textColors.$primary};
    }
  }
`