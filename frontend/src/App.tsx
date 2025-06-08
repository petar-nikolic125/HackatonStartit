import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home    from './pages/Home';
import Pricing from './pages/Pricing';
import Chat    from './pages/Chat';
import Login   from './pages/Login';
import Signup  from './pages/Signup';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"        element={<Home   />} />
                <Route path="/pricing" element={<Pricing/>} />
                <Route path="/chat"    element={<Chat   />} />
                <Route path="/login"   element={<Login  />} />
                <Route path="/signup"  element={<Signup />} />
            </Routes>
        </BrowserRouter>
    );
}
