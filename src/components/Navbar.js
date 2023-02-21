import { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HamburgerAniIcon from './Hamburger/Hamburger';
import {ReactComponent as NavLogo} from './resume.svg';

export const stCapitalize = (s) =>{
  let st = "";
  st = s[0].toUpperCase();
  if(s.length <= 1){
      return st;
  }
  for(var i=1; i<s.length; i++){
      st += s[i].toLowerCase();
  }
  return st;
}

export default function Navbaar({dimension, data}) {
    
  const [navHeight, setNavHeight] = dimension;
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(()=>{
    const navbar = document.querySelector('.navbar');
    const height = navbar.offsetHeight;
    setNavHeight(height);
  }, []);
  useEffect(()=>{
    
    const checkCollapseNavbar = (e)=>{
        if(navRef.current && !navRef.current.contains(e.target) && window.innerWidth <992 && isOpen){
            navRef.current.querySelector('.navbar-toggler').click();
        }
    }
    document.addEventListener('mouseup', checkCollapseNavbar);
    return ()=>{
        document.removeEventListener('mouseup', checkCollapseNavbar);
    }
  }, [navRef, isOpen]);

  //functions

  

  return (
    <Navbar onToggle={()=>{setIsOpen(!isOpen)}} ref={navRef} fixed='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid >
        <Navbar.Brand href="#home">
        <NavLogo className='nav-logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" >
            <HamburgerAniIcon clickState={[isOpen, setIsOpen]}/>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {
                data.slice(1).map((item, index)=>{
                    return (
                        <Nav.Link href={`#${item.href}`} key={index}>{stCapitalize(item.title)}</Nav.Link>
                    )
                })
            }
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

