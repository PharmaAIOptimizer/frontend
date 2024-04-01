import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
// import Home from './pages/Home'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Register />}/>
                <Route path="/home" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="products" element={<Products />} />
                </Route>
                {/* <Route path="/register" element={<Register />} /> */}
            </Routes>
        </Router>
    )
}

export default App
