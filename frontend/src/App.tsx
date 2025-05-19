import { Routes, Route, Navigate } from 'react-router-dom';
import Upload from './pages/Upload';
import Chat from './pages/Chat';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Upload />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
