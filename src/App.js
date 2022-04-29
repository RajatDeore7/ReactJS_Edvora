import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar1 from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Rides from './components/Ride_details';

function App() {
  const [rides, setRides] = useState([]);
  const [users, setUsers] = useState({});

  async function getRides() {
    const res = await axios({
      method: 'GET',
      url: 'https://assessment.api.vweb.app/rides'
    })

    setRides(res.data);
  }

  async function getUsers() {
    const res = await axios({
      method: 'GET',
      url: 'https://assessment.api.vweb.app/user'
    })

    setUsers(res.data)
  }

  useEffect(() => {
    getRides();
    getUsers();
  }, [])

  const showNearestRides = () => {
    console.log(users);
    const userStationCode = users.station_code;

    const nearestRides = rides.filter((ride) => {
      const stationPath = ride.station_path;

      if (stationPath.includes(userStationCode)) {
        console.log(ride.id, true);
        return ride;
      }
    })

    setRides(nearestRides);
  }

  const showPastRides = () => {
    const currentDate = new Date()
    const currentDateYear = currentDate.getFullYear();
    const currentDateMonth = currentDate.getMonth() + 1;
    const currentDateDay = currentDate.getDate();

    const cDate = new Date(`${currentDateYear}-${currentDateMonth}-${currentDateDay}`).getTime();

    const pastRides = rides.filter((ride) => {
      const rideDate = new Date(ride.date);
      const rideDateYear = rideDate.getFullYear();
      const rideDateMonth = rideDate.getMonth() + 1;
      const rideDateDay = rideDate.getDate();

      const rDate = new Date(`${rideDateYear}-${rideDateMonth}-${rideDateDay}`).getTime();

      // if (rDate < cDate) {
      //   console.log(rDate, cDate, ride.id, true);
      // }

      return rDate < cDate ? ride : 'No rides found';
    })

    setRides(pastRides);
  }

  const showUpcomingRides = () => {
    const currentDate = new Date()
    const currentDateYear = currentDate.getFullYear();
    const currentDateMonth = currentDate.getMonth() + 1;
    const currentDateDay = currentDate.getDate();

    const cDate = new Date(`${currentDateYear}-${currentDateMonth}-${currentDateDay}`).getTime();

    const upcomingRides = rides.filter((ride) => {
      const rideDate = new Date(ride.date);
      const rideDateYear = rideDate.getFullYear();
      const rideDateMonth = rideDate.getMonth() + 1;
      const rideDateDay = rideDate.getDate();

      const rDate = new Date(`${rideDateYear}-${rideDateMonth}-${rideDateDay}`).getTime();

      // if (rDate > cDate) {
      //   console.log(rDate, cDate, ride.id, true);
      // }

      return rDate > cDate ? ride : 'No rides found';
    })

    setRides(upcomingRides);
  }

  return (
    <div className="App">
      <Navbar1 users={users} />
      <Navbar2 nearest={showNearestRides} past={showPastRides} upcoming={showUpcomingRides} />
      <Rides rides={rides} />
    </div>
  );
}

export default App;
