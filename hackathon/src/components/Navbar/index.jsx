import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import image from '../../images/logo.jpeg'
import {IconContext} from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink , NavBtnLink1 } from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <img src={image} alt='mew'></img>
          <NavLogo to='/' onClick={toggleHome}></NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='discover'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >What We Do</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to=''
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              
              ><NavBtnLink1 to='/App'>Request Books</NavBtnLink1></NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to=''
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              ><NavBtnLink1 to='/trade'>Exchange</NavBtnLink1></NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Team</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/trade'>Sign In</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to='/donate'>Donate</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
