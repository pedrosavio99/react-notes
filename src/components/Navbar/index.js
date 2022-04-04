import React from 'react'
import { FaBars } from 'react-icons/fa'
import {Nav, 
        NavLogo,
        NavbarContainer, 
        MobileIcon, 
        NavMenu, 
        NavItem, 
        NavBtn,
        NavBtnLink,
        NavLinks} from './NavbarElements'


const Navbar = ({toggle}) => {
  return (
    <>
    <Nav>
        <NavbarContainer>

            <NavLogo to='/'>
                Manual
            </NavLogo>

            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>

            <NavMenu>
              <NavItem>
                <NavLinks to='about'>Sobre</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to='discover'>Saiba mais</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to='services'>Serviços</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to='signup'>Logar</NavLinks>
              </NavItem>
            </NavMenu>

            <NavBtn>
              <NavBtnLink to="/signin">Sign in</NavBtnLink>
            </NavBtn>

        </NavbarContainer>
    </Nav>   
    </>
  )
}

export default Navbar