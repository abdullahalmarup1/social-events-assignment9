import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Providers/AuthProvider";

const GoogleLogin = () => {


    // eslint-disable-next-line no-unused-vars
    const { user, googleLogin } = useContext(AuthContext)


    const handleGoogleLogin = (media) => {
        media()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }



    return (
        <div>
            <button
                onClick={() => handleGoogleLogin(googleLogin)}
                className="btn btn-outline w-full">
                <FcGoogle className="text-2xl"></FcGoogle>
                Continue with google
            </button>
        </div>
    );
};

export default GoogleLogin;