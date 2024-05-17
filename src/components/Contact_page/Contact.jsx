import contact from './contact.module.css';
import arrow from '../images/arrow_left.png';
import bcg from '../images/contactbcg.png';
import { useState } from 'react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Game from './Tictactoe.jsx';
import Tictactoe from './Tictactoe.jsx';



const Contact = () => {

    // const [user_name, setName] = useState("");
    // const [contact1, setNum] = useState("");
    // const [user_email, setEmail] = useState("");
    // const [msg, setMsg] = useState("");

    const[formData,setFormData] = useState({fullname:"",email:"",contact:"",message:""});
    // console.log(formData);
    function changeHandler(e){
        setFormData(prevFormData=>{
            return{
                ...prevFormData,
                [e.target.name]:e.target.value
            }
            
        });
    }

    function submitHandler(event){
        // event.prventDefault();
        console.log("printing data");
        console.log(formData);        
    }

    // const form = useRef();

    // const sendEmail = (e) => {
    //   e.preventDefault();
  
    //   emailjs
    //     .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
    //       publicKey: 'YOUR_PUBLIC_KEY',
    //     })
    //     .then(
    //       () => {
    //         console.log('SUCCESS!');
    //       },
    //       (error) => {
    //         console.log('FAILED...', error.text);
    //       },
    //     );
    // };

    
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


        <form className={contact.form} onSubmit={submitHandler}>
            
            <div className={contact.input_field}>
                <p>Name:</p>
                <input  
                onChange={changeHandler} 
                type="text" 
                placeholder='Enter your name'
                name="fullname"
                value = {formData.name}
                 />
            </div>
            <div className={contact.input_field}>

                <p>E-Mail</p>
                <input type="email"
                 placeholder='abc@gmail.com'
                  onChange={changeHandler} 
                   name = "email"
                value = {formData.email}
                />
            </div>

            <div className={contact.input_field}>
                <p>Contact No.</p>
                <input type='tel'
                 placeholder='90******7'
                 onChange={changeHandler}
                 name="contact"
                value = {formData.contact}
                />
            </div>

            <div className={contact.input_field}>
                <p>Message</p>
                <textarea placeholder='enter the message..'
                 onChange={changeHandler} 
                 name="message"
                value = {formData.message}
                 
                 ></textarea>
            </div>
            <div className={contact.input_field}>
                <button>Submit</button>
            </div>
            
        </form>
        <div className={contact.address_container}>

            <div className={contact.game_container}>
            <p>Lets Play Game</p>
            <Tictactoe/>
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