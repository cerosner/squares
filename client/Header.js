import React from 'react'

export default function Header(props) {
  const { setView } = props

  return (
    <header>
      <ul id="nav-header">
        <li id="home-nav-header" onClick={() => setView('today')}>
          <p>Today</p>
        </li>
        <li id="past-nav-header" onClick={() => setView('past')}>
          <p>Past</p>
        </li>
      </ul>
    </header>
  )
}
