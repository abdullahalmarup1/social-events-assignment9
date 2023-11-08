import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const UpComingEvents = () => {

    return (
        <div className="mt-3 flex">
            <button className="btn btn-warning">Partake</button>
            <Marquee pauseOnHover={true} speed={100}>

                <Link to='/' className="mr-10">Your Social Event Inspiration and Guide Elevate Your Celebrations with Expert Tips and Inspiring Stories </Link>

                <Link to='/' className="mr-10">Your Social Event Inspiration and Guide Elevate Your Celebrations with Expert Tips and Inspiring Stories </Link>

            </Marquee>

        </div>
    );
};

export default UpComingEvents;