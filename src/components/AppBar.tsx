import { useState } from 'react';
// import { Link } from 'react-router-dom';
import fe_icon from '../assets/images/fe_icon.png';

export const AppBar = (props:any) => {

  const [activeDropDown, setActiveDropDown] = useState(false);

  function toggleMenu() {
    // var menuToggle = document.getElementById('appbar');
    if (activeDropDown) {
      setActiveDropDown(false);
    } else {
      setActiveDropDown(true);
    }
  }


    return (
        <div className="appbar">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="container-fluid">

              <button
                id='appbar-toggle'
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={toggleMenu}
              >
                <i className="fas fa-bars"></i>
              </button>


              <div 
                id="navbarSupportedContent"
                className="collapse navbar-collapse"
                style = {{display: activeDropDown ? 'block' : 'none'}} 
              >

                <a className="navbar-brand mt-2 mt-lg-0" href="/">
                  <img
                    // src={"https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"}
                    src={fe_icon}
                    height="30"
                    alt="MDB Logo"
                    loading="lazy"
                  />
                </a>

                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="/dashboard">Dashboard</a>
                    </li>
                  
                    <li className="nav-item">
                        <a className="nav-link" href="/engine">Engine</a>
                    </li>
                </ul>

              </div>


                {/* Login Condition */} 
                { props.auth.token.hasToken() &&
              // { true &&

              <div className="d-flex align-items-center">

                <a className="text-reset me-3" href="/">
                  <i className="fas fa-shopping-cart"></i>
                </a>


                <div className="dropdown">
                  <a
                    className="text-reset me-3 dropdown-toggle hidden-arrow"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fas fa-bell"></i>
                    <span className="badge rounded-pill badge-notification bg-danger">1</span>
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="/">Some news</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">Another news</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">Something else here</a>
                    </li>
                  </ul>
                </div>

                <div className="dropdown">
                  <a
                    className="dropdown-toggle d-flex align-items-center hidden-arrow"
                    href="/"
                    id="navbarDropdownMenuAvatar"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {/* <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                      className="rounded-circle"
                      height="25"
                      alt="Black and White Portrait of a Man"
                      loading="lazy"
                    /> */}
                  <i className="fas fa-user"></i>
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuAvatar"
                  >
                    <li>
                      <a className="dropdown-item" href="/">My profile</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">Settings</a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">Logout</a>
                    </li>
                  </ul>
                </div>

              </div>
              
              } 
              {/*  END Login Condition */}

            </div>


          </nav>

        </div>
    )


}


export default AppBar;