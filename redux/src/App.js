import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Header from './components/Header';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';
function App() {
  return (
    <div className="App">
    <Router>
     <Header />
     <Switch>
       <Route path="/" exact component={ProductList} />
       <Route path="/product/:productId" exact component={ProductDetail} />
       <Route><p className="not-found">Not found 404</p></Route>
     </Switch>
    </Router>
    
    </div>
  );
}

export default App;
