import { RiAccountCircleLine , RiAccountCircleFill} from 'react-icons/ri';
import { TiShoppingCart } from 'react-icons/ti'
import {AiOutlineMenu , AiOutlineClose} from 'react-icons/ai'
import { Navigator , LinkStyle, Icon, AdvisorIcon, HiddenMenu} from "../styles/components/HeaderStyle";

import logo from '../assets/logo.png'
import { getLocalStorage } from '../GeralFunctions';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Header({isOutHomePage}){
  const nav = useRef()
  const [transparent, setTransparent] = useState(true)
  const [opened , setOpened] = useState(false)
  const [activeHiddenMenu , setActiveHiddenMenu] = useState(false)
  
  const navigate = useNavigate()
  
  useEffect(() => {    
    const verifyTransparency = () =>{
      if(nav.current){
        if(window.scrollY === 0){
          setTransparent(true)
        }else{
          setTransparent(false)
        }
      }
    }
    document.addEventListener('scroll', verifyTransparency)
    return () => {
      document.removeEventListener('scroll', verifyTransparency)
    } 
  } , [])
  
  const openMenu = () =>{
    setOpened(!opened) 
    setActiveHiddenMenu(!opened)
  }

  return (
    <>  
      <Navigator transparent={transparent} isOutHomePage={isOutHomePage} activeHiddenMenu={activeHiddenMenu} ref={nav}> 
        <HiddenMenu active={activeHiddenMenu}>
          <LinkStyle to='/aboutUs' itemhiddenmenu="true"> About </LinkStyle>
          <LinkStyle to='/contactUs' itemhiddenmenu="true"> Contact </LinkStyle>            
          <LinkStyle to='/cart' itemhiddenmenu="true"> Cart </LinkStyle>            
          <LinkStyle to='/account' itemhiddenmenu="true"> Login </LinkStyle>            
        </HiddenMenu> 
        <div>
          <Icon showMobile type="hamburguer" onClick={() => openMenu()}> {opened ? <AiOutlineClose/> : <AiOutlineMenu/>} </Icon>
          <img src={logo}  alt="Logo" onClick={ () => navigate('/')}/>
          <LinkStyle to='/aboutUs' hidemobile="true"> ABOUT </LinkStyle>
          <LinkStyle to='/contactUs' hidemobile="true"> CONTACT </LinkStyle>
          <LinkStyle to='/cart'> <Icon> <TiShoppingCart/> <AdvisorIcon className='advisor' show={getLocalStorage().length !== 0 ?? false}> </AdvisorIcon></Icon> </LinkStyle>
          <LinkStyle to='/account'> <Icon><RiAccountCircleLine/></Icon> </LinkStyle>
        </div>
      </Navigator>
    </>
  )
}