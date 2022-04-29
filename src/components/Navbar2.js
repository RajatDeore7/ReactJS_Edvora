import React, { useState } from "react";
import Fil_img from "./../img/Vector.png";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const showFilter = () => {
    const filterBox = document.querySelector(".filter_box")
    filterBox.classList.toggle("hidden")
}

const Navbar2 = (props) => {
    const [state, setState] = useState('');
    const [city, setCity] = useState('');

    const handleChange_state = (event) => {
        setState(event.target.value);
    };


    const handleChange_city = (event) => {
        setCity(event.target.value);
    };

    return <div className="nav2">
        <div className="ul">
            <ul className='nav_links'>
                <li><button className='nearest_rides' onClick={props.nearest}>Nearest rides</button></li>
                <li><button className='upcoming_rides' onClick={props.upcoming}>Upcoming rides</button></li>
                <li><button className='past_rides' onClick={props.past}>Past rides</button></li>
            </ul>
        </div>
        <div className="filter">
            <button onClick={showFilter}><img src={Fil_img} alt="Filter" height="12" width="14" /><a className='nearest_rides' href='/'>Filter</a></button>
        </div>

        <div className='filter_box hidden'>
            <h3>Filters</h3>
            <div className='filter_state'>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">State</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={state}
                        label="State"
                        onChange={handleChange_state}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Maharashtra</MenuItem>
                        <MenuItem value={20}>Uttarakhand</MenuItem>
                        <MenuItem value={30}>Goa</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className='filter_city'>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">City</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={city}
                        label="City"
                        onChange={handleChange_city}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Pune</MenuItem>
                        <MenuItem value={20}>Pimpri-Chimchawad</MenuItem>
                        <MenuItem value={30}>Ravet</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>

    </div>
}

export default Navbar2;