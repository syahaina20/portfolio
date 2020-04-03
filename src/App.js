import React from 'react';
import 
  { 
    BrowserRouter as 
    Router, 
    Route, 
    Link 
  } 
from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {

      title: 'Aina Syahirah',
      headerLinks: [
        { 
          title: 'Home', 
          path: '/syahhomepage' 
        },

        { 
          title: 'About', 
          path: '/aboutsyahpage' 
        },

        { 
          title: 'Contact', 
          path: '/contactsyahpage' 
        }
      ],

      homesyah: 
        {
          title: '| Welcome |',
          subTitle: 'My Simple Portfolio',
          text: 'My dummy project is shown in this website. Photo credits are to the original artists.'
        },

      aboutsyah: 
        {
          title: '| About Me |'
        },

      contactsyah: 
        {
          title: '| Contact Me Here |'
        }
    }
  }

  render() {
    return (

      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar 
            className="border-bottom" 
            bg="transparent" 
            expand="lg"
          >
          <Navbar.Brand>
            <i>Aina Syahirah Portfolio</i>
          </Navbar.Brand>

            <Navbar.Toggle 
              className="border-0" 
              aria-controls="navbar-toggle" 
            />
            <Navbar.Collapse id="navbar-toggle">

              <Nav className="ml-auto">

                <Link className="nav-link" to="/syahhomepage">
                  Home
                </Link>

                <Link className="nav-link" to="/aboutsyahpage">
                  About
                </Link>

                <Link className="nav-link" to="/contactsyahpage">
                  Contact
                </Link>

              </Nav>

            </Navbar.Collapse>
            
          </Navbar>

          <Route 
            path="/syahhomepage" 
            exact render={() => <HomePage 
              title={this.state.homesyah.title} 
              subTitle={this.state.homesyah.subTitle} 
              text={this.state.homesyah.text} 
            />} 
          />

          <Route 
            path="/aboutsyahpage" 
            render={() => <AboutPage 
              title={this.state.aboutsyah.title} 
            />} 
          />

          <Route 
            path="/contactsyahpage" 
            render={() => <ContactPage 
              title={this.state.contactsyah.title} 
            />} 
          />
          
          <Footer />

        </Container>
      </Router>

    );
  }

}

export default App;