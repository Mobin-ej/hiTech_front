import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Bnr from './components/Bnr';
import Ivent from './components/Ivent';
import Sbt from './components/Sbt';
import Footer from './components/Footer';
import Form1 from './components/Form1';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="w-screen h-screen flex flex-col items-center">
              <Navbar />
              <div className="flex-grow flex mt-32 w-screen justify-center">
                <Bnr />
                <div className="flex-grow flex w-screen justify-center mt-10">
                  <Ivent />
                </div>
              </div>
              <div className="mt-10 mb-10">
                <Sbt />
              </div>
              <Footer />
            </div>
          }
        />
        <Route path="/form1" element={<Form1 />} />
      </Routes>
    </Router>
  );
}

export default App;
