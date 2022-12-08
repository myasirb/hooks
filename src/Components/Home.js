import React, { useContext } from 'react'
import NewContact from './NewContact'
import ContactList from './ContactList'
import { ContactContext } from '../context/ContactContext';

import './css/Home.css'

const Home = () => {
  const contact = useContext(ContactContext);

  return (
    <div className='App-home'>
        <NewContact />

        <hr/>
        
        <ContactList contacts={contact.list} count = {contact.count}/>

        {/* <ContactList contacts={[]}/> */}
    </div>
  )
}

export default Home