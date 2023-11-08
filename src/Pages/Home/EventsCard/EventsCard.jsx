import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const EventsCard = ({ events }) => {
    const { id,
        organizer,
        img_url,
        title,
        time,
        date,
        description,
        venue, } = events


    return (
        <div className="card  bg-base-100 shadow-xl my-5 ">

            <div className=''>

                <figure>

                    <img className='w-full' src={img_url} alt="img" />

                </figure>

                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description} </p>

                    <div className="card-actions justify-between">

                        <Link to={`/events/${id}`}>
                            <button className="btn btn-primary">
                                Join Now
                            </button>
                        </Link>

                        <div className='text-2xl text-opacity-60 font-bold py-2 my-2'>

                            <div>
                                <p >Time : {time} </p>
                                <p > Date : {date} </p>
                            </div>

                            <div>
                                <p> Organizer : {organizer} </p>
                                <p> Venue : {venue} </p>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default EventsCard;
EventsCard.propTypes = {
    events: PropTypes.node,

}