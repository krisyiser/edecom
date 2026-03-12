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
      <div className="min-h-[100dvh] bg-slate-100 flex items-center justify-center w-full py-0 sm:py-8">
        {/* Mobile App Container Simulation */}
        <div className="w-full h-[100dvh] sm:h-[850px] max-w-[400px] bg-white sm:rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col sm:border-[8px] sm:border-gray-900">
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
