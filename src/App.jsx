import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import History from './pages/History'
// import Home from './pages/Home'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Register />}/>
                <Route path="/home" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                </Route>
                <Route path="/history" element={<Layout />}>
                    <Route index element={<History />} />
                </Route>
                <Route path="/starred" element={<Layout />}>
                    <Route index element={<History />} />
                </Route>
                {/* <Route path="/register" element={<Register />} /> */}
            </Routes>
        </Router>
    )
}

export default App
