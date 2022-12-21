import { NavLink } from 'react-router-dom';


export default function Navbar() {
          return (
            <>
   <header className="header-area ">
      <div className="container nav-bg contain">
          <div className="d-flex align-items-center justify-content-between">

          <div className="slider-img-box d-flex justify-content-start">
           <img src="./image/react-logo.png" className="img-fluid nav-img" alt="meIng" />
          </div>

            <div className="navbar-brand site-wrapper LinkText"> My-Pro-file </div>
            <nav className="main-nav ms-auto slidenav "> 
             <ul className="nav-flex">
                <li> 
                 <NavLink 
                     to='/'
                     className="LinkText"
                 >
                      Homie
                 </NavLink>
                </li>
               <li>
                 <NavLink 
                     to='mything'
                     className="LinkText"
                 >
                     My Thing
                 </NavLink>
               </li>

                <li>
                <NavLink 
                    to='about'
                    className="LinkText"
                 >
                    About Me
                </NavLink>
                </li>
              <li  className="LinkText">Hello</li>

             </ul>
            </nav>
          </div>
      </div>
  </header>

            
            </>
            
          )
}