import React, { useContext } from 'react'
import NewContact from './NewContact'
import ContactList from './ContactList'
import { ContactContext } from '../context/ContactContext';

import './css/Home.css'

const Home = () => {
  // get context
  const contact = useContext(ContactContext);

  return (
    <div className='App-home'>
        <NewContact />

        <hr/>
        
        {/* passing list of contacts from context in child component */}
        <ContactList contacts={contact.list} count = {contact.count}/>

    </div>
  )
}

export default Home