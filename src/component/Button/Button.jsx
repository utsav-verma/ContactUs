import React from 'react'
import { MdOutlineMessage } from "react-icons/md"
import styles from './Button.module.css'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Button = (props) => {

  const {isOutline,text,icon,...rest} =props;

  return (
    <button {...rest} className={isOutline ?styles.outline_btn : styles.primary_btn}>
     
      {icon}
      {text}
    </button>
  )
}

export default Button
