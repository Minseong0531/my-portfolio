import { useEffect, useRef, useState } from 'react'
import './App.css'
import About from './page/About'
import Header from './page/Header'
import lenis from './utils/smooth'
import Skill from './page/Skill'
import Project from './page/Project'
import Contact from './page/Contact'
import { GlobalStyle } from './theme/global'
import { darkTheme, lightTheme } from './theme/theme'
import { ThemeProvider } from 'styled-components'


function App() {
  const sectionRefs = useRef([]);
  const [positions, setPositions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth(); // 마운트 시 값 세팅
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  if (windowWidth === 0) {
    // 정확한 뷰포트 사이즈 알기 전까지 렌더링 안함
    return null;
  }
  const isMobile = windowWidth <= 760;

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
      const scrollBottom = scrollY + window.innerHeight;
      const docHeight = document.body.scrollHeight;
      for (let i = positions.length -1; i>=0; i--){
         // 마지막 섹션은 맨 아래에 도달했거나 스크롤 위치가 offsetTop 이상이면 active
         if (i === positions.length - 1) {
          if (scrollBottom >= docHeight - 2 || scrollY >= positions[i] - 10) {
            setActiveIndex(i);
            break;
          }
        } else if (scrollY >= positions[i] - 10) {
          setActiveIndex(i);
          break;
        }
      }
    };

    window.addEventListener('scroll',handleScroll);
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
  
  useEffect(() => {
    console.log("positions", positions);
  }, [positions]);

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
          <Project isMobile={windowWidth <= 760}/>
        </div>
        <div ref={setRef(3)}>
          <Contact />
        </div>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
