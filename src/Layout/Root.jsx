import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto font-Poppins">
            <Outlet></Outlet>
            <Toaster 
             position="top-center"
             reverseOrder={false}
            />

        </div>
    );
};

export default Root;