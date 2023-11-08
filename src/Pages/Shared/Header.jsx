import logo from '../../assets/eventslogo.jpg'
import moment from 'moment';


const Header = () => {
    return (
        <div className='text-center space-y-2 py-3 rounded-t-lg bg-yellow-200'>
            <img className='mx-auto rounded-t-full rounded-bl-full w-36' src={logo} alt="img" />
            <p className='text-3xl text-yellow-700 font-bold'>""Happiness is the state of activity ""</p>
            <p className='text-xl'>
                {moment().format("dddd, MMMM D, YYYY, h:mm a")}
            </p>
        </div>
    );
};

export default Header;