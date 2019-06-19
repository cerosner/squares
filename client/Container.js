import React from 'react'
import { Overnight, Buttons, Sleep } from './Inputs'

export function Today() {
  return (
    <div id="today-container">
      <h1>"So, what did you do today?"</h1>
      <div id="box">
        <Overnight />
        <Buttons />
        <Sleep />
      </div>
    </div>
  )
}

export function Past() {
  return (
    <div id="past-container">
      <h1>Past squares</h1>
    </div>
  )
}