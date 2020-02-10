import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import TopContent from './components/TopContent';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <TopContent />
      <Form />
      <Footer />
    </>
  );
}

export default App;
