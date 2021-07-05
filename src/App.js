import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Autorization from './components/Autorization/Autorization';
import FilmPage from './components/FilmPage/FilmPage';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { Component } from 'react';
import users from './dummy_data/users.json'
import Registration from './components/Registration/Registration';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filmData: {},
      users: users,
      path: "",
      isAdmin: false,
      isAutorizedUser: false,
      userName: ''
    };
  }

  getFilmData = (filmData) => {
    this.setState({
      filmData: filmData
    })
  };

  getPath = (path) => {
    this.setState({
      path: path
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" render={() => <Main getFilmData={this.getFilmData} />} />
          <Route path="/Autorization" render={() => <Autorization usersData={this.state.users} getPath={this.getPath} path={this.state.path}/>} />
          <Route path="/Registration" render={() => <Registration />} />
          <Route path="/FilmPage" render={() => <FilmPage filmData={this.state.filmData}/>} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
App.displayName = "App";