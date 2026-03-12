import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Verify from './pages/Verify';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CategoryView from './pages/CategoryView';
import { Toaster } from 'sonner';

function App() {
  return (
    <Router>
      <div className="min-h-[100dvh] bg-black flex items-center justify-center w-full py-0 sm:py-8 overflow-hidden">
        {/* Mobile App Container Simulation - iOS Bezel-less Style */}
        <div className="w-full h-[100dvh] sm:h-[850px] max-w-[400px] bg-[#f5f5f7] sm:rounded-[55px] shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative overflow-hidden flex flex-col sm:border-[12px] sm:border-[#1a1a1a]">

          {/* Dynamic Island Simulation (Desktop only) */}
          <div className="hidden sm:block absolute top-0 inset-x-0 h-7 flex justify-center z-50 pointer-events-none mt-2">
            <div className="w-28 h-7 bg-black rounded-full shadow-inner"></div>
          </div>

          <Toaster position="top-center" richColors />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Dashboard />} />
            <Route path="/category/:id" element={<CategoryView />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
