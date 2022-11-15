import { useContext } from 'react'
import './App.css'
import Contact from './component/contact'
import Experience from './component/experience'
import Footer from './component/footer'
import Intro from './component/intro'
import Navbar from './component/navbar'
import Portfolio from './component/portfolio'
import Service from './component/service'
import Testimanial from './component/testimanial'
import { ThemeContext } from './context/Context'

function App() {
    const { darkMode } = useContext(ThemeContext)

    return (
        <div
            className="app"
            style={{
                background: darkMode ? 'black' : '',
                color: darkMode ? 'white' : '',
            }}
        >
            <Navbar />
            <Intro />
            <Service />
            <Experience />
            <Portfolio />
            <Testimanial />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
