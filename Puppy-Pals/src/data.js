import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

const backgroundImage = "https://your-uploaded-image-url.com/background.jpg"; // Replace with actual URL
const shamrock = "https://your-uploaded-image-url.com/shamrock.png"; // Replace with actual URL

const Home = () => (
  <div 
    className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-white px-6" 
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <h1 className="text-8xl font-extrabold text-yellow-400 mb-12 shadow-2xl drop-shadow-xl animate-pulse">Live Able</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 w-full max-w-5xl">
      <Link to="/resources" className="bg-gradient-to-r from-green-700 to-green-500 text-white font-bold text-2xl p-10 rounded-2xl shadow-2xl flex flex-col items-center no-underline hover:scale-110 hover:shadow-lg transition transform duration-300">
        <img src={shamrock} alt="Shamrock" className="w-24 mb-4" />
        Resources
      </Link>
      <Link to="/3d-hub" className="bg-gradient-to-r from-green-700 to-green-500 text-white font-bold text-2xl p-10 rounded-2xl shadow-2xl flex flex-col items-center no-underline hover:scale-110 hover:shadow-lg transition transform duration-300">
        <img src={shamrock} alt="Shamrock" className="w-24 mb-4" />
        3D Hub
      </Link>
      <Link to="/community" className="bg-gradient-to-r from-green-700 to-green-500 text-white font-bold text-2xl p-10 rounded-2xl shadow-2xl flex flex-col items-center no-underline hover:scale-110 hover:shadow-lg transition transform duration-300">
        <img src={shamrock} alt="Shamrock" className="w-24 mb-4" />
        Community
      </Link>
    </div>
    <Link to="/3d-request" className="bg-yellow-500 text-green-900 font-bold text-2xl px-14 py-6 rounded-2xl shadow-2xl hover:scale-110 hover:shadow-lg transition transform duration-300">3D Modification Request</Link>
  </div>
);

const Resources = () => <div className="p-8 text-center text-2xl bg-green-900 text-white min-h-screen">Resources Page</div>;
const ThreeDHub = () => <div className="p-8 text-center text-2xl bg-green-900 text-white min-h-screen">3D Hub Page</div>;
const Community = () => <div className="p-8 text-center text-2xl bg-green-900 text-white min-h-screen">Community Page</div>;

const ThreeDRequest = () => {
  const [files, setFiles] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
    const uploadedFiles = Array.from(event.dataTransfer.files);
    setFiles(uploadedFiles);
  };

  return (
    <div className="p-8 text-center text-2xl border-dashed border-4 border-yellow-400 bg-green-900 text-white min-h-screen flex flex-col items-center justify-center" onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
      <p>Drag and drop your 3D modification request here.</p>
      {files.length > 0 && (
        <ul className="mt-4">
          {files.map((file, index) => (
            <li key={index} className="text-lg">{file.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/3d-hub" element={<ThreeDHub />} />
        <Route path="/community" element={<Community />} />
        <Route path="/3d-request" element={<ThreeDRequest />} />
      </Routes>
    </Router>
  );
};

export default App;
