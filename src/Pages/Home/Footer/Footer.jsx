import { HiOutlineMailOpen } from "react-icons/hi";
import { Link } from "react-router-dom";
import GoogleLogin from "../../../Authentication/Google Login/GoogleLogin";




const Footer = () => {
    return (
        <footer className="footer p-10 bg-red-900 bg-opacity-30 font-black rounded-e-3xl rounded-s-3xl mt-6">
            <nav>
                <header className="footer-title ">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header className="footer-title ">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title ">Social</header>
                <div className="grid grid-flow-col gap-4">

                    <div className="space-y-3">
                        <h2 className="text-2xl">Log in with</h2>

                        <GoogleLogin></GoogleLogin>


                        <button className="btn btn-outline w-full">

                            <HiOutlineMailOpen className="text-2xl text-red-600">

                            </HiOutlineMailOpen>

                            <Link to='/login'>Log in with email</Link>

                        </button>
                    </div>

                </div>
            </nav>
        </footer>
    );
};

export default Footer;