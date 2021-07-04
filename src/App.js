import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Registration from './components/Registration/Registration';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/" render={() => <Main />} />
        <Route path="/Registration" render={() => <Registration />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
App.displayName = "App";