import styled from "styled-components";


export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85px;
  border-bottom: 1px solid #0000001c;
  position: sticky;
  top: 0;
  left: 0;
  padding: 1rem 0;
  z-index: 10;
  background-color: #fff;
  padding: 0 1rem;
  .content{
    width: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    .title span{
      color: blue;
    }
    .input-search{
      width: 60%;
      height: 45px;
      display: flex;
      align-items: center;
      gap: .5rem;
      position: relative;
      
      /* border: 2px solid #000; */
     
      
      .icon-search{
        font-size: 1.5rem;
        color: #000000ba;
        position: absolute;
        left: .5rem
      }
     
      input{
        font-size: .9rem;
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
        padding: 0 1rem 0 2.5rem;
        outline: 2px solid #0000009d;
        border-radius: .2rem;
         &:focus {
        outline: 2px solid blue;
      }
      }
    }
    .profile{
      flex: none;
      width: 35px;
      height: 35px;
      background-color: #0000009d;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      cursor: pointer;
      transition: .2s;
      &:hover{
        background-color: #000;
      }
      .icon-profile{
        color: #fff;
      }
    }
  }

`