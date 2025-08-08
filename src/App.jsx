import { useEffect, useRef, useState } from 'react'
import './App.css'
import About from './page/About'
import Header from './page/Header'
import lenis from './utils/smooth'
import Skill from './page/Skill'
import Project from './page/Project'
import { GlobalStyle } from './theme/global'
import { darkTheme, lightTheme } from './theme/theme'
import { ThemeProvider } from 'styled-components'


function App() {
  const sectionRefs = useRef([]);
  const [positions, setPositions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const updatePositions = () => {
    const newPos = sectionRefs.current.map((el)=>el.offsetTop);
    setPositions(newPos);
  };

  const scrollToSection = (index) =>{
    window.scrollTo({
      top: positions[index],
      behavior: 'smooth',
    });
  }

  useEffect(()=>{
    const handleScroll = () =>{
      const scrollY = window.scrollY;
      for (let i = positions.length -1; i>=0; i--){
        if (scrollY >= positions[i]-10){
          setActiveIndex(i);
          break;
        }
      }
    };

    window.addEventListener('scroll',handleScroll);
    console.log(scrollY);
    return ()=> window.removeEventListener('scroll', handleScroll);
  },[positions]);

  useEffect(()=>{
    updatePositions();
    window.addEventListener('resize',updatePositions);
    return () => window.removeEventListener('resize',updatePositions);
  },[]);

  const setRef = (index) => {
    return (el) => {
      sectionRefs.current[index] = el;
    }
  }
  

useEffect(()=>{
  lenis();
},[])


  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <div className="contents-wrap">
        <Header activeIndex={activeIndex} onNavigate={scrollToSection} toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
        <main className="right-contents">
        <div ref={setRef(0)}>
          <About />
        </div>
        <div ref={setRef(1)}>
          <Skill />
        </div>
        <div ref={setRef(2)}>
          <Project />
        </div>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
