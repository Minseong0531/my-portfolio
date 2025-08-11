import { menuItems } from '../utils/textdata';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import './Header.css';

function Header({ activeIndex, onNavigate, toggleTheme, isDarkMode }) {
  

    return (
          <nav className="left-contents">
            <div>
              <ul className="gnb">
                {menuItems.map((item, index)=>(
                  <li key={index}>
                    <a
                      href='#'
                      className={activeIndex === index ? 'active' : ''}
                      onClick={(e)=>{
                        e.preventDefault()
                        onNavigate(index);  
                      }}
                      >
                        {item.title}
                      </a>
                  </li>
                ))
                }
              </ul>
            </div>
            <button onClick={toggleTheme}>
              {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </button>
          </nav>
    )
  }
  
  export default Header;
  