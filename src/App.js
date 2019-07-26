import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route }from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

class App extends React.Component{

  constructor (props){
    super(props)
    this.state = {
      
    }
   
  }
  

  render() {
    return (
      <Router>
          <div className="d-flex flex-column h-100">
            <Navbar /> 
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Footer />     
          </div>
      </Router>
      
      )
      

    // return (
    //   <div>
    //     <Home/>
    //     <SignUp/>
    //   </div>
    // )
  }
}

// App.defaultProps = {
//   age:18
// }
export default App;
