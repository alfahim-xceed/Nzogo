import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
    return (
        <div className="w-full">

            <div className="wrapper-container flex flex-wrap justify-between">
                <div className="w-[10%] ">
                    <Sidebar />
                </div>

                <div className="w-[90%] p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
