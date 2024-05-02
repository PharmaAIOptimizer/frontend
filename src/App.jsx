import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import History from './pages/History'
import Favorited from './pages/Favorited'
import Help from './pages/Help'
import { DrugProvider } from './services/providers/DrugContext'
import { SearchProvider } from './services/providers/SearchContext'
import HistoryResults from './pages/HistoryResults'
import { HistoryProvider } from './services/providers/HistoryContext'
import LayoutHistory from './components/history/LayoutHistory'
import LayoutFavorited from './components/favorited/LayoutFavorited'
import FavoriteResults from './pages/FavoriteResults'
import UploadImageToS3WithNativeSdk from './services/api/UploadImageToS3WithNativeSdk'

function App() {
    return (
        <SearchProvider>
            <DrugProvider>
                <HistoryProvider>
                    <Router>
                        <Routes>
                            <Route path="/" element={<Register />} />
                            <Route path="/home" element={<Layout />}>
                                <Route index element={<Dashboard />} />
                            </Route>
                            <Route path="/upload" element={<Layout />}>
                                <Route index element={<UploadImageToS3WithNativeSdk />} />
                            </Route>
                            <Route path="/history" element={<LayoutHistory />}>
                                <Route index element={<History />} />
                            </Route>
                            <Route path="/history-results" element={<LayoutHistory />}>
                                <Route index element={<HistoryResults />} />
                            </Route>
                            <Route path="/favorite-results" element={<LayoutFavorited />}>
                                <Route index element={<FavoriteResults />} />
                            </Route>
                            <Route path="/favorited" element={<LayoutFavorited />}>
                                <Route index element={<Favorited />} />
                            </Route>
                            <Route path="/help" element={<Layout />}>
                                <Route index element={<Help />} />
                            </Route>
                        </Routes>
                    </Router>
                </HistoryProvider>
            </DrugProvider>
        </SearchProvider>
    )
}

export default App
