
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Filter() {
    const [state, setState] = React.useState('');

    const handleChange_state = (event) => {
        setState(event.target.value);
    };

    const [city, setCity] = React.useState('');

    const handleChange_city = (event) => {
        setCity(event.target.value);
    };

    return <div className='filter'>
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
                <FormHelperText>Select State</FormHelperText>
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
                <FormHelperText>Select City</FormHelperText>
            </FormControl>
        </div>
    </div>

}