import React from "react";

const Navbar1 = (props) => {
    return <nav>
        <div className="heading">
            <p className="heading_edvora">Edvora</p>
        </div>
        <div className="nav_right">
            <p className="nav_user">{props.users.name}</p>
            <img src={props.users.url} alt="user_icon" height="44" width="44" />
        </div>
    </nav>
}

export default Navbar1;