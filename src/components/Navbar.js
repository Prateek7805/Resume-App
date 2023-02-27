import { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HamburgerAniIcon from './Hamburger/Hamburger';
import {ReactComponent as NavLogo} from './resume.svg';
import { stCapitalize } from './helperFns';


export default function Navbaar({dimension, data}) {
    
  const [navHeight, setNavHeight] = dimension;
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(()=>{
    const navbar = document.querySelector('.navbar');
    const height = navbar.offsetHeight;
    setNavHeight(height);
  }, []);
  
  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      const resumeBody = document.getElementById("RESUME_BODY");

      var target = document.querySelector(e.target.getAttribute('href'));
      if (e.target.localName === 'svg') {
        target = document.querySelector(e.target.parentNode.getAttribute('href'));
      }
      if (e.target.localName === 'path') {
        target = document.querySelector(e.target.parentNode.parentNode.parentNode.getAttribute('href')); //a>svg>g>path we try to access a tag
      }

      const top = target.getBoundingClientRect().top + resumeBody.scrollTop;

      resumeBody.scrollTo({
        top: top - navHeight,
        behavior: 'smooth'
      });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleScroll);
    });
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleScroll);
      });
    }
  }, [data, navHeight]);

  useEffect(()=>{
    
    const checkCollapseNavbar = (e)=>{

        if(navRef.current && !navRef.current.contains(e.target) && window.innerWidth <992 && isOpen){
            navRef.current.querySelector('.navbar-toggler').click();
        }
        const t = e.target;
        if((t.localName === 'svg' || t.localName === 'path' || t.getAttribute('href') === '#home') && navRef.current.contains(t) && isOpen){
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
                (data && Object.keys(data).length !== 0)? 
                  data.nav.map((item, index)=>{
                      return (
                          <Nav.Link href={`#${item.href}`} key={index}>{stCapitalize(item.title)}</Nav.Link>
                      )
                  })
                : ""
            }
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

