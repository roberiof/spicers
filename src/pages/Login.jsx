import {  useEffect } from 'react'

import Header from  "../components/Header";
import { unavailableFeature } from "../GeralFunctions";

import styled from "styled-components";
import {WrapperContent} from "../styles/components/WrapperContent";

const WrapperLogin = styled(WrapperContent)`
  margin-top: 8rem;
  &:nth-child(3){
    margin-block: 4rem 5rem;
  }
  line-height: 2rem;
  h1{
    color: ${({theme}) => theme.colors.primaryDark};
    font-weight: 800;
    margin-bottom: -1rem;
  }

  p{
    text-align: center;
    color: ${({theme}) => theme.colors.lightText};
  }

  form{
    margin: auto;
    margin-top:1rem;
    width: 100%;
    max-width: 500px;
    gap: 1rem;
    div{
      display: flex;
      flex-direction: column;
    }
    input{
      padding: .8rem .5rem;
    }
    a{
      display: block;
      margin-top: .5rem;
      text-align:center;
      text-decoration: none ;
      color: #000000;
      &:hover{
        text-decoration: underline;
      }
    }
  }

  button{
      margin: auto;
      padding: .8rem 1rem;
      width: 10rem;
      display:block;
      background-color: ${({theme}) => theme.colors.primary};
      color: #ffffff;
      margin-top: 2rem;
    }

  input{
    background-color: ${({theme}) => theme.colors.input};
    display:block;
    border: 0;
    outline: none;
    border-radius: 5px;
    &:focus{
      box-shadow: 0px 0px 3px 0px #000000; 
      transform: scale(1.01)
    }
  }
`

export default function Login(){
  useEffect( () => {
    window.scrollTo(0,0)
  }, [])
  
  return(
    <>
      <Header isOutHomePage={true}/>
      
      <WrapperLogin>
        <h1> Registered Custumers </h1>
        <p> If you have an account, sign in with your email adress</p>
        <form>
          <div>
            <label htmlFor="email"> Email <span style={{color: 'red'}}> * </span> </label>
            <input type="email" id="email" placeholder="Email" required/>
          </div>
          <div>
            <label htmlFor="password"> Password <span style={{color: 'red'}}>*</span></label>
            <input type="password" id="password" placeholder="Password" required/>
          </div>
          <button type="submit" onClick={(e) => unavailableFeature(e)}> LOG IN </button>
          <a href="#"> Forgot Your Password? </a>
        </form>
      </WrapperLogin>

      <WrapperLogin>
        <h1> New Customers </h1>
        <p> Creating an account has many benefits: check out faster, keep more than one address, track orders and more. </p>
        <button onClick={(e) => unavailableFeature(e)}> CREATE AN ACCOUNT </button>
      </WrapperLogin>
    </>
  )
}