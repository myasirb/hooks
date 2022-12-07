import React from 'react'
import NewContact from './NewContact'
import ContactList from './ContactList'

import './css/Home.css'

const Home = () => {
  return (
    <div className='App-home'>
        <NewContact />

        <hr/>

        <ContactList contacts={[]}/>
    </div>
  )
}

export default Home