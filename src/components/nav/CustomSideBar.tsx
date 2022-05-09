

import '../../assets/css/CustomSideBar.css';

export const CustomSideBar = () => {
    
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    let el = document.getElementById('custom-sidebar');
    if (el == null) return;
    el.style.width = '0';
}

    /* Set the width of the side navigation to 250px */
function openNav() {
    let el = document.getElementById('custom-sidebar');
    if (el == null) return;
    el.style.width = '250px';
}
  


    return (
        <div id="custom-sidebar" className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
        </div>


        // {/* Use any element to open the sidenav */}
        // <span onclick="openNav()">open</span>

        // {/* Add all page content inside this div if you want the side nav to push page content to the right (not used if you only want the sidenav to sit on top of the page */}
        // <div id="main">
        //     ...
        // </div> 
    );

}



export default CustomSideBar;