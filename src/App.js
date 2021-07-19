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
      newFilmData: '',
      filmIdForDelete: ''
    };
  }

  getFilmData = (filmData) => {
    this.setState({
      filmData: filmData
    })
  };

  getNewFilmData = (newFilmData) => {
    this.setState({
      newFilmData: newFilmData
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

  getfilmIdForDelete = (id) => {
    this.setState({
      filmIdForDelete: id
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header userData={this.state.userData} getUserData={this.getUserData} />
          <Switch>
            <Route exact path="/" render={() =>
              <Main
                getFilmData={this.getFilmData}
                userData={this.state.userData}
                getNewFilmData={this.getNewFilmData}
                newFilmData={this.state.newFilmData} 
                filmIdForDelete={this.state.filmIdForDelete}/>} />
            <Route exact path="/Autorization" render={() =>
              <Autorization
                usersData={this.state.users}
                getUserData={this.getUserData} />} />
            <Route exact path="/Registration" render={() =>
              <Registration
                usersData={this.state.users}
                getUserData={this.getUserData} />} />
            <Route exact path="/FilmPage" render={() =>
              <FilmPage
                filmData={this.state.filmData}
                userData={this.state.userData}
                getfilmIdForDelete={this.getfilmIdForDelete} />} />
            <Route exact path="/AddFilm" render={() =>
              <AddFilm
                userData={this.state.userData}
                getNewFilmData={this.getNewFilmData} />} />
            <Route exact path="/NotFoundPage" render={() => <NotFoundPage />} />
            <Redirect to="/NotFoundPage" />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
};

export default App;
App.displayName = "App";