import DomeGallery from '../components/sections/DomeGallery';
import { Link } from 'react-router-dom';

export default function PhotoGallery() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <DomeGallery />
      <Link to="/" className="absolute top-4 left-4 bg-slate-800/50 text-white px-4 py-2 rounded-md hover:bg-cyan-500/50 transition-colors z-50">
        Back to Home
      </Link>
      <img src="/public/images/logo.png" alt="Logo" className="absolute top-4 right-4 h-10 w-auto z-50" />
    </div>
  );
}
