import React, { useState } from 'react'
import Header from './Header'
import { Today, Past } from './Container'

export default function Main() {
  const [view, setView] = useState('home')

  return (
    <div id="body-div">
      <Header setView={setView} />
      <div id="container"> { view === 'past' ?
        <Past /> : <Today /> }
      </div>
      <footer>
        <span>&copy; 2019 cerosner</span>
      </footer>
    </div>
  )
}
