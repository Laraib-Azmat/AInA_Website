
import React from 'react'
import Form from './Form'
import styles from './Contact.module.css'


export default function Contact() {

 

  return (

      <div id='contact' className={styles['contact-sec']}  >

          <Form />
          <div className={styles.circle} ></div>
    </div>
  )
}
