import React from 'react'
import ReactDOM from 'react-dom'

function App() {

  return (
    <div id="body-div">
      <header>
        <nav>
          <ul id="nav-header">
            <li>
              <a href="#" id="home-nav-header">Today</a>
            </li>
            <li>
              <a href="past.html" id="past-nav-header">Past</a>
            </li>
          </ul>
        </nav>
      </header>
      <container>
        <div id="today-container">
          <h1>"So, what did you do today?"</h1>
          <div id="box">
            <div id="overnight-box">
              <input type="text" id="overnight-input" placeholder="where did you sleep?" />
            </div>
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
          </div>
        </div>
      </container>
      <footer>
        <span>&copy; 2019 cerosner</span>
      </footer>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

/* Component Outline draft:

<BodyDiv />
  <Header />
    <Nav />
  <Container />
    <Today />
    <Past />
  <Footer />

*/