import React from 'react';
import './secondbody.css';
import Box_with_h_and_p from '../../Assets/box_with_h_and_p/Box_with_h_and_p';

export const Secondbody = () => {
  return (
    <div className='divone'>
      <div className='left-section'>
        <h1>The ScholarSpace <br/>Experience</h1>
        <p>ScholarSpace, a product of Cryptics India, is a comprehensive web and mobile application tailored for efficient study space management.</p>
        <p>From student details to subscription plans, seat management to real-time analytics, ScholarSpace covers it all.</p>
        <div className='left-section-bottombox'>
          <div className='left-section-bottombox-left'>
            <h1>1000</h1>
            <p>Worldwide Users</p>
          </div>
          <div className='left-section-bottombox-right'>
            <h1>5+</h1>
            <p>Study Centers Digitized</p>
          </div>
        </div>
      </div>

      <div className='right-section'>
        <Box_with_h_and_p 
          heading="Digital Administration" 
          para={`Study Centers can\neffortlessly keep track of\nstudent details with their\nsubscriptions and seat\ndetails.`}
        />
        <Box_with_h_and_p 
          heading={"Effortless study center\nSeat Management"} 
          para={`Study Centers can\neffortlessly keep track of\nstudent details with their\nsubscriptions and seat\ndetails.`}
        />
        <Box_with_h_and_p 
          heading={"Real time Notifications\nvia WhatsApp"} 
          para={`Study Centers can\neffortlessly keep track of\nstudent details with their\nsubscriptions and seat\ndetails.`}
        />
        <Box_with_h_and_p 
          heading={"Analytics Dashboard &\n data Tracking"} 
          para={`Study Centers can\neffortlessly keep track of\nstudent details with their\nsubscriptions and seat\ndetails.`}
        />
      </div>
    </div>
  );
};

export default Secondbody;
