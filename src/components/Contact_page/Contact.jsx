import contact from './contact.module.css';
import arrow from '../images/arrow_left.png';
import robot from '../images/robot.png';
import bcg from '../images/contactbcg.png';

const Contact = () => {
  return (
    <div className={contact.container} >
        
        
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
                <input type="text" placeholder='Enter your name'/>
            </div>
            <div className={contact.input_field}>

                <p>E-Mail</p>
                <input type="email" placeholder='abc@gmail.com' />
            </div>

            <div className={contact.input_field}>
                <p>Contact No.</p>
                <input type='number' placeholder='90******7'/>
            </div>

            <div className={contact.input_field}>
                <p>Message</p>
                <textarea placeholder='enter the message..'></textarea>
            </div>
        </div>

        </div>
    



    </div>
  )
}

export default Contact;