
import {useRef, useState} from 'react';

import '../../assets/css/sidebar.css';
import fe_icon from '../../assets/images/fe_icon.png';


export const Sidebar = (props: any) => {

    const [toggled, setToggled] = useState(false)
    const menuToggleRef = useRef<HTMLDivElement>(null);
    const sidebarRef = useRef<HTMLDivElement>(null);
    
  /* Set the width of the side navigation to 0 */
  function closeNav() {
      
    let el = document.getElementById("main")
    if (el === null) return;
    el.style.marginLeft = "0";

    if (menuToggleRef.current !== null) {
        menuToggleRef.current.style.paddingLeft = '0';
    }

    if (sidebarRef.current !== null) {
        sidebarRef.current.style.width = '0';
    }

}

    /* Set the width of the side navigation to 250px */
function openNav() {
    let el = document.getElementById("main")
    if (el === null) return;
    el.style.marginLeft = "250px";

    if (menuToggleRef.current !== null) 
        menuToggleRef.current.style.paddingLeft = '250px';
    
    if (sidebarRef.current !== null) 
    sidebarRef.current.style.width = '250px';
}


function toggleNav () {

    setToggled(!toggled)

    const onSize = '200px'
    const offSize = '0'
    const size = toggled ? onSize : offSize

    let el = document.getElementById("main")
    if (el === null) return
    el.style.marginLeft = size

    if (menuToggleRef.current !== null) 
        menuToggleRef.current.style.paddingLeft = size
    
    if (sidebarRef.current !== null) 
    sidebarRef.current.style.width = size


}


function logoutCallback(response: any) {
    console.log("Logout Callback")
    props.redirect('/')
}
  


    return (
        <>
            <div id="sidebar" className="sidenav" ref={sidebarRef}>
                {/* <a className="closebtn" onClick={closeNav}>&times;</a> */}
                <a href="/engine">Home</a>
                <a href="/dashboard">Dashboard</a>
                <a href="/user/profile">Profile</a>
                <a href="/user/account">Account</a>
            </div>

            <div id='topbar' ref={menuToggleRef}>
                <div className="navbar-brand mt-2 mt-lg-0" >
                    <i className="fa fa-bars" aria-hidden="true" onClick={toggleNav} />

                    { props.auth.token.hasToken() && 
                        <i className="fas fa-sign-out-alt" onClick={() => {props.auth.logout(null, null)}} />
                        // <i className="fas fa-sign-out-alt" />
                    }

                </div>
            </div>
        </> 
    );


}



export default Sidebar;