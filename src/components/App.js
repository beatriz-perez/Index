import React from 'react';

// Styles:
import '../stylesheets/App.scss';

// Data:
import ProjectsInfoList from '../data/projects.json';

// Components:
import Header from './Layout/Header';
import Main from './Layout/Main';
import ParallaxSection from './Layout/ParallaxSection';
import Aside from './Layout/Aside';
import ProjectList from './Projects/ProjectList';
import ContactSection from './Layout/ContactSection';
import Footer from './Layout/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      scrollY: 0,
      projectsInfo: ProjectsInfoList
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) { //--------------------------------> CONTROLA EL SCROLL DE LA VENTANA Y LO PASA AL ESTADO
      let distanceToTop = window.scrollY;
      this.setState({
        scrollY: distanceToTop
      });
  }


  render() {
    return (
      <div className="App">
        <Header/>
        <Main info={this.state.scrollY}/>
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
            <ProjectList info={this.state.projectsInfo}/>
        </Aside>

        <ContactSection/>        
        <Footer/>

      </div>
    );
  }
}

export default App;
