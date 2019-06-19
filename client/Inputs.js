import React from 'react'

export function Overnight() {
  return (
    <div id="overnight-box">
      <input type="text" id="overnight-input"
        placeholder="where did you sleep?" />
    </div>
  )
}

export function Buttons() {
  return (
    <div id="input-box">
      <div className="input">
        <div className="input-icon">🧘</div>
        <h6>Yoga</h6>
      </div>
      <div className="input">
        <div className="input-icon">💻</div>
        <h6>Code</h6>
      </div>
      <div className="input">
        <div className="input-icon">📖</div>
        <h6>Read</h6>
      </div>
      <div className="input">
        <div className="input-icon">🚰</div>
        <h6>Water</h6>
      </div>
      <div className="input">
        <div className="input-icon">🗒️</div>
        <h6>Notes</h6>
      </div>
      <div className="input">
        <div className="input-icon">🍽</div>
        <h6>Food</h6>
      </div>
      <div className="input">
        <div className="input-icon">🍻</div>
        <h6>Drinks</h6>
      </div>
      <div className="input">
        <div className="input-icon">🚬</div>
        <h6>Cigs</h6>
      </div>
      <div className="input">
        <div className="input-icon">💊</div>
        <h6>Meds</h6>
      </div>
    </div>
  )
}

export function Sleep() {
  return (
    <div id="sleep-box">
      <div id="sleep-input">
        <div className="sleep-icon">☀️</div>
          <input type="time" id="sleep-input-rise" />
        <div className="sleep-icon">🌙</div>
          <input type="time" id="sleep-input-rest" />
      </div>
      <div id="sleep-box-secondary">
        <label>trouble sleeping?</label>
          <input type="checkbox" id="trouble-sleeping-input" />
      </div>
    </div>
  )
}
