import React from 'react';
import logo from './logo.svg';
import data from './user/user.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends React.Component {
  static defaultProps = {
    name: data['results'][0].name['title'] + ' ' + data['results'][0].name['first'] + ' ' + data['results'][0].name['last'],
    mdp: data['results'][0].login['password'],
    username: data['results'][0].login['username'],
    img: data['results'][0].picture['thumbnail']
    
  }
  
  constructor(props) {
    super(props)
    
  }
  
  render() {
  return (
    <div className="App">
    <div className="container">
      <div className="card ml-0 mr-0 m-auto data">
        <img className="card-img-top img-fluid" src={this.props.img}  alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">Nom d'utilisateur : {this.props.username}</p>
          <p className="card-text">Mot de passe : {this.props.mdp}</p>
          <a href="https://tinder.com" className="btn btn-primary">Accéder à son profil</a>
        </div>
      </div>
      </div>
    </div>
  );
}
}
export default App;
