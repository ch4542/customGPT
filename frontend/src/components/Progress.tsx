import { useEffect, useState } from 'react';
import api from '../api';

export default function Progress() {
  const [status, setStatus] = useState<string>('Starting');

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const data = await api.get('/status');
        setStatus(data.status);
      } catch (err) {
        console.error(err);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return <div className="p-4 bg-gray-100 rounded">Status: {status}</div>;
}
