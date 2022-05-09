import { useState } from 'react';
// import { Link } from 'react-router-dom';
import fe_icon from '../../assets/images/fe_icon.png';

export const AppBar = (props:any) => {

  const [appDropDown, setAppDropDown] = useState(false);
  const [userDropDown, setUserDropDown] = useState(false);
  const [notificationsDropDown, setNotificationsDropDown] = useState(false);


  // Toggles the dropdown menu when the width of the browser is shorter than it needs to be.
  function toggleDropDownMenu(value: boolean, setValue: (newValue:boolean) => void) {
    setValue(!value);
  }



    return (
        <div className="appbar">

          <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="container-fluid">

              <button
                id='appbar-toggle'
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="dropdown"
                data-mdb-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={(event) => toggleDropDownMenu(appDropDown, setAppDropDown)}
              >
                <i className="fas fa-bars"></i>
              </button>


              <div 
                id="navbarSupportedContent"
                className="collapse navbar-collapse"
                style = {{display: appDropDown ? 'block' : 'none'}} 
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
                {/* User must navigate to dashboard if the window is to small to show more details */}
                { props.auth.token.hasToken() && !appDropDown &&
              // { true &&

              <div className="d-flex align-items-center">

                {/* <a className="text-reset me-3" href="/">
                  <i className="fas fa-shopping-cart"></i>
                </a>
 */}

                <div className="dropdown">
                  <a
                    className="text-reset me-3 dropdown-toggle hidden-arrow"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                    onClick={(event) => toggleDropDownMenu(notificationsDropDown, setNotificationsDropDown)}
                  >
                    <i className="fas fa-bell"></i>
                    <span className="badge rounded-pill badge-notification bg-danger">1</span>
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuLink"
                    style={{
                      display: notificationsDropDown ? "block" : "none",
                      margin: "1.25rem 0rem 1rem -5.9rem",
                    }}
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




                <div
                 onMouseEnter={(event) => toggleDropDownMenu(userDropDown, setUserDropDown)}
                 >
                <div className="dropdown"
                //  onMouseLeave={(event) => toggleDropDownMenu(userDropDown, setUserDropDown)}
                 >
                  <a
                    className="dropdown-toggle d-flex align-items-center hidden-arrow"
                    id="navbarDropdownMenuAvatar"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                    // onClick={(event) => toggleDropDownMenu(userDropDown, setUserDropDown)}
                    // onMouseOver={(event) => toggleDropDownMenu(userDropDown, setUserDropDown)}
                   
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
                  <div

onMouseLeave={(event:any) => toggleDropDownMenu(userDropDown, setUserDropDown)}
                      >
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="navbarDropdownMenuAvatar"
                      style={{
                        display: userDropDown ?'block': 'none',
                        margin: "1.25rem 0rem 1rem -5.9rem",
                      }}
                    >
                      <li>
                        <a className="dropdown-item" href="/">My profile</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/">Settings</a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="/logout">Logout</a>
                      </li>
                    </ul>
                  </div>
                </div>

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