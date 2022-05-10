

import '../../assets/css/CustomSideBar.css';

export const CustomSideBar = () => {
    
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    console.log('CLOSENAV')
    let el = document.getElementById('custom-sidebar');
    if (el == null) return;
    el.style.width = '0';
}

    /* Set the width of the side navigation to 250px */
function openNav() {
    console.log('CLOSENAV')

    let el = document.getElementById('custom-sidebar');
    if (el == null) return;
    el.style.width = '250px';
}
  


    return (
        <>
            <div id="custom-sidebar" className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>


            {/* Use any element to open the sidenav */}
            <span onClick={(event) => openNav()}>open</span>
    {/* 
            <div id="main">
            </div>  
    */}

        </>
    );

}



export default CustomSideBar;