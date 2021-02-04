import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import About from './components/about/About';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/shop" component={Shop} />
          <Route path="/about" component={About} />
          <Redirect to={"/"} />
        </Switch>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
