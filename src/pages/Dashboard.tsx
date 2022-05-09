

import SideBar from '../components/nav/SideBar';
import SideBar2 from '../components/nav/SideBar2';




export const Dashboard = (props: any) => {

    return (


        <div id="dashboard" style={{minHeight: '100vh'}}>

            { props.auth.token.hasToken() && 
                
                // <SideBar {...props} />
                <SideBar2 {...props} />
                
            }
        </div>
    );
}


export default Dashboard;








