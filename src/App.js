import * as React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import DrawerAppBar from './components/DrawerAppBar';
import HomePage from './pages/HomePage';
import Footer from './components/footer/Footer';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
    <DrawerAppBar />
    <section className="mainContainer">
      <Routes>
      <Route path='/inicio' element={ <HomePage/>}/>
      <Route path='/contacto' element={ <ContactPage/>}/>
      <Route path="*" element={<Navigate replace to="/inicio" />} />

      </Routes>
      
    </section>
    <Footer />

    
    </BrowserRouter>
    
    
  );
}

export default App;
