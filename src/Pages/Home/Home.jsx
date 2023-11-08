import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header";
import Navbar from "../Shared/Navbar";
import Footer from "./Footer/Footer";
import LeftSideNav from "./LeftSideNav/LeftSideNav";
import UpComingEvents from "./UpComingEvents/UpComingEvents";
import EventsCard from "./EventsCard/EventsCard";
import Banner from "./Banner/Banner";


const Home = () => {
    const events = useLoaderData();
    console.log(events)

    return (
        <div>
            <Header></Header>
            <UpComingEvents></UpComingEvents>
            <Navbar></Navbar>
            <Banner></Banner>
           


            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 ">
                <div className="border rounded-s-3xl"> <LeftSideNav></LeftSideNav> </div>
                <div className="col-span-3 border rounded-e-3xl">

                    {
                        events.map(event =>
                            <EventsCard
                                key={event.id}
                                events={event}>
                            </EventsCard>)

                    }

                </div>
            </div>

            <Footer></Footer>

        </div>


    );
};

export default Home;