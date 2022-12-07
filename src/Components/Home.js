import React from 'react'
import NewContact from './NewContact'
import ContactList from './ContactList'

import './css/Home.css'

const Home = () => {
  return (
    <div className='App-home'>
        <NewContact />

        <hr/>

        <ContactList contacts={[{name: "Muhammad Yasir", number: "03064171644"}, {name: "Muhammad Yasir", number: "03064171644"},{name: "Muhammad Yasir", number: "03064171644"}]}/>
    </div>
  )
}

export default Home