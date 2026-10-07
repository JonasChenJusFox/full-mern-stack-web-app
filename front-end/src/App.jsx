import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Messages from './Messages'
import MessageStandalone from './MessageStandalone'
import Home from './Home'
import About from './About'
import Header from './Header'
import Footer from './Footer'

const App = props => {
  return (
    <div className="App">
      <Router>
        <Header />

        <main className="App-main">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/messages" element={<Messages />} />

            <Route
              path="/messages/:messageId"
              element={<MessageStandalone />}
            />
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  )
}

export default App