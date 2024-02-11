import React, { useState } from 'react'
import styles from './Contact.module.css';
import Button from '../Button/Button';
import { MdMessage } from 'react-icons/md';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";


const ContactForm = () => {
  const [name, setName] = useState("Utsav");
  const [email,setEmail] = useState("hello@leraning.com");
  const [text,setText] = useState("Learning");
  


  const onSubmit =(event)=>{
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
    console.log({name,email,text});
    
  }



  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_button}>

            <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px"/>}
            />
            <Button
            
            text="VIA CALL"
            icon={<FaPhoneAlt  fontSize="24px"/>}
            />

          </div>
            <Button isOutline={true} 
            text="VIA EMAIL FORM" icon={<IoMail  fontSize="24px"/>}/>
            <form onSubmit={onSubmit}>

              <div className={styles.form_control}>
                <label htmlFor=''>Name</label>
                <input type='text' name="name"></input>
              </div>


              <div className={styles.form_control}>
                <label htmlFor='email'>Email</label>
                <input type='email' name="email"></input>
              </div>

              <div className={styles.form_control}>
                <label htmlFor='text'>Text</label>
                <textarea  name="text" rows="12"></textarea>
              </div>
              <div style={{
                display:'flex',
                justifyContent: "end"
              }}>

                <Button
              text="SUBMIT"
              
              />
              </div>
              <div>
                {name + " " + email + " "+ text}
              </div>

            </form>

        </div>
        <div className={styles.contact_image}>
          <img src='/images/contact.svg' alt='contact image'></img>
        </div>
    </section>
  )
}

export default ContactForm
