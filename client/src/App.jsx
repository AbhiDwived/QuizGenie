import { useEffect } from 'react';
import api from './services/api';

function App() {
  useEffect(() => {
    api.get('/')
      .then(res => console.log('✅ Backend Response:', res.data))
      .catch(err => console.error('❌ Error:', err));
  }, []);

  return (
    <div className="text-xl text-green-600 font-semibold p-4">
      Frontend Connected to Backend!
    </div>
  );
}

export default App;
