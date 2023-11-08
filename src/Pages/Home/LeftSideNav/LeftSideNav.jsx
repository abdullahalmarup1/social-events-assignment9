import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])




    return (
        <div className="space-y-4 mb-6 ">
            <h2 className="text-2xl font-bold text-center mt-2">All Events</h2>

            {
                categories.map(category =>
                    <Link
                        className="text-xl font-bold block ml-4 bg-slate-200 p-4 rounded-s-2xl "
                        key={category.id}>
                        {category.title}
                    </Link>)

            }

        </div>
    );
};

export default LeftSideNav;