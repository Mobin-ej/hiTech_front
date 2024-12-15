import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Bnr from './components/Bnr';
import Ivent from './components/Ivent';
import Sbt from './components/Sbt';
import Footer from './components/Footer';
import Form1 from './components/Form1';
import Form2 from './components/Form2'; // اضافه کردن Form2

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
                <div className="flex-grow flex w-screen justify-center mr-5 mt-10">
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
        <Route path="/form2" element={<Form2 />} /> {/* مسیر جدید برای Form2 */}
      </Routes>
    </Router>
  );
}

export default App;
