import React from "react";
import nav_img from "./../img/Rectangle.png";

const Navbar1 = () => {
    return <nav>
        <div className="heading">
            <p className="heading_edvora">Edvora</p>
        </div>
        <div className="nav_right">
            <p className="nav_user">Dhruv Singh</p>
            <img src={nav_img} alt="user_icon" height="44" width="44" />
        </div>
    </nav>
}

export default Navbar1;