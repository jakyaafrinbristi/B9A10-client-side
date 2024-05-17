import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const Root = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar></Navbar>

            {/* outlet */}
            <Outlet></Outlet>

            {/* footer */}
        
        
        
            
        </div>
    );
};

export default Root;