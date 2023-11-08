import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../Home/Footer/Footer";
import Header from "../Shared/Header";
import Navbar from "../Shared/Navbar";

const EventDetails = () => {

    const { id, } = useParams();
    const events = useLoaderData();
    const singleEvents = events.find((item => item.id == id))

    const {
        organizer,
        img_url,
        title,
        time,
        date,
        description,
        venue,
        cheif_guest,
        News_and_media } = singleEvents


    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>


            {/* card details starts */}

            <div className="card mx-auto bg-base-100 shadow-xl">

                <div className="card-title items-center font-bold text-xl block  bg-slate-200 p-4 rounded-s-2xl">
                    <h2> {title} </h2>
                    <h2>Date : {date} , {time} </h2>
                </div>

                <figure>
                    <img className="w-full" src={img_url} alt="image" />
                </figure>
                <div className="card-body ">

                    <p>Organized by {organizer} </p>
                    <p> Chief Guest :{cheif_guest} </p>
                    <p>Social Partners :{News_and_media}
                     </p>
                     <p className="font-bold">Venue : {venue} </p>

                    <div className="card-actions justify-end">

                    </div>
                </div>
            </div>







            {/* card details ends */}

            <Footer></Footer>
        </div>
    );
};

export default EventDetails;