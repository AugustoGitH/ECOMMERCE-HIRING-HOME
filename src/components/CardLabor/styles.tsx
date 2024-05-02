import styled from "styled-components";


export const CardLabor = styled.div`
    width: 100%;
    padding: 2rem;
    border: 1px solid #00000036;
    border-radius: .6rem;
    .title-labor{
      color: blue;
      text-decoration: underline;
      font-size: 1.1rem;
    }
    span{
      display: block;
    }
    .value-labor,  .description-labor, .created-at-labor{
      color: #000000ca;
    }
    .sub-title-labor{
      margin-top: .5rem;
      font-weight: bold;
      font-size: .9rem;
      text-transform: uppercase;
    }
    .value-labor, .description-labor{
      margin-top: 1.5rem;
    }
    .description-labor{
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .navitaion-buttons{
      margin-top: 1.5rem;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      gap: 1rem;
      button, a{
        padding: .5rem 2rem;
        font-weight: bold;
        border: 2px solid blue;
        border-radius: .2rem;
        color: blue;
        opacity: .7;
        transition: .2s;
        &:hover{
          opacity: 1;
        }
      }
      a{
        background-color: blue;
        color: #fff;
      }
    }
`