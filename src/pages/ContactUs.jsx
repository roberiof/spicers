import {useEffect} from "react"

import Header from "../components/Header";
import { unavailableFeature } from "../GeralFunctions";

import styled from "styled-components";
import {WrapperContent} from "../styles/components/WrapperContent";

const WrapperContactUs = styled(WrapperContent)`
  margin-block: 8rem 4rem;
  line-height: 2rem;
  h1{
    color: ${({theme}) => theme.colors.primaryDark};
    font-weight: 800;
  }

  h2{
    color: ${({theme}) => theme.colors.primary};
    font-style: italic;
    margin-bottom: 1rem ;
    &:nth-child(8){
      // send us a message text
      margin-top: 3rem;
    }
  }

  p{
    color: ${({theme}) => theme.colors.lightText};
  }

  .text-block{
    margin-top: 1.5rem;
  }

  .strong-text{
    margin-top: 2rem;
    font-weight: bold;
    color: #000000;
  }

  .strong-email{
    font-weight: bold;
    color: ${({theme}) => theme.colors.primaryDark};
  }

  form{
    margin-top:1rem;
    width: 95%;
    max-width: 688px;
  
    .name-email-phone-div{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1rem;
      div{
        display: flex;
        flex-direction: column;
      }
      input{
        padding: .8rem .5rem;
      }
        
      @media (max-width: 700px){
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
      }
    }
  
    .message-div{
      margin-top: 1rem;
      display: flex !important;
      flex-direction: column;
      textarea{
        padding:.8rem .5rem;
        height: 5rem;
      }
    }
        
    button{
      padding: .8rem 1rem;
      background-color: ${({theme}) => theme.colors.primary};
      color: #ffffff;
      margin-top: 1rem;
    }
  }

  textarea, input{
    background-color: ${({theme}) => theme.colors.input};
    border: 0;
    outline: none;
    border-radius: 5px;
    &:focus{
      box-shadow: 0px 0px 3px 0px #000000; 
      transform: scale(1.01)
    }
  }
`

export default function ContactUs(){  
  useEffect( () => {
    window.scrollTo(0,0)
  }, [])

  return(
    <>
      <Header isOutHomePage={true}/>
      <WrapperContactUs>
        <h1> Contact Us</h1>
        <h2> Got some questions or you just need help? </h2>

        <div className="text-block">
          <p> Need help with an existing order you've placed?
          Contact us at <a href='#' className="strong-email">info@spicers.com</a></p>
        </div>

        <div className="text-block">
          <p> Questions on shipping costs or best shipping to choose for both domestic orders Contact us at <a href='#' className="strong-email">info@spicers.com</a> for details.</p>
        </div>

        <div className="text-block">
          <p> For general product questions, product suggestions, ordering questions, marketing, or other information, please write us at <a href='#' className="strong-email"> questions@spicers.com </a> </p>
        </div>

        <div className="text-block">
          <p>Are you a vendor interested in submitting a product for our store to carry? Email <a href='#' className="strong-email"> questions@spicers.com</a> for details.</p>
        </div>
        
        <div className="text-block">
          <p> Want to give us a call?  Please try us at either of the numbers below</p>
          <p className="strong-text"> Toll-free: 833-407-0747 </p>
        </div>

        <h2> Send us a message </h2>
        <p> Leave a message and we'll get back to you shortly.</p>
        <form>
          <div className="name-email-phone-div"> 
            <div>
              <label htmlFor="name"> Your Name <span style={{color: 'red'}}>*</span></label>
              <input type='text' id="name" placeholder="Your Name" required/>
            </div>

            <div>
              <label htmlFor="email"> Email <span style={{color: 'red'}}>*</span></label>
              <input type='email' placeholder="Email" id="email" required/>
            </div>

            <div>
              <label htmlFor="phone"> Phone <span style={{color: 'red'}}>*</span></label>
              <input type='tel' pattern="[0-9]{3}.[0-9]{3}.[0-9]{4}" placeholder="Phone (xxx.xxx.xxxx)" id="phone" required/>
            </div>
          </div>

          <div className="message-div">
            <label htmlFor="message"> Message <span style={{color: 'red'}}>*</span></label>
            <textarea placeholder="Message" id="message" required></textarea>
          </div>
        <button type="submit" onClick={(e) => unavailableFeature(e)}> Submit </button>
        </form>
      </WrapperContactUs>
    </>
  )
}