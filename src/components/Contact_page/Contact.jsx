import contact from './contact.module.css';
import arrow from '../images/arrow_left.png';
import bcg from '../images/contactbcg.png';
import { useState } from 'react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import Game from '../Contact_page/game.jsx';



const Contact = () => {

    const [user_name, setName] = useState("");
    const [contact1, setNum] = useState("");
    const [user_email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
          publicKey: 'YOUR_PUBLIC_KEY',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    
  return (
    <div className={contact.container} id = "contact_section" >
        <div className={contact.contact_header}>
            <img src={arrow} id={contact.arrow} />
            <h1>
               Contact Me
            </h1>
        </div>
        <div className={contact.form_container}
        style = {{backgroundImage: `url(${bcg})`}}>


        <div className={contact.form}>
            
            <div className={contact.input_field}>
                <p>Name:</p>
                <input value={user_name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter your name'/>
            </div>
            <div className={contact.input_field}>

                <p>E-Mail</p>
                <input value={user_email} type="email" placeholder='abc@gmail.com' onChange={(e)=>setEmail(e.target.value)} />
            </div>

            <div className={contact.input_field}>
                <p>Contact No.</p>
                <input value ={contact1} type='tel' placeholder='90******7'onChange={(e)=> setNum(e.target.value)}/>
            </div>

            <div className={contact.input_field}>
                <p>Message</p>
                <textarea value ={msg} placeholder='enter the message..' onChange={(e)=>setMsg(e.target.value)}></textarea>
            </div>
            <div className={contact.input_field}>
                <button ref ={form} onSubmit={sendEmail}>Submit</button>
            </div>
            
        </div>
        <div className={contact.address_container}>

            <div className={contact.game_container}>
            <p>Lets Play Game</p>
            {/* <Game/> */}

            </div>
            <div className={contact.Address_detail}>
                <h3>Address:-</h3>

                <p>Poornima college Of Engineering,<br />ISI-6,Sitapura,Jaipur,<br />Rajasthan(302022)</p>

            </div>
        </div>

        </div>
    
    </div>
  )
  }

export default Contact;