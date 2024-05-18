import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Root = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar></Navbar>

            {/* outlet */}
            <div className="min-h-[calc(100vh-237px)]">
            <Outlet></Outlet>
            </div>

            {/* footer */}
            <Footer></Footer>
        
        
        
            
        </div>
    );
};

export default Root;