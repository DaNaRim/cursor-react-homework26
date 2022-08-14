import styled from "styled-components"

export const NavWrapper = styled.div.attrs(() => ({
  id: "nav"
}))`

  width: fit-content;
  height: fit-content !important;
  
  ul {
    display: flex;
    flex-wrap: nowrap;
    list-style-type: none;

    li {
      margin: 0 0.5rem;

      a {
        font-size: 1.5rem;
        text-decoration: none;
        color: ${({theme}) => theme.$textColors.$primary};

        &.active {
          text-decoration: underline;
        }
      }
    }
  }
`
