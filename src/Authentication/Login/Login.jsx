import { Link, useLocation, useNavigate, } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import toast from "react-hot-toast";


const Login = () => {

    const { signIn,
        showPassword,
        setShowPassword, loginError,
        setLoginError,
        loginSuccess, setLoginSuccess } = useContext(AuthContext)

    const location = useLocation()
    console.log('location in the log in page ', location)
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(form.get('email'));


        // password length validation

        if (password.length < 6) {
            setLoginError(toast.error('Password should be at least 6 characters'));
            return;
        }

        else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/.test(password)) {
            setLoginError(toast.error('Password should be have at least 3 special characters'))
            return;
        }


        // reset error
        setLoginError('')
        setLoginSuccess('')

        /* Login or sign in */

        signIn(email, password)
            .then(result => {
                console.log(result.user)
                setLoginSuccess(toast.success('Logged in   Successfully'))
            })

        /* navigate to home page after login */

        navigate(location?.state ? location.state : '/')

            .catch(error => {
                console.error(error)
                // validation
                setLoginError(error.message)

            })
    }



    return (
        <div>
            <Navbar></Navbar>

            <div className="mx-auto text-center">

                <h2 className="text-3xl font-bold  my-6">
                    Please Login
                </h2>

                <form
                    onSubmit={handleLogin}
                    className="lg:w-1/2 md:w-3/4 bg-transparent mx-auto">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email"
                            name="email"
                            className="input input-bordered" required />
                    </div>

                    <br />


                    <div
                        className="form-control relative ">
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="password"
                            name="password"
                            className="input input-bordered" required />

                        <span
                            className="absolute top-4 left-full -mx-8"


                            onClick={() => setShowPassword(!showPassword)}>

                            {
                                showPassword ? <FaEyeSlash></FaEyeSlash>
                                    :
                                    <FaEye></FaEye>
                            }

                        </span>
                    </div>


                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>

                <p className="text-center mt-5">
                    Do not have an account ?
                    <Link className="text-blue-700 font-bold" to='/register'>  Register</Link>
                </p>
            </div>



        </div>
    );
};

export default Login;