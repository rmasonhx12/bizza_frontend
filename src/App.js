//import logo from './logo.svg';
//import './App.css';
import React from 'react';
//import SpeakerProfile from './components/SpeakerProfile';


// build function speaker profile with props
function SpeakerProfile(props) {
  return(
    <>
    <h3>{props.name}</h3>
    <p>Position: {props.jobTitle}</p>
    <p>Company: {props.company}</p>
    </>
  );
}


function App(){
  return (
    <>
     <div style={{backgroundColor:'blueviolet', textAlign:'center',
  color:'white'}}>
    <h1> Speaker Profile</h1>
    </div>
    <div style={{backgroundColor:'midnightblue', marginTop:'0',
  color:'white'}}>

  <SpeakerProfile
  name="Robert Hendricks"
  jobTitle='Project Manager, Web Developer'
  company="Bujisoft" />
  </div>
    
    </>
 
  );
  }
  export default App;
