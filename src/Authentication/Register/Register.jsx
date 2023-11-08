import { Link } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Register = () => {

    const
        { createUser,
            registerError,
            setRegisterError,
            registrationSuccess,
            setRegistrationSuccess, showPassword, setShowPassword } = useContext(AuthContext)


    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        const accepted = e.target.terms.checked
        console.log(name, email, password, accepted)


        // password length validation

        if (password.length < 6) {
            setRegisterError(toast.error('Password should be at least 6 characters'));
            return;
        }
        else if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/.test(password)) {
            setRegisterError(toast.error('Password should be have at least 3 special characters'))
            return;
        }

        // terms and condition validation

        else if (!accepted) {
            setRegisterError(toast.error('Please Accept Our Terms and Conditions'))
            return
        }


        // reset error
        setRegisterError('')
        setRegistrationSuccess('')

        /* create user */
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                setRegistrationSuccess(toast.success('Successfully Registered '))
            })
            .catch(error => {
                console.error(error);

                // validation
                setRegisterError(error.message)
            })

    }

    return (
        <div>

            <Navbar></Navbar>

            <div className="mx-auto text-center">

                <h2 className="text-3xl font-bold  my-6">
                    Please Register
                </h2>

                <form
                    onSubmit={handleRegister}
                    className="lg:w-1/2 md:w-3/4  mx-auto ">

                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" placeholder="name"
                            name="name"
                            className="input input-bordered" required />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email"
                            name="email"
                            className="input input-bordered" required />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>

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
                            <br />

                            <div>

                                <input type="checkbox" name="terms" id="terms" />
                                <label className="ml-4" htmlFor="">Accept Our Terms and Conditions</label>
                            </div>

                        </div>

                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>

                        </label>

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>

                <p className="text-center mt-5">
                    Already have an account ?
                    <Link className="text-blue-700 font-bold" to='/login'>  Login</Link>
                </p>

                {
                    registerError &&
                    <p className="text-3xl text-red-700 ">  {registerError} </p>
                }

                {
                    registrationSuccess &&
                    <p> {registrationSuccess} </p>
                }
            </div>
        </div>
    );
};

export default Register;