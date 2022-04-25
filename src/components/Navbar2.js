import React from "react";
import Fil_img from "./../img/Vector.png";

const Navbar2 = () => {
    return <div className="nav2">
        <div className="ul">
            <ul className='nav_links'>
                <li><a className='nearest_rides' href='#'>Nearest rides</a></li>
                <li><a className='upcoming_rides' href='#'>Upcoming rides</a></li>
                <li><a className='past_rides' href='#'>Past rides</a></li>
            </ul>
        </div>
        <div className="filter">
            <ul className='nav_links'>
                <li><img src={Fil_img} alt="Filter image" height="12" width="14" /><a className='nearest_rides' href='#'>Filter</a></li>
            </ul>
        </div>
    </div>
}

export default Navbar2;