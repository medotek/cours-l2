import React from 'react';
import logo from './logo.svg';
import Layout from "./components/layout.js";
import './App.css';


class App extends React.Component {
 
  
  constructor(props) {
    super(props)
    
  }
  
  render() {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}
}
export default App;
