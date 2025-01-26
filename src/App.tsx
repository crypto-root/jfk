import React, { useState } from 'react';
import { FileText, PlayCircle, ExternalLink, Lock, Timer, X, Check } from 'lucide-react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Whitepaper from './pages/Whitepaper';

// Document/Video type definition
interface Resource {
  id: string;
  title: string;
  type: 'document' | 'video';
  thumbnail: string;
  status: 'upcoming' | 'available';
  description?: string;
}

interface NotifyModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

function NotifyModal({ isOpen, onClose, title }: NotifyModalProps) {
  const [wallet, setWallet] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setWallet('');
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-slate-800 rounded-xl p-6 max-w-md w-full mx-4 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>
        
        {!isSubmitted ? (
          <>
            <h3 className="text-xl font-semibold mb-4 text-white">Get Notified: {title}</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="wallet" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Wallet Address
                </label>
                <input
                  type="text"
                  id="wallet"
                  value={wallet}
                  onChange={(e) => setWallet(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                  placeholder="0x..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Notify Me
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500 rounded-full mb-4">
              <Check size={24} className="text-white" />
            </div>
            <p className="text-white text-lg font-semibold">You're all set!</p>
            <p className="text-gray-400 mt-2">We'll notify you when the content becomes available.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function Home() {
  const [notifyModal, setNotifyModal] = useState({ isOpen: false, title: '' });

  const resources: Resource[] = [
    {
      id: '1',
      title: 'Warren Commission Classified Appendix',
      type: 'document',
      thumbnail: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=400',
      status: 'upcoming',
      description: 'Unreleased appendices containing witness testimonies and forensic analyses previously withheld from public view.'
    },
    {
      id: '2',
      title: 'Dealey Plaza Surveillance Footage',
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1577496549804-8c8321505395?auto=format&fit=crop&q=80&w=400',
      status: 'upcoming',
      description: 'Recently discovered surveillance footage from previously unknown cameras in Dealey Plaza on November 22, 1963.'
    },
    {
      id: '3',
      title: 'CIA Internal Memos (1963-1964)',
      type: 'document',
      thumbnail: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=400',
      status: 'upcoming',
      description: 'Internal communications and classified memos regarding the investigation and its findings.'
    },
    {
      id: '4',
      title: 'Secret Service Radio Transmissions',
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1596265371388-43edbaadab94?auto=format&fit=crop&q=80&w=400',
      status: 'upcoming',
      description: 'Complete audio recordings of Secret Service radio channels during and after the events.'
    },
    {
      id: '5',
      title: 'Autopsy Report - Complete Version',
      type: 'document',
      thumbnail: 'https://images.unsplash.com/photo-1585828922344-85c9daa264b0?auto=format&fit=crop&q=80&w=400',
      status: 'upcoming',
      description: 'Unredacted autopsy findings including previously classified medical examiner notes and photographs.'
    },
    {
      id: '6',
      title: 'Witness Interview Compilation',
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1592819695396-064b9572a660?auto=format&fit=crop&q=80&w=400',
      status: 'upcoming',
      description: 'Collection of never-before-seen witness interviews conducted in the days following the assassination.'
    },
    {
      id: '7',
      title: 'FBI Surveillance Reports',
      type: 'document',
      thumbnail: 'https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?auto=format&fit=crop&q=80&w=400',
      status: 'upcoming',
      description: 'Detailed FBI surveillance reports on key persons of interest in the weeks leading up to the assassination.'
    },
    {
      id: '8',
      title: 'Air Force One Communications',
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=400',
      status: 'upcoming',
      description: 'Complete audio recordings from Air Force One during the flight from Dallas to Washington D.C.'
    },
    {
      id: '9',
      title: 'Parkland Hospital Medical Records',
      type: 'document',
      thumbnail: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400',
      status: 'upcoming',
      description: 'Original medical records and staff testimonies from Parkland Memorial Hospital on November 22, 1963.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'url(/src/kennedy.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
            KENNEDY COIN
          </h1>
          <p className="text-2xl mb-8 text-gray-300">
            Unlocking the Truth Through Blockchain Technology
          </p>
          <div className="flex justify-center gap-6">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition-all">
              Buy KENNEDY
            </button>
            <Link 
              to="/whitepaper"
              className="border-2 border-yellow-500 hover:bg-yellow-500/10 text-yellow-500 font-bold py-3 px-8 rounded-full transition-all"
            >
              View Whitepaper
            </Link>
          </div>
        </div>
      </div>

      {/* Declassified Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
            Declassified Content Vault
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <div key={resource.id} className="bg-slate-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative">
                <img 
                  src={resource.thumbnail} 
                  alt={resource.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                  {resource.status === 'upcoming' ? (
                    <>
                      <Timer size={16} />
                      Upcoming
                    </>
                  ) : (
                    <>
                      <Lock size={16} />
                      Available
                    </>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {resource.type === 'document' ? (
                    <FileText className="text-yellow-500" size={20} />
                  ) : (
                    <PlayCircle className="text-yellow-500" size={20} />
                  )}
                  <span className="text-gray-400 text-sm">
                    {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
                
                <p className="text-gray-400 text-sm mb-4">
                  {resource.description}
                </p>
                
                <button 
                  onClick={() => setNotifyModal({ isOpen: true, title: resource.title })}
                  className="w-full bg-slate-700 hover:bg-slate-600 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  {resource.status === 'upcoming' ? 'Notify Me' : 'Access Content'}
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-yellow-500">KENNEDY Coin</h3>
              <p className="text-gray-400">
                Revolutionizing historical transparency through blockchain technology.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-yellow-500">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/whitepaper" className="text-gray-400 hover:text-yellow-500 transition-colors">
                    Whitepaper
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                    Buy Token
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                    Content Vault
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2024 KENNEDY Coin. All rights reserved.</p>
            <p className="mt-2 text-sm text-gray-500">
              KENNEDY Coin is not affiliated with any government agency or the Kennedy family.
            </p>
          </div>
        </div>
      </footer>

      <NotifyModal 
        isOpen={notifyModal.isOpen}
        onClose={() => setNotifyModal({ isOpen: false, title: '' })}
        title={notifyModal.title}
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
      </Routes>
    </Router>
  );
}

export default App;