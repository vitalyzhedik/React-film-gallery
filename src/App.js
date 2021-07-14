import React from 'react';
import { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Autorization from './components/Autorization/Autorization';
import FilmPage from './components/FilmPage/FilmPage';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import users from './dummy_data/users.json'
import Registration from './components/Registration/Registration';
import AddFilm from './components/AddFilm/AddFilm';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filmData: {},
      users: users,
      userData: {},
    };
  }

  getFilmData = (filmData) => {
    this.setState({
      filmData: filmData
    })
  };

  getUserData = (userData) => {
    this.setState({
      userData: userData
    })
  };

  getUserIsLoggined = (userData) => {
    this.setState({
      userData: userData
    })
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header userData={this.state.userData} getUserData={this.getUserData}/>
          <Switch>
            <Route exact path="/" render={() => <Main getFilmData={this.getFilmData} userData={this.state.userData} />} />
            <Route exact path="/Autorization" render={() => <Autorization usersData={this.state.users} getUserData={this.getUserData}/>} />
            <Route exact path="/Registration" render={() => <Registration usersData={this.state.users} getUserData={this.getUserData}/>} />
            <Route exact path="/FilmPage" render={() => <FilmPage filmData={this.state.filmData} userData={this.state.userData}/>} />
            <Route exact path="/AddFilm" render={() => <AddFilm />} />
            <Route exact path="/NotFoundPage" render={() => <NotFoundPage />} />
            <Redirect to="/NotFoundPage" />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
App.displayName = "App";