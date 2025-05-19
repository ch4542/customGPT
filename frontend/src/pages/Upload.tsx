import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import Progress from '../components/Progress';

export default function Upload() {
  const [step, setStep] = useState(0);
  const [apiKey, setApiKey] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey) setStep(1);
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);
    try {
      await api.post('/upload', { apiKey, file: await file.text() });
      navigate('/chat');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      {step === 0 && (
        <form onSubmit={handleKeySubmit} className="space-y-4">
          <input
            type="password"
            placeholder="OpenAI API Key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="border p-2 w-full"
          />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white">
            Next
          </button>
        </form>
      )}
      {step === 1 && (
        <form onSubmit={handleUpload} className="space-y-4">
          <input
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="w-full"
          />
          <button type="submit" className="px-4 py-2 bg-green-600 text-white">
            Upload
          </button>
        </form>
      )}
      <div className="mt-4">
        <Progress />
      </div>
    </div>
  );
}
