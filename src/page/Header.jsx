import { menuItems } from '../utils/textdata';

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
              {isDarkMode ? '라이트 모드' : '다크 모드'}로 전환
            </button>
          </nav>
    )
  }
  
  export default Header;
  