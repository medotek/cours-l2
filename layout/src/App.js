import React from 'react';
import logo from './logo.svg';
import data from './user/user.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends React.Component {
  render() {
  return (
    <div className="App">
    <div class="container">
      <div className="card ml-0 mr-0 m-auto data">
        <img className="card-img-top img-fluid" src={data['results'][0].picture['thumbnail']}  alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{data['results'][0].name['title']} {data['results'][0].name['first']} {data['results'][0].name['last']} </h5>
          <p className="card-text">Nom d'utilisateur : {data['results'][0].login['username']}</p>
          <p clas="card-text">Mot de passe : {data['results'][0].login['password']}</p>
          <a href="https://tinder.com" className="btn btn-primary">Accéder à son profil</a>
        </div>
      </div>
      </div>
    </div>
  );
}
}
export default App;
