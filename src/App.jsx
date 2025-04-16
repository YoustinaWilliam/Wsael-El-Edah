import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBAR from './components/NavBAR';
import ImageSlider from './pages/ImageSlider';
import About from './pages/About';
import Activities from './pages/Activities';
import NotFound from './pages/NotFound';
import ServicesPage from './pages/ServicesPage';
import Children from './pages/Children';
import Footer from './components/Footer';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <NavBAR />
        <div style={{ marginTop: "50px", flex: "1" }}>
          <Routes>
            <Route
              path="/Wsael-El-Edah"
              element={
                <>
                  <div id="home">
                    <ImageSlider />
                  </div>
                  <div id="about" className="w-100">
                    <About />
                  </div>
                  <hr className="my-5 mx-auto w-75 border-3 border-danger rounded-pill" />
                  <div id="activities" className="w-100">
                    <Activities />
                  </div>
                  <hr className="my-5 mx-auto w-75 border-3 border-danger rounded-pill" />
                  <div id="contact" className="w-100">
                    <Contact />
                  </div>
                </>
              }
            />
            <Route path="/Wsael-El-Edah/services" element={<ServicesPage />} />
            <Route path="/Wsael-El-Edah/children" element={<Children />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;