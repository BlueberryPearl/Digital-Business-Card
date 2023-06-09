import React from 'react';
import ReactDOM from 'react-dom/client';
import Info from "./components/Info/info";
import About from "./components/about";
import Interests from "./components/interests";
import Footer from './components/Footer/footer';


function Card() {
  return (
    <div className='page'>
      <div className='main'>
        <Info />
        <About />
        <Interests />
      </div>
      <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Card />
);


