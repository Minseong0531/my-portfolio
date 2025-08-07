import { menuItems } from '../utils/textdata';
import './Header.css';

function Header({ activeIndex, onNavigate }) {
  

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
          </nav>
    )
  }
  
  export default Header;
  