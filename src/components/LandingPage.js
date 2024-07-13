
import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../redux/bookingSlice';
import { motion } from 'framer-motion';
import './landingpage.css';

const horses = [
 {
  name : "Astable-1",
 horseDetail : [ 
    { id: 1, name: 'Thunder', image: 'assests/image/Thunder.jpg' },
  { id: 2, name: 'Lightning', image: 'assests/image/Lightning.jpg' },
  { id: 3, name: 'Blaze', image: 'assests/image/Blaze.jpg' },
  { id: 4, name: 'Storm', image: '/assests/image/strome.jpg' }]
},
{
  name : "Astable-2",
 horseDetail : [ 
    { id: 1, name: 'Thunder', image: 'assests/image/Thunder.jpg' },
  { id: 2, name: 'Lightning', image: 'assests/image/Lightning.jpg' },
  { id: 3, name: 'Blaze', image: 'assests/image/Blaze.jpg' },
  { id: 4, name: 'Storm', image: '/assests/image/strome.jpg' }]
},
{
  name : "Astable-3",
  horseDetail :[ 
    { id: 1, name: 'Thunder', image: 'assests/image/Thunder.jpg' },
  { id: 2, name: 'Lightning', image: 'assests/image/Lightning.jpg' },
  { id: 3, name: 'Blaze', image: 'assests/image/Blaze.jpg' },
  { id: 4, name: 'Storm', image: '/assests/image/strome.jpg' }]
},
{
 name : "Astable-4",
 horseDetail :[ 
    { id: 1, name: 'Thunder', image: 'assests/image/Thunder.jpg' },
  { id: 2, name: 'Lightning', image: 'assests/image/Lightning.jpg' },
  { id: 3, name: 'Blaze', image: 'assests/image/Blaze.jpg' },
  { id: 4, name: 'Storm', image: '/assests/image/strome.jpg' }]
},
{
    name: "Astable-5",
  horseDetail :[ 
    { id: 1, name: 'Thunder', image: 'assests/image/Thunder.jpg' },
  { id: 2, name: 'Lightning', image: 'assests/image/Lightning.jpg' },
  { id: 3, name: 'Blaze', image: 'assests/image/Blaze.jpg' },
  { id: 4, name: 'Storm', image: '/assests/image/strome.jpg' }]
}


];

const LandingPage = () => {
  const dispatch = useDispatch();

  const handleBookNow = () => {
    dispatch(setPage('booking'));
  };

  return (
    <div className="landing-page">
      <h1>Horse Ride Booking System</h1>
      <div className="horses">
        { horses.map((stab,index)=>(
          <div className="astable">
           <h1>Avinash {stab.name}</h1>
           <div className="astable2">
            {stab.horseDetail.map(horse => (
              
              <div key={horse.id} className="horse-card">
                <img src={horse.image} alt={horse.name} />
                <h2>{horse.name}</h2>
                <button onClick={handleBookNow}>Book Now</button>
              </div>
             
            ))}
             </div>
            </div>
        ))
        
        }
      </div>
    </div>
  );
};

export default LandingPage;
