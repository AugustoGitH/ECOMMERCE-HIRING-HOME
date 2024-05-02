import styled from "styled-components";


export const Labor = styled.div`
    width: 100%;
    padding: 100px 1rem;
    display: flex;
    justify-content: center;
    .content{
      width: 1000px;
      display: flex;
      gap: 1rem;
      align-items: flex-start;
      justify-content: space-between;
      @media (max-width: 900px) {
          flex-direction: column;
      }
      .navigatio-buttons{
        width: 350px;
        padding: 2rem;
        border: 1px solid #00000049;
        border-radius: .5rem;
        @media (max-width: 900px) {
          width: 100%
      }
        button{
          width: 100%;
          text-align: center;
          padding: .7rem 2rem;
          font-weight: bold;
        border: 2px solid blue;
        border-radius: .2rem;
        background-color: blue;
        color: #fff;
        opacity: .7;
        transition: .2s;
      
        &:hover{
          opacity: 1;
        }
        }
      }
      .infos-labor{
        width: calc(100% - 350px);
        @media (max-width: 900px) {
          width: 100%
      }
        span{
          display: block;
        }
        .sub-title-labor{
          margin-top: 1rem;
        }
        .plus-infos-labor{
          margin-top: 1rem;
          display: flex;
          gap: 2rem;
          align-items: center;
          justify-content: flex-start;
          span{
            display: flex;
            align-items: center;
            gap: .3rem;
          .icon{
            color: blue;
          }
          }
          .person-our-company{
            text-transform: uppercase;
          }
        }
        p.description-labor{
          display: inline-block;
          margin: 2rem 0;
          white-space: break-spaces;
        }
        .training-labor,  .link-labor{
          margin-top: .5rem;
        }
        .link-labor a{
          color: blue;
          text-decoration: underline;
        }
      }
    }

`