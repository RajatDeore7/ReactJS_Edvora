import React from "react";

const Rides = (props) => {
    return (
        <>
            {props.rides.map((ride, index) => {
                const date = new Date(ride.date);
                const day = date.getDate();
                const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                const month = date.getMonth();
                const year = date.getFullYear();
                const minutes = date.getMinutes() + 1;
                const seconds = date.getSeconds() + 1;

                const stationCode = ride.origin_station_code;
                const stationPath = ride.station_path;
                const distances = stationPath.map(code => {
                    return code > stationCode ? code - stationCode : -1;
                })
                const distance = distances.sort();

                return (
                    <div className="ride" key={index}>
                        <div className="ride_map">
                            <img src={ride.map_url} alt="MAP" />
                        </div>
                        <div className="ride_details">
                            <div className="ride_info">
                                <p>Ride Id : {ride.id}</p>
                                <p>Origin Station : {ride.origin_station_code}</p>
                                <p>station_path : [
                                    {
                                        ride.station_path.map((path) => {
                                            return `${path}, `
                                        })
                                    }
                                    ]</p>
                                <p>Date : {day}th {months[month]} {year} {minutes}:{seconds}</p>
                                <p>Distance : {distance[0]}</p>
                            </div>
                        </div>
                        <div className="ride_select">
                            <div className="ride_city">
                                <p>{ride.city}</p>
                            </div>
                            <div className="ride_state">
                                <p>{ride.state}</p>
                            </div>
                        </div>
                    </div>)
            })}
        </>
    )
}

export default Rides;