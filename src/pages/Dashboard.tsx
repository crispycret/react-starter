

// import SideBar from '../components/nav/SideBar';
import '../assets/css/dashboard.css';




export const Dashboard = (props: any) => {

    return (


        <div id="dashboard" style={{minHeight: '100vh'}}>

            { props.auth.token.hasToken() && 
                <>
                
                </>                
            }
        </div>
    );
}


export default Dashboard;








