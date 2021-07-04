import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Autorization from './components/Autorization/Autorization';
import FilmPage from './components/FilmPage/FilmPage';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filmData: {}
    };
  }

  getFilmData = (filmData) => {
    this.setState({
      filmData: filmData
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" render={() => <Main getFilmData={this.getFilmData} />} />
          <Route path="/Autorization" render={() => <Autorization />} />
          <Route path="/FilmPage" render={() => <FilmPage filmData={this.state.filmData}/>} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
App.displayName = "App";