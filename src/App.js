import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import About from "./pages/About"
import Home from "./pages/Home"
import Housing from "./pages/Housing"
import NotFound from "./pages/NotFound"
import "./styles/App.css"


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Housing" element={<Housing />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default App
