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
import Bio from './Bio/Bio';
import Filters from './Projects/Filters';
import ProjectList from './Projects/ProjectList';
import Contact from './Contact/Contact';
import Footer from './Layout/Footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.changeFilters = this.changeFilters.bind(this);
    this.state = {
      scrollY: 0,
      projectsInfo: ProjectsInfoList,
      infoFilters: {
        textFilter: "",
        typeFilter: "all",
        statusFilter: "all",
        order: "id",
        orderReverse: false
      }
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
      let distanceToTop = window.scrollY;
      this.setState({
        scrollY: distanceToTop,
      });
  }

  changeFilters(name, value) {
    const newInfoFilters = this.state.infoFilters;
    newInfoFilters[name] = value;
    this.setState({ infoFilters: newInfoFilters })
  };


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
          id="bio" 
          title="bio" 
          description="Esta soy yo. Aquí puedes conocer mis andanzas profesionales y descargar mi CV, o compartirlo si se te ocurre alguien con quien sería genial colaborar"
          themeColor="false"
        >
          <Bio/>
        </Aside>

        <ParallaxSection 
          id="parallax2" 
          quote="... and beginnings are all about practice"
          imgURL="https://66.media.tumblr.com/9c1969a434d53369ade9c1a79f19d342/tumblr_ppam2jleFd1sfie3io1_1280.jpg"
        />

        <Aside 
          id="works" 
          title="works" 
          description="estos son algunos de mis trabajos, puedes filtrarlos y ordenarlos para ver los que más te interesen"
          themeColor="false"
          >
            <Filters info={this.state.infoFilters} task={this.changeFilters}/>
            <ProjectList info={this.state}/>
        </Aside>

        <Aside 
          id="contact" 
          title="contact" 
          description="si lo que has visto te parece interesante, no dudes en ponerte en contacto comnigo, me encantará tener noticias tuyas!"
          themeColor="false"
        >
          <Contact/>        
        </Aside>

        <Footer/>
      </div>
    );
  }
}