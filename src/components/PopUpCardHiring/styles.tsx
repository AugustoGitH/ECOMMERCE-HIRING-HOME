import styled from "styled-components";
import scaleUpPresence from "../../keyframes/scale-up-presence";

export const PopUpCardHiring = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  min-height: 100vh;
  background-color: #00000034;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .card{
    overflow: auto;
    width: 800px;
    max-height: 800px;
    background-color: #fff;
    border-radius: .5rem;
    border: 1px solid #0000002f;
    animation: ${scaleUpPresence} .2s ease;
    padding: 2rem;
    h2{
      text-align: center;
      text-transform: uppercase;
      span{
        color: blue;
      }
    }
    .order-analysis{
      width: 100%;
      margin-top: 2rem;
      label{
        display: block;
      }
      textarea{
        padding: 1rem;
        margin-top: .3rem;
        resize: vertical;
        width: 100%;
        min-height: 200px;
      }
      button{
        padding: 1rem 2rem;
        background-color: blue;
        color: #fff;
        font-weight: bold;
        border-radius: .4rem;
        opacity: .8;
        transition: .2s;
        margin-top: 1rem;
        text-transform: uppercase;
        font-size: .8rem;
        &:hover{
          opacity: 1;
        }
        &:disabled{
          pointer-events: none;
          opacity: .3;
        }
      }
      
    }
    .service-status{
      padding: 2rem 0;
      text-align: center;
      border-top: 1px solid #0000001f;
      margin-top: 2rem;
      h3.status{
        span{
          color: blue;
        }
  
        
        font-size: 1.5rem;
        
      }
      button{
        padding: 1rem 2rem;
        background-color: blue;
        color: #fff;
        font-weight: bold;
        border-radius: .4rem;
        opacity: .8;
        transition: .2s;
        margin-top: 1rem;
        text-transform: uppercase;
        font-size: .8rem;
        &:hover{
          opacity: 1;
        }
  
      }
      .paypal-container{
        margin-top: 1rem;
      }
    }
  }
`