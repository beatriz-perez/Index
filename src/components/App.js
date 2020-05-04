import React from 'react';
import '../stylesheets/App.scss';
import Header from './Header';
import Main from './Main';
import ParallaxSection from './ParallaxSection';
import Aside from './Aside';
import ContactSection from './ContactSection';
import Footer from './Footer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <Main />

        <ParallaxSection 
          id="parallax1" 
          quote="this is just the very beginning..."
          imgURL="https://66.media.tumblr.com/748fbc350eea31d4cbf153ade7b7795e/tumblr_ps7ycg53XQ1sfie3io1_1280.jpg" 
        />

        <Aside 
          id="aside1" 
          asideTitle="Título de sección Aside" 
          asideRole="Función de la sección">
        </Aside>

        <ParallaxSection 
          id="parallax2" 
          quote="... and beginnings are all about practice"
          imgURL="https://66.media.tumblr.com/9c1969a434d53369ade9c1a79f19d342/tumblr_ppam2jleFd1sfie3io1_1280.jpg"
        />

        <Aside 
          id="aside2" 
          asideTitle="Ejercicios y PROYECTOS realizados" 
          asideRole="listado de proyectos">
        </Aside>

        <ContactSection 
          id="contactSection" 
          title="Contact me!"
        >
        </ContactSection>
        
        <Footer/>

      </div>
    );
  }
}

export default App;